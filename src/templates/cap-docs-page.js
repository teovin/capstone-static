import { LitElement, html } from "../lib/lit.js";
import "../components/cap-nav.js";
import "../components/cap-page-header.js";
import "../components/cap-footer.js";
import "../components/cap-anchor-list.js";
import { anchorLinks } from "../data/docsSidebarLinks.js";

export class CapDocsPage extends LitElement {
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
					<cap-page-header heading="Documentation">
						<p class="u-text-white u-text-serif">
							Welcome to the Caselaw Access Project Documentation. Here you'll
							find some documentation about our project, organization, data, and
							site.
						</p>
					</cap-page-header>
				</header>
				<aside class="u-sm-hidden">
					<cap-anchor-list .data=${anchorLinks}></cap-anchor-list>
				</aside>
				<article class="c-article u-bg-beige">
					<h2 class="c-decoratedHeader" id="accessing-data">Accessing Data</h2>
					<p>
						[We will put some documentation content about accessing data here.]
					</p>
					<h2 class="c-decoratedHeader" id="bulk-downloads">Bulk Downloads</h2>
					<p>
						[We will put some documentation content about bulk downloads here.]
					</p>
				</article>
			</main>
			<cap-footer></cap-footer>
		`;
	}
}
customElements.define("cap-docs-page", CapDocsPage);
