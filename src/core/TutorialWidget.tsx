import { TOUR_STEPS } from "@/constants/steps"
import { FC } from "react"
import Joyride from "react-joyride"

const TutorialWidget: FC = () => {
  return (
    <>
      <Joyride
        continuous
        showSkipButton
        callback={() => {}}
        run={true}
        steps={TOUR_STEPS}
        disableOverlay={true}
        floaterProps={{
          styles: {
            floater: {
              position: "fixed",
            },
          },
        }}
      />
    </>
  )
}

export default TutorialWidget
