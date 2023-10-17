import {LitElement, css, html} from '../lib/lit.js';
import { baseStyles } from '../lib/wc-base.js';

export class CaselawMap extends LitElement  {
  static properties = {
  };

  static styles = [
    baseStyles,
    css`
      :host {
        color: var(--color-white);
      }

      .mapRegion {
        background: var(--color-gradient);
        padding-block: var(--spacing-325) var(--spacing-225);
        padding-inline: var(--spacing-150);
      }

      .mapRegion__heading {
        font-size: var(--font-size-250);
        font-weight: 600;
      }

      .mapRegion__subheading {
        font-family: var(--font-serif);
        font-size: var(--font-size-150);
      }

      .infoBox {
        background: var(--color-gray-500);
        max-width: 15.625rem;
        padding-block: var(--spacing-125) var(--spacing-275);
        padding-inline: var(--spacing-125);
        margin-block-start: var(--spacing-100);
      }

      .infoBox__heading {
        font-family: var(--font-serif);
        font-size: var(--font-size-175);
        font-weight: 400;
        letter-spacing: 1px;
        line-height: 1.2;
        border-block-end: 1px solid var(--color-white);
        padding-block-end: var(--spacing-50);
      }

      .infoBox__heading:not(:first-of-type) {
        margin-block-start: var(--spacing-325);
      }

      .infoBox__text {
        font-size: var(--font-size-175);
        letter-spacing: 0.96px;
        line-height: 1.2;
        margin-block-start: var(--spacing-125);
      }

      .infoBox__textDescriptor {
        font-family: var(--font-sans-text);
        font-size: var(--font-size-150);
        font-weight: 400;
      }

    `
  ];

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="mapRegion">
      <h2 class="mapRegion__heading">Our data</h2>
      <p class="mapRegion__subheading">360 years of United States caselaw</p>
      <div class="infoBox">		
        <h3 class="infoBox__heading">State and Federal Totals</h3>
        <p class="infoBox__text">6,930,777<br /><span class="infoBox__textDescriptor">Unique cases</span><p>
        <p class="infoBox__text">612<br /><span class="infoBox__textDescriptor">Reporters</span><p>
        <p class="infoBox__text">36,357,668<br /><span class="infoBox__textDescriptor">Pages scanned</span><p>
        <h3 class="infoBox__heading">Federal Totals</h3>
        <p class="infoBox__text">6,930,777<br /><span class="infoBox__textDescriptor">Unique cases</span><p>
        <p class="infoBox__text">612<br /><span class="infoBox__textDescriptor">Reporters</span><p>
        <p class="infoBox__text">36,357,668<br /><span class="infoBox__textDescriptor">Pages scanned</span><p>
      </div>
    </div>
    `;
  }
}
customElements.define('caselaw-map', CaselawMap);
