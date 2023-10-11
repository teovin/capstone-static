import {LitElement, css, html} from '../lib/lit.js';
import { baseStyles } from '../lib/wc-base.js';

export class CaselawMap extends LitElement  {
  static properties = {
  };

  static styles = [
    baseStyles,
    css`
      .background {
        background: var(--gradient);
      }
    `
  ];

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="background">		
    <h2>Our data</h2>
		<p>360 years of United States caselaw</p>

		<h3>State and Federal Totals</h3>
		<p>6,930,777<br /><span>Unique cases</span><p>

		<h3>Federal Totals</h3>
    </div>
    `;
  }
}
customElements.define('caselaw-map', CaselawMap);
