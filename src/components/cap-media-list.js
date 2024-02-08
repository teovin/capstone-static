import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import clsx from "../lib/clsx.js";

export class CapMediaList extends LitElement {
	static properties = {
		decoration: { type: String | undefined },
		theme: { type: String | undefined },
		data: { type: Array },
	};

	static styles = [
		baseStyles,
		css`
			:host {
				--color-link: var(--color-blue-400);
				--color-link-hover: var(--color-gray-600);
				--color-publisher: var(--color-gray-500);
				--color-date: var(--color-gray-400);
				--list-style-type: none;

				font-family: var(--font-sans-text);
			}

			.mediaList {
				padding-inline: 0;
			}

			.mediaList__item {
				margin-block-start: var(--spacing-175);
				list-style-type: none;

				@media (min-width: 35rem) {
					font-size: 1.25rem;
				}
			}

			.mediaList__item--bulleted {
				list-style-type: circle;
			}

			.mediaList__link {
				display: block;
				text-decoration: none;
				color: var(--color-link);
				margin-block-end: var(--spacing-100);

				&:hover {
					color: var(--color-link-hover);
				}

				@media (min-width: 35rem) {
					font-size: var(--font-size-175);
				}
			}

			.mediaList__date {
				color: var(--color-date);
			}

			.mediaList__publisher {
				color: var(--color-publisher);
				margin-inline-end: calc(var(--spacing-200) / 2);
			}

			.mediaList--dark {
				--color-link: var(--color-purple-200);
				--color-publisher: var(--color-yellow);
				--color-date: var(--color-gray-200);
				--color-link-hover: var(--color-yellow);
			}

			.mediaList--light {
				margin-inline-start: 1.25rem;
			}
		`,
	];

	constructor() {
		super();
		this.theme = "light";
		this.decoration = "bulleted";
		this.data = [];
	}
	render() {
		return html`
			<ul class=${clsx("mediaList", `mediaList--${this.theme}`)}>
				${this.data.map((link) => {
					return html`
						<li
							class=${clsx("mediaList__item", {
								"mediaList__item--bulleted": this.decoration === "bulleted",
							})}
						>
							<a class="mediaList__link" href="${link.url}">${link.title}</a>
							<span class="mediaList__publisher">${link.publisher}</span>
							<span class="mediaList__date">${link.date}</span>
						</li>
					`;
				})}
			</ul>
		`;
	}
}

customElements.define("cap-media-list", CapMediaList);
