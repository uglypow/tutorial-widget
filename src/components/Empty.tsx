import { ElementType } from "react"
import { TooltipRenderProps } from "react-joyride"

const Empthy: ElementType<TooltipRenderProps> | undefined = ({
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
      {step.content}
    </div>
  )
}

export default Empthy
