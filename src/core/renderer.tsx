import { createPortal } from "react-dom"
import ReactDOM from "react-dom/client"
import { AFTER_RENDER, BEFORE_RENDER } from "../constants/event"
import TutorialWidget from "./TutorialWidget"

let root: ReactDOM.Root

export async function renderTutorialWidget(dom: HTMLElement) {
  // await applyPolyfills();
  // await defineCustomElements();

  const beforeRenderEvent = new Event(BEFORE_RENDER)
  window.dispatchEvent(beforeRenderEvent)

  if (root) {
    root.unmount()
  }

  root = ReactDOM.createRoot(dom)

  root.render(
    <>
      {createPortal(
        <div id="react-tutorial-widget">
          <TutorialWidget />
        </div>,
        document.body
      )}
    </>
  )

  const afterRenderEvent = new Event(AFTER_RENDER)
  window.dispatchEvent(afterRenderEvent)
}
