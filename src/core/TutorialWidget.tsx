import PageTourModal from "@/components/PageTourModal";
import { FC } from "react";
import Joyride, { Placement, Step } from "react-joyride";

type PlacementType = Placement | "auto" | "center" | undefined;

const TOUR_STEPS: Step[] = [
  {
    content: <h2>Tutorial</h2>,
    target: "body",
    placement: "center" as PlacementType,
  },
  {
    content: <></>,
    target: "#logo",
    placement: "bottom" as PlacementType,
    tooltipComponent: PageTourModal,
    disableBeacon: true,
  },
  {
    content: <h2>this is message</h2>,
    target: "#message",
    placement: "bottom" as PlacementType,
  },
  {
    content: <h2>this is home</h2>,
    target: "#home",
    placement: "bottom" as PlacementType,
  },
  {
    content: <h2>this is about</h2>,
    target: "#about",
    placement: "bottom" as PlacementType,
  },
];

const TutorialWidget: FC = () => {
  return (
    <>
      <Joyride
        continuous
        showSkipButton
        callback={() => {}}
        run={true}
        steps={TOUR_STEPS}
      />
    </>
  );
};

export default TutorialWidget;
