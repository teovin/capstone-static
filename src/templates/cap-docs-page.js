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
						The CAP website offers a basic interface for interacting with the
						cases in our repository. To access reporters by jurisdiction, visit
						our <a href="/caselaw">Caselaw</a> page and select the
						jurisdiction of interest. The reporters included in that
						jurisdiction will be listed there.
					</p>
					<p>
						To access volumes by reporter, select the reporter from the Caselaw
						page to view the volumes within that reporter.
					</p>
					<p>
						To access individual cases, first select jurisdiction, then
						reporter, and finally the volume of interest. Once on the individual
						volume page, you will be able to access all of the cases in that
						volume.
					</p>
					<p>
						See our <a href="/about">About</a> page for more details on the
						materials included.
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
