import { css } from './lit.js';

export const baseStyles = css`
 :host * {
  margin: 0;
  -webkit-font-smoothing: antialiased;
 }

  :host, 
  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-sans-titling);
  }

  p {
    font-family: var(--font-serif);
  }

  img, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }
`;