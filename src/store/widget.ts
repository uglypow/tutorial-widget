import { useStore } from "zustand"
import { createStore } from "zustand/vanilla"

export interface IWidgetStore {
  widgetOpen: boolean
  setWidgetOpen: (val: boolean) => void
  // tourState: tourState
  // setTourState: (state: tourState) => void
}

export const createWidgetStore = () => {
  return createStore<IWidgetStore>((set) => ({
    widgetOpen: false,
    setWidgetOpen(val) {
      set({
        widgetOpen: val,
      })
    },
  }))
}

type UseWidgetStoreFn = {
  <T>(selector: (state: IWidgetStore) => T): T
  (): IWidgetStore
}

export const useWidgetStore: UseWidgetStoreFn = <T>(
  selector?: (state: IWidgetStore) => T
) => {
  if (selector) {
    return useStore(window.ncPortalTutorial.widgetStore, selector)
  } else {
    return useStore(window.ncPortalTutorial.widgetStore)
  }
}
