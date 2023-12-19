import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";

export class CapDecoratedHeader extends LitElement {
	static properties = {
		icon: { type: String | undefined },
		theme: { type: String | undefined },
		heading: { type: String },
		headingLevel: { type: String | undefined },
		border: { type: String | undefined },
		size: { type: String | undefined },
	};

	static styles = [
		baseStyles,
		css`
			.heading {
				font-weight: 600;
				font-family: var(--font-sans-titling);
				position: relative;
				line-height: 1.125;
			}

			.heading--white {
				color: var(--color-white);
			}

			.heading--black {
				color: var(--color-gray-600);
			}

			.heading--medium {
				font-size: var(--font-size-250);
			}

			.heading--large {
				font-size: var(--font-size-300);

				@media (min-width: 65rem) {
					font-size: var(--font-size-325);
				}
			}

			.heading--smallWedge::before {
				content: "";
				background: url("/images/wedge.svg") no-repeat;
				position: absolute;
				top: 50%;
				left: -30px;
				height: 29px;
				width: 20px;
				transform: translateY(-50%);
			}

			.heading--largeWedge::before {
				content: "";
				background: url("/images/wedge.svg") no-repeat;
				position: absolute;
				top: 50%;
				left: -45px;
				height: 44px;
				width: 35px;
				transform: translateY(-50%);
			}
		`,
	];

	constructor() {
		super();
		this.icon = "smallWedge";
		this.theme = "white";
		this.headingLevel = "h2";
		this.size = "medium";
	}
	render() {
		const classNames = `heading heading--${this.icon} heading--${this.theme} heading--${this.size}`;

		return this.headingLevel === "h1"
			? html`<h1 class=${classNames}>${this.heading}</h1>`
			: html` <h2 class=${classNames}>${this.heading}</h2>`;
	}
}

customElements.define("cap-decorated-header", CapDecoratedHeader);
