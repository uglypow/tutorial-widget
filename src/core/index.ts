import { componentMapping } from "@/constants/component"
import { ITourState, ITourStore, createTourStore } from "@/store/tutorialState"
import { Placement, Step } from "react-joyride"
import { StoreApi } from "zustand"
import { IWidgetInitOptions } from "../@types/widget"
import { apiClient } from "../services/httpClient"
import { IWidgetStore, createWidgetStore } from "../store/widget"
import { renderTutorialWidget } from "./renderer"

type Listener = () => void
type ErrorListener = (error: any) => void

type TourComponent = "PageTourModal" | "PageTourModalNoButton" | "Empthy"

interface ITourStep extends Step {
  component: TourComponent,
}

interface IPortalTutorialRenderOptions {
  onError?: ErrorListener
  steps: ITourStep[]
}

export class portalTutorial {
  public listeners: Set<Listener> = new Set()
  public errorListeners: Set<ErrorListener> = new Set()
  public options!: IWidgetInitOptions
  public widgetStore: StoreApi<IWidgetStore> = createWidgetStore()
  public tourStore: StoreApi<ITourStore> = createTourStore()

  public init(options: IWidgetInitOptions) {
    this.options = options

    apiClient.defaults.baseURL = options.baseUrl
  }

  public onLoad(callback: Listener) {
    if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
    ) {
      callback()
      return
    }

    this.listeners.add(callback)
  }

  public async render(
    element: string | HTMLElement,
    options: IPortalTutorialRenderOptions
  ) {
    // if (document.querySelector("#react-tutorial-widget")) {
    //   console.warn("Tutorial is already rendered")
    //   return
    // }

    this.options = {
      ...this.options,
    }

    if (options.steps) {
      this.options.steps = options.steps.map((step) => ({
        ...options.steps,
        target: step.target,
        content: step.content,
        placement: step.placement,
        tooltipComponent: componentMapping[step.component],
      }))
      this.tourStore.setState({
        state: {
          ...this.tourStore.getState().state,
          steps: this.options.steps,
        },
      })
    }

    if (options.onError) {
      this.errorListeners.add(options.onError)
    }

    let mountElement: HTMLElement | null

    if (typeof element === "string") {
      mountElement = document.querySelector(element)
    } else {
      mountElement = element
    }

    if (mountElement) {
      console.log("rendering")
      console.log(this.tourStore.getState().state)
      renderTutorialWidget(mountElement)
    }
  }

  public open() {
    this.widgetStore.setState({
      widgetOpen: true,
    })
  }

  public updateState(newState: ITourState, timeout = 100) {
    const state = this.tourStore.getState().state
    setTimeout(() => {
      this.tourStore.setState({
        state: {
          ...state,
          run: newState.run,
          stepIndex: newState.stepIndex,
        },
      })
    }, timeout)
  }

  public destroy() {
    // const element = document.querySelector("#react-tutorial-widget")

    this.tourStore.getState().reset()
    this.widgetStore.setState({
      widgetOpen: false,
    })

    // if (element) {
    //   element.remove()
    // }

    this.errorListeners = new Set()
    this.listeners = new Set()
  }
  public deleteListener = (listener: Listener) => {
    this.listeners.delete(listener)
  }
}
