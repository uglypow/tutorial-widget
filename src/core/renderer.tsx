import {
  applyPolyfills,
  defineCustomElements,
} from "@nipacloud/nc-design-system/loader";
import React from "react";
import { createPortal } from "react-dom";
import ReactDOM from "react-dom/client";
import { AFTER_RENDER, BEFORE_RENDER } from "../constants/event";
import TutorialWidget from "./TutorialWidget";

export async function renderTutorialWidget(dom: HTMLElement) {
  await applyPolyfills();
  await defineCustomElements();

  const beforeRenderEvent = new Event(BEFORE_RENDER);
  window.dispatchEvent(beforeRenderEvent);

  const root = ReactDOM.createRoot(dom);
  root.render(
    <React.StrictMode>
      <>
        {createPortal(
          <div id="tutorial-widget">
            <TutorialWidget />
          </div>,
          document.body
        )}
      </>
    </React.StrictMode>
  );

  const afterRenderEvent = new Event(AFTER_RENDER);
  window.dispatchEvent(afterRenderEvent);
}
