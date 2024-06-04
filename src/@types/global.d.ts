import { portalTutorial } from "../core";

export {};

declare global {
  interface Window {
    portalTutorial: portalTutorial;
    [key: string]: any;
  }
}
