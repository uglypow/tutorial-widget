import { createRoot } from 'react-dom/client';
import React from 'react';
import TutorialWidget from '@/core/TutorialWidget';
import "../main.scss";

// Include this at the top of your file or in a separate declarations file


class ShadowWrapper extends HTMLElement {
  connectedCallback() {
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    shadowRoot.appendChild(container);
    const root = createRoot(container);
    root.render(<TutorialWidget />);
  }
}

customElements.define('shadow-wrapper', ShadowWrapper);

// Then you can use <shadow-wrapper></shadow-wrapper> in your HTML.
