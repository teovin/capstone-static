import { LitElement, css, html } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import "./cap-social-icon.js";
import { socialLinks } from "../data/socialLinks.js";

export class CapSocialGroup extends LitElement {
	static properties = {
		theme: { type: String | undefined },
	};

	static styles = [
		baseStyles,
		css`
			.socialGroup {
				display: flex;
				align-items: center;
				padding: 0;
				list-style-type: none;
			}

			.socialGroup__iconLink:not(:last-child) {
				margin-inline-end: 1rem;
			}
		`,
	];

	constructor() {
		super();
		this.theme = "dark";
	}

	render() {
		return html`
			<ul class="socialGroup">
				${socialLinks.map(
					(socialLink) => html` <a
						class="socialGroup__iconLink"
						href=${socialLink.path}
						><cap-social-icon
							theme=${this.theme}
							icon=${socialLink.icon}
						></cap-social-icon
					></a>`
				)}
			</ul>
		`;
	}
}

customElements.define("cap-social-group", CapSocialGroup);
