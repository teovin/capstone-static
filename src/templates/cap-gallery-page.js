import { LitElement, html } from "../lib/lit.js";
import "../components/cap-nav.js";
import "../components/cap-page-header.js";
import "../components/cap-footer.js";
import "../components/cap-anchor-list.js";
import "../components/cap-media-list.js";
import "../components/cap-contributor-list.js";
import "../components/cap-gallery-item.js";

import { anchorLinks } from "../data/aboutSidebarLinks.js";

const testData = [
	{
		title: "Modeling the Caselaw Access Project",
		description:
			"Article by Felix B. Chang, Erin McCabe, and James Lee, 22 Nevada Law Journal (2022)",
		link: "/test.html",
	},
];

export class CapGalleryPage extends LitElement {
	// Turn Shadow DOM off
	// Generally discouraged: https://lit.dev/docs/components/shadow-dom/#implementing-createrenderroot
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<cap-nav></cap-nav>
			<main id="main" class="l-interiorPage">
				<header class="u-bg-gray-500 u-col-span-full">
					<cap-page-header heading="About">
						<p class="u-text-white u-text-serif">
							The Caselaw Access Project (“CAP”) expands public access to U.S.
							law. Our goal is to make all published U.S. court decisions freely
							available to the public online, in a consistent format, digitized
							from the collection of the Harvard Law School Library.
						</p>
					</cap-page-header>
				</header>
				<aside class="u-w-fit u-sm-hidden">
					<cap-anchor-list .data=${anchorLinks}></cap-anchor-list>
				</aside>
				<article class="c-article u-bg-beige">
					<h2>Test Section</h2>
					${testData.map((item) => {
						return html`
							<cap-gallery-item
								title=${item.title}
								description=${item.description}
								link=${item.link}
							></cap-gallery-item>
						`;
					})}
				</article>
			</main>
			<cap-footer></cap-footer>
		`;
	}
}
customElements.define("cap-gallery-page", CapGalleryPage);
