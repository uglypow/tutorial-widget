import ReactJoyride, { Step } from "react-joyride"
import { IJoyrideProps } from "./joyride"

export interface IWidgetInitOptions {
  baseUrl: string
  steps: Step[]
  joyrideProps: IJoyrideProps
}
