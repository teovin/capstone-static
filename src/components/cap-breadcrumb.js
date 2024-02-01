import { LitElement, html, css, nothing } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";

export class CapBreadcrumb extends LitElement {
	static properties = {
		navItems: { type: Array },
	};

	static styles = [
		baseStyles,
		css`
			.breadcrumb {
				font-family: var(--font-sans-text);
				font-size: var(--font-size-100);
				padding: var(--spacing-150);
				background: var(--color-gray-100);
			}

			.list {
				display: flex;
				list-style: none;
				margin: 0;
				padding: 0;
			}

			.list__item {
				display: flex;
				align-items: center;
				margin-inline-end: var(--spacing-75);
			}

			.list__item:not(:last-child)::after {
				content: "";
				display: block;
				height: 0.8125rem;
				width: 0.3125rem;
				background: url('data:image/svg+xml,<svg width="5" height="13" viewBox="0 0 5 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.139893 12.2401L3.87789 0.0600586H4.71789L0.979893 12.2401H0.139893Z" fill="%236C757D"/></svg>');
				margin-inline-start: var(--spacing-75);
			}

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

			.breadcrumb [aria-current] {
				color: var(--color-gray-500);
			}
		`,
	];

	constructor() {
		super();
		this.navItems = [];
	}

	render() {
		return html`
			<nav aria-label="Breadcrumb" class="breadcrumb">
				<ol class="list">
					<li class="list__item">
						<a href="/"> Home</a>
					</li>
					<li class="list__item">
						<a href="/caselaw"> Caselaw </a>
					</li>
					${this.navItems.map(
						(navItem, index) =>
							html`<li class="list__item">
								<a
									href=${navItem.url}
									aria-current=${index + 1 === this.navItems.length
										? "page"
										: nothing}
								>
									${navItem.name}
								</a>
							</li>`,
					)}
				</ol>
			</nav>
		`;
	}
}

customElements.define("cap-breadcrumb", CapBreadcrumb);
