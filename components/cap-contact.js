import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import "./cap-decorated-header.js";
import "./cap-social-group.js";
import "./cap-email-signup.js";

export class CapContact extends LitElement {
	static properties = {};

	static styles = [
		baseStyles,
		css`
			.contact {
				display: grid;
				grid-column-gap: 3rem;
				justify-content: center;
				justify-items: center;
				background: var(--color-yellow);
				color: var(--color-gray-600);
				padding-block: var(--spacing-350);
				padding-inline: var(--spacing-550);
				font-family: var(--font-sans-text);

				@media (min-width: 35rem) {
					grid-template-columns: 1fr 1fr;
				}

				@media (min-width: 65rem) {
					grid-template-columns: 1fr 1fr 1fr;
					grid-gap: var(--spacing-350);
					padding-inline: calc(var(--spacing-500) * 2);
				}
			}

			.contact__cta {
				display: grid;
				justify-items: center;
				text-align: center;

				@media (min-width: 35rem) {
					text-align: left;
					justify-items: stretch;
				}
			}

			.contact__main {
				justify-self: start;
				margin-block: var(--spacing-200) var(--spacing-100);

				@media (min-width: 35rem) {
					margin: 0;
				}
			}

			.contact__socialText {
				font-size: var(--font-size-100);
				font-family: var(--font-serif);
				margin-block: var(--spacing-100);

				@media (min-width: 65rem) {
					margin-block: var(--spacing-200);
				}
			}

			.contact__supplementalText {
				font-size: var(--font-size-100);
				font-family: var(--font-sans);
				grid-column: 2 / -1;
				justify-self: end;

				@media (min-width: 65rem) {
					justify-self: unset;
					grid-column: unset;
				}
			}
		`,
	];

	constructor() {
		super();
	}
	render() {
		return html`
			<div class="contact">
				<div class="contact__cta">
					<cap-decorated-header
						icon="none"
						theme="black"
						heading="Contact"
					></cap-decorated-header>

					<p class="contact__socialText">
						Follow our progress, contribute code, or just say hi!
					</p>

					<cap-social-group theme="light"></cap-social-group>
				</div>

				<div class="contact__main">
					<cap-email-signup></cap-email-signup>
				</div>

				<p class="contact__supplementalText">
					We promise we won't spam you, though we might invite you to a
					hackathon.
				</p>
			</div>
		`;
	}
}

customElements.define("cap-contact", CapContact);
