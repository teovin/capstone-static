import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";

export class CapEmailSignup extends LitElement {
	static properties = {};

	static styles = [
		baseStyles,
		css`
			.form__button,
			.form__input,
			.form__label,
			.formIntro {
				font-family: var(--font-sans-text);
			}

			.formIntro {
				font-size: var(--font-size-100);
				font-weight: 600;
			}

			.form {
				display: grid;
				margin-block: var(--spacing-100);
			}

			.form__input {
				margin-block: var(--spacing-100);
				padding: var(--spacing-100);
				border: 1px solid var(--color-gray-200);
			}

			.form__button {
				cursor: pointer;
				background: none;
				border: 2px solid var(--color-blue-500);
				color: var(--color-blue-500);
				font-weight: 700;
				font-size: var(--font-size-100);
				text-transform: uppercase;
				width: fit-content;
				padding: calc(var(--spacing-125) / 2);
			}

			.form__button:hover {
				color: var(--color-gray-600);
				border-color: var(--color-gray-600);
			}
		`,
	];

	constructor() {
		super();
	}
	render() {
		return html` <p class="formIntro">
				Subscribe to Lawvocado, our biweekly email list
			</p>
			<form
				action="https://law.us3.list-manage.com/subscribe/post?u=4290964398813d739f2398db0&amp;id=e097736c6f"
				method="post"
				id="mc-embedded-subscribe-form-large"
				name="mc-embedded-subscribe-form-large"
				class="form"
				target="_blank"
				novalidate=""
			>
				<div style="position: absolute; left: -5000px;" aria-hidden="true">
					<input
						type="text"
						name="b_4290964398813d739f2398db0_e097736c6f"
						tabindex="-1"
						value=""
					/>
				</div>
				<label class="form__label" for="email">Email</label>
				<input type="email" name="EMAIL" class="form__input" id="email" />
				<button
					class="form__button"
					value="Subscribe"
					name="subscribe"
					id="mc-embedded-subscribe-large"
					type="submit"
				>
					Subscribe
				</button>
			</form>`;
	}
}

customElements.define("cap-email-signup", CapEmailSignup);
