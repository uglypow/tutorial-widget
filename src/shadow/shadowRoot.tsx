import React, { ReactNode } from "react"

export class ShadowRoot extends React.Component {
  attachShadow(host) {
    if (host == null) {
      return
    }
    host.attachShadow({ mode: "open" })
    host.shadowRoot.innerHTML = host.innerHTML
    host.innerHTML = ""
  }

  render() {
    return <span ref={this.attachShadow}>{this.props as ReactNode}</span>
  }
}
