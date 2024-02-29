import { LitElement, html } from "../lib/lit.js";
import "../components/cap-banner.js";
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
			<cap-banner></cap-banner>
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
						You can download data manually from the CAP website, or select URLs
						to download programmatically.
					</p>
					<p>
						To access data, identify the reporter slug and volume number, then visit
						[URL-TO-COME]/reporter_slug/volume_number.zip. For example, to
						download the zip for Arkansas Reports (1837-2009), Volume 14, you'd visit
						[URL-TO-COME]/ark/14.zip. You can identify the reporter slug and volume
						number by selecting the reporter and volume from the <a href="/caselaw">
						Caselaw</a> page and examining the URL:
						[URL-TO-COME]/reporter=reporter_slug&volume=volume_number.
					</p>
					<p>
						An alternative way to access downloads is to use <code>wget</code>, which
						retries when it encounters a network problem. Here's an example for the same
						zip mentioned above:
						<pre>wget https://[URL-TO-COME]/ark/14.zip</pre>
					</p>
					<h3>Data Format</h3>
					<p>
						Bulk data files are provided as zipped directories. In these zips, you
						will find directories called metadata, json, and html.
						The metadata directory contains files called VolumeMetadata.json and
						CasesMetadata.json. The json directory contains all cases for that volume
						in JSON format. The html directory contains all cases for that volume in
						HTML format.
						<pre>.
├── metadata/
│   └── VolumeMetadata.json
│   └── CasesMetadata.json
├── json/
│   └── 0001-01.json
│   └── 0002-01.json
│   └── etc
└── html/
    └── 0001-01.html
    └── 0003-01.html
    └── etc
						</pre>
					</p>
					<h3>Using Bulk Data</h3>
					<p>
						The .zip file can be unzipped using third-party GUI programs like
						<a href="https://theunarchiver.com/">The Unarchiver</a> (Mac) or
						<a href="https://www.7-zip.org/">7-zip</a> (Windows), or from the command
						line with a command like <code>unzip volume_number.zip</code>.
						Once you have the directories unzipped, you can interact directly with the
						files themselves. Alternatively, to read the file from the command line,
						run (for example):
						<pre>cat json/0001-01.json | less</pre>
					</p>
					<p>
						If you install <a href="https://stedolan.github.io/jq/download/">jq</a>
						you can run more sophisticated queries on the json files, such as
						extracting the id of the case:
						<pre>cat json/0001-01.json | jq .id | less</pre>
					</p>
					<p>
						You can also interact directly with zipped files via code using libraries
						such as <a href="https://docs.python.org/3/library/zipfile.html">zipfile</a>
						with Python.
				</article>
			</main>
			<cap-footer></cap-footer>
		`;
	}
}
customElements.define("cap-docs-page", CapDocsPage);
