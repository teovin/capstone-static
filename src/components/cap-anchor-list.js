import { LitElement, css, html } from "../lib/lit.js";

export class CapAnchorList extends LitElement {
	static properties = {
		data: { type: Array },
	};

	static styles = [
		css`
			:host {
				display: block;
			}

			.anchorList {
				list-style-type: none;
				padding: 0;
				margin-block-start: 1rem;
			}

			.anchorList__link {
				display: block;
				padding-block: 1rem;
				padding-inline: var(--spacing-250);
				font-size: var(--font-size-200);
				color: inherit;
				text-decoration: none;

				&:hover {
					background-color: var(--color-yellow);
				}
			}
		`,
	];

	constructor() {
		super();
		this.data = [];
	}

	render() {
		return html`
			<ul class="anchorList">
				${this.data.map(
					(link) => html`
						<li>
							<a class="anchorList__link" href="${link.url}">${link.title}</a>
						</li>
					`,
				)}
			</ul>
		`;
	}
}
customElements.define("cap-anchor-list", CapAnchorList);
