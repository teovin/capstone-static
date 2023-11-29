import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import "./cap-decorated-header.js";
import "./cap-media-list.js";
import { pressLinks } from "../data/pressLinks.js";

export class CapSectionHighlight extends LitElement {
	static properties = {};

	static styles = [
		baseStyles,
		css`
			.sectionHighlight {
				display: grid;
				background: var(--color-gray-500);
				color: var(--color-white);
				padding-block: var(--spacing-450);
				padding-inline: var(--spacing-550);
				font-family: var(--font-sans-text);

				@media (min-width: 35rem) {
					grid-gap: var(--spacing-350);
					grid-template-columns: 1fr 1fr;
				}

				@media (min-width: 65rem) {
					grid-gap: var(--spacing-350);
					grid-template-columns: 25% 1fr 25%;
					padding-inline: calc(var(--spacing-500) * 2);
				}
			}

			.sectionHighlight__cta {
				position: relative;
				margin-block-start: var(--spacing-175);
			}

			.sectionHighlight__cta::before {
				content: "";
				position: absolute;
				top: calc(var(--spacing-175) * -1);
				left: 0;
				height: 2px;
				width: 85%;
				background: var(--color-white);
			}

			.sectionHighlight__text {
				font-size: var(--font-size-175);
				margin-block-start: var(--spacing-200);
				font-family: var(--font-sans-text);
			}

			.sectionHighlight__text--serif {
				font-family: var(--font-serif);
			}

			.sectionHighlight__button {
				display: block;
				width: fit-content;
				background: var(--color-purple-200);
				color: var(--color-gray-500);
				font-weight: 700;
				font-size: var(--font-size-125);
				text-transform: uppercase;
				text-decoration: none;
				padding-inline: calc(var(--spacing-175) / 2);
				padding-block: calc(var(--spacing-100) / 2);
				margin-block-start: var(--spacing-100);
			}

			.sectionHighlight__supplemental {
				grid-column: 2 / -1;

				@media (min-width: 65rem) {
					grid-column: unset;
				}
			}

			.sectionHighlight__quote {
				font-family: var(--font-sans-text);
				font-size: var(--font-size-150);
				margin-block-start: var(--spacing-200);
			}

			.sectionHighlight__quoteAttribution {
				display: block;
				margin-inline-start: calc(var(--spacing-100) / 2);
				color: var(--color-yellow);
				font-size: var(--font-size-100);
			}
		`,
	];

	constructor() {
		super();
	}
	render() {
		return html`
			<div class="sectionHighlight">
				<div class="sectionHighlight__cta">
					<cap-decorated-header
						icon="wedge"
						theme="gray"
						heading="Links & Press"
					></cap-decorated-header>

					<p class="sectionHighlight__text">See the full list:</p>
					<a class="sectionHighlight__button" href="/press">Press</a>
				</div>

				<div class="sectionHighlight__main">
					<p class="sectionHighlight__text sectionHighlight__text--serif">
						What's been written about Caselaw Access Project around the web
					</p>
					<cap-media-list
						theme="dark"
						decoration="none"
						.data=${pressLinks}
					></cap-media-list>
				</div>

				<div class="sectionHighlight__supplemental">
					<p class="sectionHighlight__quote">
						“Improving access to justice is a priority,” said Martha Minow, dean
						of Harvard Law School
						<span class="sectionHighlight__quoteAttribution"
							>—New York Times</span
						>
					</p>
				</div>
			</div>
		`;
	}
}

customElements.define("cap-section-highlight", CapSectionHighlight);
