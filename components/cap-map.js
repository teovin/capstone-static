import { LitElement, css, html } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import "./accessible-map.js";
import { mapAbbreviations, mapData } from "../data/map.js";

export class CapMap extends LitElement {
	static properties = {
		activeState: { type: String | undefined },
	};

	static styles = [
		baseStyles,
		css`
			:host {
				color: var(--color-white);
			}

			.mapRegion {
				display: grid;
				position: relative;
				column-gap: var(--spacing-350);
				grid-template-columns: 18rem 1fr;
				background: var(--color-gradient);
				padding-block: var(--spacing-325) var(--spacing-225);
				padding-inline: var(--spacing-150) var(--spacing-550);
			}

			@media (min-width: 75rem) {
				.mapRegion {
					column-gap: var(--spacing-550);
				}
			}

			.mapRegion::after {
				--size: 25px;

				content: "";
				position: absolute;
				bottom: 0;
				left: calc(50% - var(--size));
				border-left: var(--size) solid transparent;
				border-right: var(--size) solid transparent;
				border-bottom: var(--size) solid var(--color-gray-600);
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
		`,
	];

	_onMapUpdate(event) {
		const target = event.target;
		this.activeState = target.activeState;
	}

	render() {
		return html`
			<div class="mapRegion">
				<div>
					<h2 class="mapRegion__heading">Our data</h2>
					<p class="mapRegion__subheading">
						360 years of United States caselaw
					</p>
					<div class="infoBox">
						<h3 class="infoBox__heading">
							${this.activeState
								? mapData[this.activeState].name
								: "State and Federal Totals"}
						</h3>
						<p class="infoBox__text">
							6,930,777<br /><span class="infoBox__textDescriptor"
								>Unique cases</span
							>
						</p>
						<p class="infoBox__text">
							612<br /><span class="infoBox__textDescriptor">Reporters</span>
						</p>
						<p class="infoBox__text">
							36,357,668<br /><span class="infoBox__textDescriptor"
								>Pages scanned</span
							>
						</p>

						<h3 class="infoBox__heading">Federal Totals</h3>
						<p class="infoBox__text">
							6,930,777<br /><span class="infoBox__textDescriptor"
								>Unique cases</span
							>
						</p>
						<p class="infoBox__text">
							612<br /><span class="infoBox__textDescriptor">Reporters</span>
						</p>
						<p class="infoBox__text">
							36,357,668<br /><span class="infoBox__textDescriptor"
								>Pages scanned</span
							>
						</p>
					</div>
				</div>

				<accessible-map
					width="543"
					height="432"
					.data=${mapData}
					.abbreviations=${mapAbbreviations}
					@map-update=${this._onMapUpdate}
				></accessible-map>
			</div>
		`;
	}
}
customElements.define("cap-map", CapMap);
