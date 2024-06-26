import { Step } from "react-joyride"

export interface ITourStep extends Step {
  component: TourComponent
  targetOnClickCallback: () => void
}

export interface IJoyrideProps {
  beaconComponent?: ReactNode
  continuous?: boolean
  debug?: boolean
  disableOverlayClose?: boolean
  disableScrolling?: boolean
  disableScrollParentFix?: boolean
  floaterProps?: FloaterProps
  hideBackButton?: boolean
  locale?: {
    back?: string
    close?: string
    last?: string
    next?: string
    skip?: string
  }
  showProgress?: boolean
  showSkipButton?: boolean
  styles?: {
    options?: {
      arrowColor?: string
      backgroundColor?: string
      overlayColor?: string
      primaryColor?: string
      textColor?: string
      zIndex?: number
    }
  }
  spotlightClicks?: boolean
  spotlightPadding?: number
  scrollOffset?: number
  scrollToFirstStep?: boolean
  scrollToSteps?: boolean
  disableCloseOnEsc?: boolean
  disableOverlay?: boolean
  callback?: (data: CallBackProps) => void
  getHelpers?: (helpers: any) => void
}
