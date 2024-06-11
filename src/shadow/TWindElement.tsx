// /* eslint-env browser */

// import install from '@twind/with-web-components';
// import config from '../../twind.config';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { cssom, observe, setup, twind } from '@twind/core';
// import PageTourModal from '@/components/PageTourModal'

// class TwindElement extends install(config)(HTMLElement) {
//   constructor() {
//     super();

//     const shadow = this.attachShadow({ mode: 'open' });

//     // Create a container div for the React component
//     const container = document.createElement('div');
//     shadow.appendChild(container);

//     const sheet = cssom(new CSSStyleSheet())
//     const tw = twind(config, sheet)

//     // Create a style element and append it to the shadow root
//     observe(tw, shadow)
//     shadow.adoptedStyleSheets = [sheet.target]

//     // Render the React component inside the shadow DOM
//     const root = ReactDOM.createRoot(shadow)
//     root.render(<PageTourModal />)
//   }
// }

// customElements.define('twind-element', TwindElement);

// document.body.innerHTML = '<twind-element></twind-element>';
