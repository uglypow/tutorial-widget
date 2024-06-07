import "@nipacloud/nc-design-system/fonts";
import "@nipacloud/nc-design-system/style";
import "./main.scss";

import { portalTutorial } from "./core";

const portalTutorialKey = "ncPortalTutorial";

if (portalTutorialKey in window) {
  console.error("Tutorial is already loaded");
} else {
  const portalTutorialInstance = new portalTutorial();

  Object.defineProperty(window, portalTutorialKey, {
    writable: false,
    configurable: false,
    enumerable: false,
    value: portalTutorialInstance,
  });

  const onload = () => {
    for (const listener of window[portalTutorialKey].listeners) {
      console.log(listener);
      listener();
      window[portalTutorialKey].deleteListener(listener);
    }
  };

  if (document.readyState === "complete") {
    onload();
  } else {
    document.addEventListener("DOMContentLoaded", onload);
  }
}

export { portalTutorial } from "./core";
