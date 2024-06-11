import { StoreApi } from "zustand"
import { IWidgetInitOptions } from "../@types/widget"
import { apiClient } from "../services/httpClient"
import { IWidgetStore, createWidgetStore } from "../store/widget"
import { renderTutorialWidget } from './renderer'

type Listener = () => void
type ErrorListener = (error: any) => void

interface PortalTutorialRenderOptions {
  onError?: ErrorListener
  // position?: {
  //   top?: number;
  //   left?: number;
  //   bottom?: number;
  //   right?: number;
  // };
}

export class portalTutorial {
  public listeners: Set<Listener> = new Set()
  public errorListeners: Set<ErrorListener> = new Set()
  public options!: IWidgetInitOptions
  public store: StoreApi<IWidgetStore> = createWidgetStore()

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

  public render(
    element: string | HTMLElement,
    options: PortalTutorialRenderOptions
  ) {
    if (document.querySelector("#tutorial-widget")) {
      console.warn("Tutorial is already rendered")
      return
    }

    this.options = {
      ...this.options,
    }

    // if (options.position) {
    //   this.options.position = options.position;
    // }

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
    this.store.setState({
      widgetOpen: true,
    })
  }

  public destroy() {
    const element = document.querySelector("#tutorial-widget")

    if (element) {
      element.remove()
    }

    this.errorListeners = new Set()
    this.listeners = new Set()
  }

  public deleteListener = (listener: Listener) => {
    this.listeners.delete(listener)
  }
}
