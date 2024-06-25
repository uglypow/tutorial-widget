import { TourComponent, componentMapping } from "@/constants/component"
import { ITourStore, createTourStore } from "@/store/tutorialState"
import { StoreApi } from "zustand"
import { IWidgetInitOptions } from "../@types/widget"
import { apiClient } from "../services/httpClient"
import { IWidgetStore, createWidgetStore } from "../store/widget"
import { renderTutorialWidget } from "./renderer"
import { IJoyrideProps, ITourStep } from "@/@types/joyride"

type Listener = () => void
type ErrorListener = (error: any) => void

interface IPortalTutorialRenderOptions {
  userId: string;
  onError?: ErrorListener
  steps: ITourStep[]
  joyrideProps?: IJoyrideProps
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
    this.options = {
      ...this.options,
      userId: options.userId,
    }

    if (options.steps) {
      this.options.steps = options.steps.map((step) => ({
        ...step,
        target: step.target,
        content: step.content,
        placement: step.placement || "auto",
        tooltipComponent: componentMapping[step.component],
      }))
      if (options.joyrideProps) {
        this.options.joyrideProps = options.joyrideProps
      }
      this.addClickListeners(options.steps)
      // this.tourStore.setState({
      //   state: {
      //     ...this.tourStore.getState().state,
      //     steps: this.options.steps,
      //   },
      // })
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
      renderTutorialWidget(mountElement)
    }
  }

  public open() {
    this.widgetStore.setState({
      widgetOpen: true,
    })
  }

  public close() {
    this.widgetStore.setState({
      widgetOpen: false,
    })
  }

  // public updateState(newState: ITourState, timeout = 100) {
  //   const state = this.tourStore.getState().state
  //   setTimeout(() => {
  //     this.tourStore.setState({
  //       state: {
  //         ...state,
  //         run: newState.run,
  //         stepIndex: newState.stepIndex,
  //       },
  //     })
  //   }, timeout)
  // }

  public updateStepIndex(offset = 1, timeout = 100) {
    console.log("update step index")
    const state = this.tourStore.getState().state
    setTimeout(() => {
      this.tourStore.setState({
        state: {
          ...state,
          stepIndex: state.stepIndex + offset,
        },
      })
    }, timeout)
  }

  public destroy() {
    // const element = document.querySelector("#react-tutorial-widget")

    this.tourStore.getState().reset()
    this.close()

    // if (element) {
    //   element.remove()
    // }

    this.errorListeners = new Set()
    this.listeners = new Set()
  }

  public deleteListener = (listener: Listener) => {
    this.listeners.delete(listener)
  }

  private addClickListeners(steps: ITourStep[]) {
    steps.forEach((step) => {
      const element = document.querySelector(step.target as string)
      if (element && step.targetOnClickCallback) {
        const eventHandler = () => {
          if (this.widgetStore.getState().widgetOpen) {
            step.targetOnClickCallback()
            // element.removeEventListener("click", eventHandler)
          }
        }
        element.addEventListener("click", eventHandler)
      }
    })
  }
}
