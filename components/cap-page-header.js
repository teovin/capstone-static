import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import "./cap-decorated-header.js";

export class CapPageHeader extends LitElement {
	static properties = {
		theme: { type: String | undefined },
		heading: { type: String },
		icon: { type: String | undefined },
	};

	static styles = [
		baseStyles,
		css`
			.pageHeader {
				padding-inline: var(--spacing-150);
				padding-block-start: var(--spacing-425);
				padding-block-end: calc(var(--spacing-350) * 2);

				margin-inline-start: 3.125rem;

				@media (min-width: 35rem) {
					padding-inline: var(--spacing-350);
				}

				@media (min-width: 65rem) {
					padding-inline: calc(var(--spacing-350) * 2);
				}
			}
			.pageHeader--darkGray {
				color: var(--color-gray-500);
			}

			::slotted(p) {
				padding-top: var(--spacing-200);

				@media (min-width: 35rem) {
					font-size: var(--font-size-200);
				}
			}
		`,
	];

	constructor() {
		super();
		this.theme = "light";
		this.icon = "largeWedge";
	}
	render() {
		return html`
			<div class="pageHeader pageHeader--${this.theme} ">
				<cap-decorated-header
					heading=${this.heading}
					headingLevel="h1"
					size="large"
					icon=${this.icon}
				></cap-decorated-header>
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("cap-page-header", CapPageHeader);
