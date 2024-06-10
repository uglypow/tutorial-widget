import PageTourModal from '@/components/PageTourModal'
import bad from "@assets/emoji/bad.png"
import { Placement, Step } from 'react-joyride'

type PlacementType = Placement | "auto" | "center" | undefined

export const TOUR_STEPS: Step[] = [
  {
    content: (
      <div className="flex flex-col items-center">
        <img src={bad} />
        <h1>is this your first time here?</h1>
        <h4>Click next to get started</h4>
      </div>
    ),
    target: "body",
    placement: "center" as PlacementType,
    tooltipComponent: PageTourModal,
    disableBeacon: true
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <h1>this is logo</h1>
      </div>
    ),
    target: "#logo",
    placement: "bottom" as PlacementType,
    tooltipComponent: PageTourModal,
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <h1>this is message</h1>
      </div>
    ),
    target: "#message",
    placement: "bottom" as PlacementType,
    tooltipComponent: PageTourModal,
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <h1>this is home</h1>
      </div>
    ),
    target: "#home",
    placement: "bottom" as PlacementType,
    tooltipComponent: PageTourModal,
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <h1>try clicking here</h1>
      </div>
    ),
    target: "#about",
    placement: "bottom" as PlacementType,
    tooltipComponent: PageTourModal,
  },
]

export const TOUR_STEPS_BOX: Step[] = [
  {
    content: (
      <div className="flex flex-col items-center">
        <img src={bad} />
        <h1>is this your first time here?</h1>
        <h4>Click next to get started</h4>
      </div>
    ),
    target: "body",
    placement: "center" as PlacementType,
    tooltipComponent: PageTourModal,
    disableOverlay: true,
  },
  {
    content: (
      <div className="flex flex-col items-center">
        <h1>first</h1>
      </div>
    ),
    target: ".user-label--labelbox",
    placement: "bottom" as PlacementType,
    tooltipComponent: PageTourModal,
  },
  // {
  //   content: (
  //     <div className="flex flex-col items-center">
  //       <h1>second</h1>
  //     </div>
  //   ),
  //   target: "#step-2",
  //   placement: "bottom" as PlacementType,
  //   tooltipComponent: PageTourModal,
  // },
  // {
  //   content: (
  //     <div className="flex flex-col items-center">
  //       <h1>third</h1>
  //     </div>
  //   ),
  //   target: "#step-3",
  //   placement: "bottom" as PlacementType,
  //   tooltipComponent: PageTourModal,
  // },
  // {
  //   content: (
  //     <div className="flex flex-col items-center">
  //       <h1>fourth</h1>
  //     </div>
  //   ),
  //   target: "#step-4",
  //   placement: "bottom" as PlacementType,
  //   tooltipComponent: PageTourModal,
  // },
]