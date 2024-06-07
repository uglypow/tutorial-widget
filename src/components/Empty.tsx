import TutorialWidget from "@/core/TutorialWidget"
import ReactDOM from "react-dom"

class MyReactWidget extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<TutorialWidget />, this)
  }

  disconnectedCallback() {
    ReactDOM.unmountComponentAtNode(this)
  }
}

customElements.define("my-react-widget", MyReactWidget)
