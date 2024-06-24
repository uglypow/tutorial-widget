import { Step } from "react-joyride"
import { useStore } from "zustand"
import { createStore } from "zustand/vanilla"

export interface ITourState {
  run: boolean
  stepIndex: number
  // steps: Step[] | null
}

export interface ITourStore {
  state: ITourState
  setState: (state: ITourState) => void
  reset: () => void
}

const initialState: ITourState = {
  run: true,
  stepIndex: 0,
  // steps: null,
}

export const createTourStore = () => {
  return createStore<ITourStore>((set) => ({
    state: initialState,
    setState: (val) => {
      set({
        state: val,
      })
    },
    reset: () => {
      set({
        state: {
          ...initialState,
        },
      })
    },
  }))
}

type useTourStoreFn = {
  <T>(selector: (state: ITourStore) => T): T
  (): ITourStore
}

export const useTourStore: useTourStoreFn = <T>(
  selector?: (state: ITourStore) => T
) => {
  if (selector) {
    return useStore(window.ncPortalTutorial.tourStore, selector)
  } else {
    return useStore(window.ncPortalTutorial.tourStore)
  }
}
