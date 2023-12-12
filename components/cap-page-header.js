import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import "./cap-decorated-header.js";

export class CapPageHeader extends LitElement {
	static properties = {
		theme: { type: String | undefined },
		heading: { type: String },
	};

	static styles = [
		baseStyles,
		css`
			.pageHeader {
				padding-inline: calc(var(--spacing-350) * 2);
				padding-block-start: var(--spacing-425);
				padding-block-end: calc(var(--spacing-350) * 2);
			}
			.pageHeader--darkGray {
				color: var(--color-gray-500);
			}

			::slotted(p) {
				font-size: var(--font-size-200);
				padding-top: var(--spacing-200);
			}
		`,
	];

	constructor() {
		super();
		this.theme = "light";
	}
	render() {
		return html`
			<div class="pageHeader pageHeader--${this.theme} ">
				<cap-decorated-header
					heading=${this.heading}
					headingLevel="h1"
					size="large"
				></cap-decorated-header>
				<slot></slot>
			</div>
		`;
	}
}

customElements.define("cap-page-header", CapPageHeader);
