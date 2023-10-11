import { css } from './lit.js';

export const baseStyles = css`
  :host {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

 :host * {
  margin: 0;
 }

  :host, 
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }
`;