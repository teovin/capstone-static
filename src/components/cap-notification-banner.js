import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";

export class CapNotificationBanner extends LitElement {
	static styles = [
		baseStyles,
		css`
			.banner {
				display: flex;
				font-size: var(--font-size-100);
				padding: var(--spacing-75);
				background-color: var(--color-twilight);
			}

			.banner__message {
				margin: auto;
			}

			.banner__link:link,
			.banner__link:visited,
			.banner__link:active {
				color: var(--color-gray-600);
			}

			.banner__link:hover {
				color: var(--color-gray-600);
			}
		`,
	];

	render() {
		return html`
			<div class="banner">
				<p class="banner__message">
					You are currently viewing the beta version of the Caselaw Access
					Project‘s website. The
					<a class="banner__link" href="https://old.case.law"
						>legacy website and API</a
					>
					will sunset on September 1, 2024.
				</p>
			</div>
		`;
	}
}

customElements.define("cap-notification-banner", CapNotificationBanner);
