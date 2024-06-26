import "@nipacloud/nc-design-system/fonts"
import "@nipacloud/nc-design-system/style"
import "../main.scss"

import { useTourStore } from "@/store/tutorialState"
import { useWidgetStore } from "@/store/widget"
import { FC } from "react"
import Joyride, { ACTIONS, CallBackProps, EVENTS, STATUS } from "react-joyride"

const TutorialWidget: FC = () => {
  const [state, setState] = useTourStore((store) => [
    store.state,
    store.setState,
  ])
  const [widgetOpen, setWidgetOpen] = useWidgetStore((state) => [
    state.widgetOpen,
    state.setWidgetOpen,
  ])
  const steps = window.ncPortalTutorial.options.steps
  const joyrideProps = window.ncPortalTutorial.options.joyrideProps

  if (!steps) {
    return
  }

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { action, index, status, type } = data

    if (action === ACTIONS.CLOSE) {
      setWidgetOpen(false)
      setState({ ...state, run: false, stepIndex: 0 })
    } else if (
      ([STATUS.FINISHED, STATUS.SKIPPED] as string[]).includes(status)
    ) {
      setWidgetOpen(false)
      setState({ ...state, run: false, stepIndex: 0 })
    } else if (
      ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND] as string[]).includes(type)
    ) {
      const nextStepIndex = index + (action === ACTIONS.PREV ? -1 : 1)
      setState({ ...state, stepIndex: nextStepIndex })
    }
  }

  return (
    <>
      <Joyride
        continuous
        callback={handleJoyrideCallback}
        run={widgetOpen}
        steps={steps}
        stepIndex={state.stepIndex}
        styles={{
          options: {
            zIndex: 1000,
          },
        }}
        {...joyrideProps}
      />
    </>
  )
}

export default TutorialWidget
