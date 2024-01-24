import { LitElement, css, html, nothing } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import "./cap-arrowRight.js";
import { githubPath } from "./cap-icons.js";

export class CapGalleryItem extends LitElement {
	static properties = {
		title: { type: String },
		description: { type: String },
		pageUrl: { type: String },
		repoUrl: { type: String },
		image: { type: String | undefined },
	};

	static styles = [
		baseStyles,
		css`
			svg {
				fill: var(--color-gray-500);
			}
			svg:hover {
				fill: var(--color-yellow);
			}

			.galleryItem {
				display: flex;
				margin-block-start: var(--spacing-400);
			}

			.galleryItem__image {
				border-radius: 100%;
				display: none;

				@media (min-width: 35rem) {
					display: unset;
				}
			}

			.galleryItem__description {
				font-family: var(--font-sans-text);

				@media (min-width: 65rem) {
					font-size: var(--font-size-150);
				}
			}

			.galleryItem__textLink {
				color: inherit;
				text-decoration: none;

				&:hover {
					text-decoration: underline;
					text-decoration-thickness: 3px;
					text-decoration-color: var(--color-purple-200);
				}
			}

			.galleryItem__iconLinkGroup {
				display: flex;
			}

			.galleryItem__iconLink {
				margin-inline-end: 0.5rem;
			}

			.galleryItem__content {
				@media (min-width: 35rem) {
					margin-inline-start: var(--spacing-425);
				}
			}

			.galleryItem__content > * + * {
				margin-block-start: var(--spacing-200);
			}
		`,
	];

	constructor() {
		super();
		this.image = "/images/gallery-defaultImage.jpg";
	}

	getPageLink() {
		if (this.pageUrl) {
			return html`<a class="galleryItem__iconLink" href=${this.pageUrl}>
				<cap-arrow-right></cap-arrow-right>
				<span class="u-visuallyHidden">Learn More About ${this.title}</span></a
			>`;
		} else {
			return nothing;
		}
	}

	getRepoLink() {
		if (this.repoUrl) {
			return html`<a class="galleryItem__iconLink" href=${this.repoUrl}>
				<svg
					width="28"
					height="28"
					viewBox="0 0 32 32"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					${githubPath}
				</svg>
				<span class="u-visuallyHidden"
					>Source code on Github for ${this.title}</span
				></a
			>`;
		} else {
			return nothing;
		}
	}

	render() {
		return html`
			<article class="galleryItem">
				<img
					class="galleryItem__image"
					src=${this.image}
					height="120"
					width="120"
				/>
				<div class="galleryItem__content u-w-maxContent">
					<h3 class="galleryItem__title">
						<a
							class="galleryItem__textLink"
							href=${this.pageUrl ? this.pageUrl : this.repoUrl}
							>${this.title}</a
						>
					</h3>
					<p class="galleryItem__description">${this.description}</p>
					<div class="galleryItem__iconLinkGroup">
						${this.getPageLink()} ${this.getRepoLink()}
					</div>
				</div>
			</article>
		`;
	}
}

customElements.define("cap-gallery-item", CapGalleryItem);
