import { LitElement, html } from "../lib/lit.js";
import "../components/cap-notification-banner.js";
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
			<a href="#main" class="u-skipLink">Skip to main content</a>
			<cap-notification-banner></cap-notification-banner>
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
					<h2 class="c-decoratedHeader" id="accessing-data">Accessing CAP data via CourtListener</h2>
					<p>
						The independent non-profit organization Free Law Project has made the
						CAP data available through their CourtListener platform. Since both CourtListener
						and our project are open source projects supported by small teams, we have
						decided to collaborate to provide the best possible access to the data.
					</p>
					<p>
						CourtListener
						provides a robust API for accessing CAP data, as well as a user-friendly
						interface for searching and browsing the data. To access CAP data via
						CourtListener, visit
						<a href="https://www.courtlistener.com/">the CourtListener homepage</a>
						to search individual cases, or visit
						<a href="https://www.courtlistener.com/help/api/">the CourtListener API documentation</a>
						to access their API.
					</p>
					
					<h2 class="c-decoratedHeader" id="accessing-data">Accessing CAP cases on our site</h2>
					<p>
						The CAP website offers a basic interface for interacting with the
						cases in our repository. To access reporters by jurisdiction, visit
						our <a href="/caselaw">Caselaw</a> page and select the jurisdiction
						of interest. The reporters included in that jurisdiction will be
						listed there.
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
					<h3>Downloading</h3>
					<p>
						You can download bulk data from our website at 
						<a href="https://static.case.law/">https://static.case.law/</a>. You can
						also browse our <a href="/caselaw">Caselaw</a> page and find links to the
						relevant static download files from there.
					</p>
					<p>
						An alternative way to access downloads is to use <code>wget</code>, which
						retries when it encounters a network problem. For example:
						<pre>wget https://static.case.law/ark/14.zip</pre>
					</p>
					<h3>static.case.law file types</h3>
					<p>
						Our static file export provides access to the following file types:
					</p>
					<ul>
						<li><b></b>ReportersMetadata.json</b>: JSON list of metadata for all reporters</li>
						<li><b></b>VolumesMetadata.json</b>: JSON list of metadata for all volumes</li>
						<li><b></b>JurisdictionsMetadata.json</b>: JSON list of metadata for all jurisdictions</li>
						<li><b>&lt;reporter slug&gt;/</b>: folder for each reporter
							<ul>
								<li><b></b>ReporterMetadata.json</b>: JSON object of metadata for this reporter</li>
								<li><b></b>VolumesMetadata.json</b>: JSON list of metadata for volumes in this reporter</li>
								<li><b>&lt;volume number&gt;/</b>: folder for each volume in this reporter
									<ul>
										<li><b></b>VolumeMetadata.json</b>: JSON object of metadata for this volume</li>
										<li><b></b>CasesMetadata.json</b>: JSON list of metadata for each case in this volume</li>
										<li><b>cases/</b>: folder of case JSON files
											<ul>
												<li>
													<b>&lt;zero-padded page number&gt;-&lt;zero-padded index number&gt;.json</b>:
													JSON object with case metadata and text of each section of the case
												</li>
											</ul>
										</li>
										<li><b>html/</b>:
											<ul>
												<li>
													<b>&lt;zero-padded page number&gt;-&lt;zero-padded index number&gt;.html</b>:
													HTML of each case. Each block of the HTML also contains the region of the PDF
													from which it was extracted.
												</li>
											</ul>
										</li>
									</ul>
								</li>
								<li>
									<b>&lt;volume number&gt;.zip</b>:
									zip file for each volume folder, including json and html but not PDF.
									In the zip file, VolumeMetadata.json and CasesMetadata.json are included
									within a "metadata" subfolder instead of at the root level.
								</li>
								<li>
									<b>&lt;volume number&gt;.pdf</b>:
									PDF of scanned volume, including selectable OCR.
								</li>
								<li>
									<b>&lt;volume number&gt;.tar</b>:
									Included for historical interest. Tar file of the volume as originally
									delivered from the processing vendor.
								</li>
								<li>
									<b>&lt;volume number&gt;.tar.csv</b>:
									Included for historical interest. Listing of files in &lt;volume number&gt;.tar.
								</li>
								<li>
									<b>&lt;volume number&gt;.tar.sha256</b>:
									Included for historical interest. Hash of &lt;volume number&gt;.tar.
								</li>
							</ul>
						</li>
					</ul>
				</article>
			</main>
			<cap-footer></cap-footer>
		`;
	}
}
customElements.define("cap-docs-page", CapDocsPage);
