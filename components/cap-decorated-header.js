import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";

export class CapDecoratedHeader extends LitElement {
	static properties = {
		icon: { type: String | undefined },
		theme: { type: String | undefined },
		heading: { type: String },
		border: { type: String | undefined },
	};

	static styles = [
		baseStyles,
		css`
			.heading {
				font-size: var(--font-size-250);
				font-weight: 600;
				font-family: var(--font-sans-titling);
				position: relative;
			}

			.heading--gray {
				color: var(--color-white);
			}

			.heading--wedge::before {
				content: "";
				background: url("/images/wedge.svg") no-repeat;
				position: absolute;
				top: 50%;
				left: -30px;
				height: 29px;
				width: 20px;
				transform: translateY(-50%);
				color: var(--color-purple-100);
			}
		`,
	];

	constructor() {
		super();
		this.icon = "wedge";
		this.theme = "gray";
		this.textDecoration = "border";
	}
	render() {
		return html`
			<h2 class="heading heading--${this.icon} heading--${this.theme} ">
				${this.heading}
			</h2>
		`;
	}
}

customElements.define("cap-decorated-header", CapDecoratedHeader);
