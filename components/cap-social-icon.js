import { LitElement, css, svg } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import { twitterPath, mailPath, githubPath } from "./cap-icons.js";

export class CapSocialIcon extends LitElement {
	static properties = {
		icon: { type: String | undefined },
		theme: { type: String | undefined },
	};

	static styles = [
		baseStyles,
		css`
			:host {
				--iconFill: var(--color-white);
			}

			.socialIcon__fill {
				fill: var(--iconFill);
			}

			.socialIcon--light {
				--iconFill: var(--color-gray-600);
			}

			.socialIcon:hover {
				--iconFill: var(--color-purple-200);
			}

			.socialIcon--light:hover {
				--iconFill: var(--color-purple-300);
			}
		`,
	];

	_getIcon(icon) {
		switch (icon) {
			case "twitter":
				return twitterPath;

			case "github":
				return githubPath;
			case "mail":
			default:
				return mailPath;
		}
	}

	constructor() {
		super();
		this.icon = "mail";
		this.theme = "dark";
	}
	render() {
		return svg`
		<svg class="socialIcon socialIcon--${
			this.theme
		}" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
		${this._getIcon(this.icon)} 
		</svg>
		`;
	}
}

customElements.define("cap-social-icon", CapSocialIcon);
