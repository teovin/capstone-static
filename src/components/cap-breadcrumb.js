import { LitElement, html, css, nothing } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import clsx from "../lib/clsx.js";

export class CapBreadcrumb extends LitElement {
	static properties = {
		navItems: { type: Array },
	};

	static styles = [
		baseStyles,
		css`
			a:link,
			a:visited,
			a:hover,
			a:active {
				text-decoration: none;
				color: var(--color-blue-400);
			}

			a:hover {
				text-decoration: underline;
			}

			.breadcrumb {
				font-family: var(--font-sans-text);
				font-size: var(--font-size-100);
				padding: var(--spacing-150);
				background: var(--color-gray-100);
			}

			.list {
				display: flex;
				flex-wrap: wrap;
				list-style: none;
				margin: 0;
				padding: 0;
			}

			.list__item {
				margin-inline-end: var(--spacing-75);
				font-size: var(--font-size-100);
			}

			.list__item--current {
				font-weight: 600;
			}

			.list__divider {
				margin-inline-start: var(--spacing-75);
				color: var(--color-gray-300);
			}
		`,
	];

	constructor() {
		super();
		this.navItems = [];
	}

	render() {
		return html`
			<nav aria-label="breadcrumbs" class="breadcrumb">
				<ol class="list">
					<li class="list__item">
						<a href="/"> Home</a>
						<span class="list__divider" aria-hidden="true">/</span>
					</li>
					<li class="list__item">
						<a href="/caselaw"> Caselaw</a>
						<span class="list__divider" aria-hidden="true">/</span>
					</li>
					${this.navItems.map((navItem, index) => {
						const isCurrent = index + 1 === this.navItems.length;
						return html`<li
							class=${clsx("list__item", { "list__item--current": isCurrent })}
						>
							<a
								href=${navItem.url}
								aria-current=${isCurrent ? "page" : nothing}
							>
								${navItem.name}
							</a>
							${isCurrent
								? nothing
								: html`<span class="list__divider" aria-hidden="true">/</span>`}
						</li>`;
					})}
				</ol>
			</nav>
		`;
	}
}

customElements.define("cap-breadcrumb", CapBreadcrumb);
