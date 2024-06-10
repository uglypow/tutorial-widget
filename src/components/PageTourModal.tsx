import "@nipacloud/nc-design-system/fonts";
import "@nipacloud/nc-design-system/style";
import "../main.scss";

import {
  NcButton,
  NcCard,
  NcCardFooter,
  NcCardTitle,
  NcIcon,
} from "@nipacloud/nc-design-system-react"
import { ElementType } from "react"
import { TooltipRenderProps } from "react-joyride"

interface IPageTourModal {
  continuous: boolean // If the tour is continuous or not
  index: number // The current step's index
  isLastStep: boolean // The name says it all
  size: number // The number of steps in the tour
  step: any // The current step data
  backProps: any // The back button's props
  closeProps: any // The close button's props
  primaryProps: any // The primary button's props (Close or Next if the tour is continuous)
  skipProps: any // The skip button's props
  tooltipProps: any // The root element props (including ref)
}

const PageTourModal: ElementType<TooltipRenderProps> | undefined = ({
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
    <div {...tooltipProps}>
      <NcCard className="-border-2 -border-black -bg-white -h-fit -min-w-[300px] -w-fit -text-black">
        <NcIcon
          icon="cross"
          className="absolute top-5 right-5 hover:cursor-pointer" 
          onClick={closeProps.onClick}
        />
        <NcCardTitle>{step.content}</NcCardTitle>

        <NcCardFooter className="flex flex-col">
          <div className="flex flex-row justify-between">
            {index === 0 ? (
              <div></div>
            ) : (
              <NcButton size="sm" onClick={backProps.onClick}>
                Back
              </NcButton>
            )}
            <NcButton size="sm" onClick={primaryProps.onClick}>
              {isLastStep ? <>Last</> : <>Next</>}
            </NcButton>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-2.5 rounded-full"
              style={{ width: `${(100 / (size - 1)) * index}%` }}
            ></div>
          </div>
          <div className="flex flex-row justify-between">
            <div>{index + 1}/{size}</div>
            <div onClick={skipProps.onClick} className='text-gray-500 hover:cursor-pointer'>skip</div>
          </div>
        </NcCardFooter>
      </NcCard>
    </div>
  )
}

export default PageTourModal
