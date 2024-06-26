import ReactJoyride, { Step } from "react-joyride"
import { IJoyrideProps } from "./joyride"

export interface IWidgetInitOptions {
  userId: string;
  baseUrl: string
  storage?: boolean;
  steps: Step[]
  joyrideProps: IJoyrideProps
}
