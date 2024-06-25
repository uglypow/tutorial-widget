import {
  NcButton,
  NcCard,
  NcCardBody,
  NcCardFooter,
  NcCardTitle,
} from "@nipacloud/nc-design-system-react"
import { ElementType } from "react"
import { TooltipRenderProps } from "react-joyride"

const CleanPageTourModal: ElementType<TooltipRenderProps> | undefined = ({
  continuous,
  index,
  isLastStep,
  size,
  step,
  backProps,
  closeProps,
  primaryProps,
  skipProps,
  tooltipProps,
}) => {
  return (
    <div {...tooltipProps} className="prefix-wrap">
      <NcCard className="bg-purple-600 text-white h-fit min-w-[300px] max-w-[500px] w-fit">
        <div className="p-3 m-3 flex flex-col gap-4">
          <NcCardTitle>
            <div className="text-3xl">{step.title}</div>
          </NcCardTitle>
          <NcCardBody>
            <div className="text-base">{step.content}</div>
          </NcCardBody>
          <NcCardFooter>
            <div className="flex flex-row justify-between">
              {step.showProgress ? (
                <div>
                  {index + 1}/{size}
                </div>
              ) : (
                <div />
              )}
              <NcButton size="md" onClick={primaryProps.onClick}>
                {isLastStep ? <>Done</> : <>Next</>}
              </NcButton>
            </div>
          </NcCardFooter>
        </div>
      </NcCard>
    </div>
  )
}

export default CleanPageTourModal
