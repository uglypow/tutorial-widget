import {
  NcBadge,
  NcButton,
  NcCard,
  NcCardFooter,
  NcCardTitle,
  NcIcon,
} from "@nipacloud/nc-design-system-react";
import { ElementType } from "react";
import { TooltipRenderProps } from "react-joyride";
import bad from "@assets/emoji/bad.png";

interface IPageTourModal {
  continuous: boolean; // If the tour is continuous or not
  index: number; // The current step's index
  isLastStep: boolean; // The name says it all
  size: number; // The number of steps in the tour
  step: any; // The current step data
  backProps: any; // The back button's props
  closeProps: any; // The close button's props
  primaryProps: any; // The primary button's props (Close or Next if the tour is continuous)
  skipProps: any; // The skip button's props
  tooltipProps: any; // The root element props (including ref)
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
      <NcCard className="border-2 border-black bg-white p-2 m-2 h-fit w-fit">
        <NcCardTitle className="text-black">
          <img src={bad} />
          <div className="text-red-500">Logo</div>
          <div slot="description">This is logo</div>
          <NcBadge color="pink">Pink</NcBadge>
          <NcIcon icon="logo" />
        </NcCardTitle>

        <NcCardFooter className="flex justify-between">
          <NcButton type="text" size="sm" onClick={backProps.onClick}>
            Back
          </NcButton>
          <NcButton type="text" size="sm" onClick={primaryProps.onClick}>
            Next
          </NcButton>
        </NcCardFooter>
      </NcCard>
    </div>
  );
};

export default PageTourModal;
