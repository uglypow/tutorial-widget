import { portalTutorial } from "./core"
const portalTutorialKey = "ncPortalTutorial"

if (portalTutorialKey in window) {
  console.error("Tutorial is already loaded")
} else {
  const portalTutorialInstance = new portalTutorial()

  Object.defineProperty(window, portalTutorialKey, {
    writable: false,
    configurable: false,
    enumerable: false,
    value: portalTutorialInstance,
  })

  const onload = () => {
    console.log("DOMContentLoaded fired")
    for (const listener of window[portalTutorialKey].listeners) {
      listener()
      window[portalTutorialKey].deleteListener(listener)
    }
  }

  console.log(document.readyState)
  if (document.readyState === "complete") {
    onload()
  } else {
    document.addEventListener("DOMContentLoaded", onload)
  }
}

export { portalTutorial } from "./core"
