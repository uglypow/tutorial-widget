import React from "react";

interface ShadowRootProps {
  children: React.ReactNode;
}

export class ShadowRoot extends React.Component<ShadowRootProps> {
  private hostRef: React.RefObject<HTMLSpanElement>;

  constructor(props: ShadowRootProps) {
    super(props);
    this.hostRef = React.createRef();
  }

  componentDidMount() {
    const host = this.hostRef.current;
    if (host) {
      const shadowRoot = host.attachShadow({ mode: "open" });
      shadowRoot.innerHTML = host.innerHTML;
      host.innerHTML = "";
    }
  }

  render() {
    return (
      <span ref={this.hostRef}>{this.props.children}</span>
    );
  }
}