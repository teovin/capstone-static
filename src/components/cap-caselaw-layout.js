import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";

export class CapCaselawLayout extends LitElement {
	static styles = [
		baseStyles,
		css`
			.caselawContent {
				display: grid;
				grid-template-columns: repeat(4, 1fr);

				@media (min-width: 65rem) {
					max-width: 80%;
					margin-inline: auto;
					box-shadow: 0 0 27px 0 rgba(222, 222, 230, 0.46);
				}
			}
		`,
	];

	render() {
		return html`
			<main id="main" class="caselawContent">
				<slot></slot>
			</main>
		`;
	}
}

customElements.define("cap-caselaw-layout", CapCaselawLayout);
