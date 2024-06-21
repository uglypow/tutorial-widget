import { portalTutorial } from "../core";

export {};

declare global {
  interface Window {
    ncPortalTutorial: portalTutorial;
    [key: string]: any;
  }
}
