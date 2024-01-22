import { LitElement, css, html, nothing } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import "./cap-arrowRight.js";

export class CapGalleryItem extends LitElement {
	static properties = {
		title: { type: String },
		description: { type: String },
		pageUrl: { type: String },
		repoUrl: { type: String },
		mainUrl: { type: String },
		image: { type: String | undefined },
	};

	static styles = [
		baseStyles,
		css`
			.galleryItem {
				display: flex;
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

			.galleryItem__iconLink {
				display: block;
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
		this.mainUrl = this.pageUrl ? this.pageUrl : this.repoUrl
	};

	getPageLink() {
		if (this.pageUrl) {
			return html `<a class="galleryItem__iconLink" href=${this.pageUrl}>
				<cap-arrow-right></cap-arrow-right>
				<span class="u-visuallyHidden"
					>Learn More About ${this.title}</span
				></a
			>`;
		} else {
			return nothing;
		}
	};

	getRepoLink() {
		// TODO: this wants to be a Github icon
		if (this.repoUrl) {
			return html `<a class="galleryItem__iconLink" href=${this.repoUrl}>
				<cap-arrow-right></cap-arrow-right>
				<span class="u-visuallyHidden"
					>Source code on Github for ${this.title}</span
				></a
			>`;
		} else {
			return nothing;
		}
	};

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
						<a class="galleryItem__textLink" href=${this.mainUrl}>${this.title}</a>
					</h3>
					<p class="galleryItem__description">${this.description}</p>
					${this.getPageLink()}
					${this.getRepoLink()}
				</div>
			</article>
		`;
	};
}

customElements.define("cap-gallery-item", CapGalleryItem);
