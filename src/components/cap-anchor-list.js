import { LitElement, css, html } from "../lib/lit.js";

export const AnchorListMixin = (superClass) =>
	class extends superClass {
		/* mixin for classes that include a CapAnchorList, to automatically populate anchorLinks from h2 elements */
		constructor() {
			super();
			this.anchorLinks = [];
		}

		updated(changedProperties) {
			super.updated?.(changedProperties);
			this.anchorLinks.length = 0;
			this.renderRoot.querySelectorAll("h2").forEach((heading) => {
				// set anchorText from data-anchor-text attribute if present, otherwise use the textContent of the heading
				const anchorText =
					heading.getAttribute("data-anchor-text") ||
					heading.textContent.trim();
				this.anchorLinks.push({
					title: heading.textContent.trim(),
					url: `#${heading.id}`,
				});
			});
		}
	};

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
