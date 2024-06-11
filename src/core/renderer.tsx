import ReactDOM from "react-dom/client"
import { AFTER_RENDER, BEFORE_RENDER } from "../constants/event"

import { cssom, observe, twind } from "@twind/core"
import config from "../../twind.config"
import TutorialWidget from "./TutorialWidget"

const sheet = cssom(new CSSStyleSheet())
const tw = twind(config, sheet)

export async function renderTutorialWidget(dom: HTMLElement) {
  // await applyPolyfills();
  // await defineCustomElements();

  const beforeRenderEvent = new Event(BEFORE_RENDER)
  window.dispatchEvent(beforeRenderEvent)

  //Create Shadow Root
  let container = document.createElement("div")
  container.classList.add("react-container")
  const shadowRoot = container.attachShadow({ mode: "open" })
  const reactComponent = <TutorialWidget />
  dom.after(container)
  const root = ReactDOM.createRoot(shadowRoot)

  //TWind Observe
  observe(tw, shadowRoot)
  shadowRoot.adoptedStyleSheets = [sheet.target]

  //Render
  root.render(reactComponent)

  const afterRenderEvent = new Event(AFTER_RENDER)
  window.dispatchEvent(afterRenderEvent)
}
