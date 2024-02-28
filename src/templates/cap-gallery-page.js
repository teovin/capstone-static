import { LitElement, html } from "../lib/lit.js";
import "../components/cap-banner.js";
import "../components/cap-nav.js";
import "../components/cap-page-header.js";
import "../components/cap-footer.js";
import "../components/cap-anchor-list.js";
import "../components/cap-media-list.js";
import "../components/cap-contributor-list.js";
import "../components/cap-gallery-item.js";

import { gallerySections, galleryItems } from "../data/gallery.js";

export class CapGalleryPage extends LitElement {
	// Turn Shadow DOM off
	// Generally discouraged: https://lit.dev/docs/components/shadow-dom/#implementing-createrenderroot
	createRenderRoot() {
		return this;
	}

	getSections() {
		return gallerySections.sort((a, b) => {
			return a.order - b.order;
		});
	}

	getSectionLinks() {
		return this.getSections().map((section) => {
			return {
				title: section.title,
				url: `#${section.titleSlug}`,
			};
		});
	}

	getItemsForSection(section) {
		return galleryItems
			.filter((item) => {
				return item.section == section.pk;
			})
			.sort((a, b) => {
				return a.order - b.order;
			});
	}

	render() {
		return html`
			<cap-banner></cap-banner>
			<cap-nav></cap-nav>
			<main id="main" class="l-interiorPage">
				<header class="u-bg-gray-500 u-col-span-full">
					<cap-page-header heading="Gallery">
						<p class="u-text-white u-text-serif">
							The sky's the limit! Here are some examples of what's possible.
						</p>
					</cap-page-header>
				</header>
				<aside class="u-sm-hidden">
					<cap-anchor-list .data=${this.getSectionLinks()}></cap-anchor-list>
				</aside>
				${this.getSections().map((section) => {
					return html`
						<article class="c-article u-bg-beige">
							<h2 class="c-decoratedHeader" id="${section.titleSlug}">
								${section.title}
							</h2>
							${this.getItemsForSection(section).map((item) => {
								return html`
									<cap-gallery-item
										title=${item.title}
										description=${item.description}
										pageUrl=${item.pageUrl}
										repoUrl=${item.repoUrl}
										image=${item.image}
									></cap-gallery-item>
								`;
							})}
						</article>
					`;
				})}
			</main>
			<cap-footer></cap-footer>
		`;
	}
}
customElements.define("cap-gallery-page", CapGalleryPage);
