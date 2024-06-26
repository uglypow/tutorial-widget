// import PageTourModal from "@/components/PageTourModal"
// import PageTourModalNoButton from "@/components/PageTourModalNoButton"
// import bad from "@assets/emoji/bad.png"
// import { Step } from "react-joyride"

// export interface TourList {
//   name: string
//   steps: Step[]
// }

// export const TOUR_LIST: TourList[] = [
//   {
//     name: "boxmap",
//     steps: [
//       {
//         content: (
//           <div>
//             <img src={bad} />
//             <h1>is this your first time here?</h1>
//             <h4>Click next to get started</h4>
//           </div>
//         ),
//         target: "body",
//         placement: "center",
//         tooltipComponent: PageTourModal,
//       },
//       {
//         content: (
//           <div>
//             <h1>click here</h1>
//           </div>
//         ),
//         target: "#step-1",
//         placement: "bottom",
//         disableOverlay: true,
//         spotlightClicks: true,
//         tooltipComponent: PageTourModalNoButton,
        
//       },
//       {
//         content: (
//           <div>
//             <h1>This is modal</h1>
//           </div>
//         ),
//         target: ".modal-content",
//         tooltipComponent: PageTourModal, 
//       },
//       {
//         content: (
//           <div>
//             <h1>click here</h1>
//           </div>
//         ),
//         target: ".close",
//         placement: "bottom",
//         spotlightClicks: true,
//         tooltipComponent: PageTourModalNoButton,
//       },
//     ],
//   },
//   {
//     name: "project",
//     steps: [
//       {
//         content: <div>Project Tour</div>,
//         target: "body",
//         placement: "center",
//         tooltipComponent: PageTourModal,
//       },
//       // {
//       //   content: <div>Click here to open</div>,
//       //   target: document.querySelector('.button-text') as HTMLElement,
//       //   placement: "bottom",
//       //   tooltipComponent: PageTourModalNoButton,
//       // },
//       {
//         content: <div>Click here to open</div>,
//         target: "#dialog-header",
//         placement: "bottom",
//         tooltipComponent: PageTourModalNoButton,
//       },
//       {
//         content: <div>This is resource quota</div>,
//         target: ".subheading",
//         placement: "bottom",
//         tooltipComponent: PageTourModal,
//       },
//     ],
//   },
//   {
//     name: "billing",
//     steps: [
//       {
//         content: <div>Billing Tour</div>,
//         target: "body",
//         placement: "center",
//         tooltipComponent: PageTourModal,
//       },
//       {
//         content: <div>This is total balance</div>,
//         target: ".display-1",
//         placement: "bottom",
//         tooltipComponent: PageTourModal,
//       },
//       {
//         content: <div>This is line chart</div>,
//         target: "#line-chart",
//         placement: "bottom",
//         tooltipComponent: PageTourModal,
//       },
//     ],
//   },
// ]
