import { LitElement, html } from "../lib/lit.js";
import "../components/cap-nav.js";
import "../components/cap-page-header.js";
import "../components/cap-footer.js";
import "../components/cap-anchor-list.js";
import "../components/cap-media-list.js";
import { anchorLinks } from "../data/aboutSidebarLinks.js";

export class CapAboutPage extends LitElement {
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
					<h2 class="c-decoratedHeader" id="what-data-do-we-have">
						What data do we have?
					</h2>
					<p>
						CAP includes all official, book-published state and federal United
						States case law — every volume or case designated as an official
						report of decisions by a court within the United States.
					</p>
					<p>
						Our scope includes all state courts, federal courts, and territorial
						courts for American Samoa, Dakota Territory, Guam, Native American
						Courts, Navajo Nation, and the Northern Mariana Islands.
					</p>
					<p>
						Our earliest case is from 1658, and we currently include all volumes
						published through 2020.
					</p>
					<p>
						Each volume has been converted into structured, case-level data
						broken out by majority and dissenting opinion, with human-checked
						metadata for party names, docket number, citation, and date.
					</p>
					<p>
						We also offer PDFs with selectable OCR text for each case published
						up to 2018.
					</p>
					<h2 class="c-decoratedHeader" id="data-sources">Data sources</h2>
					<h3>Harvard Law School Collection</h3>
					<p>
						We created CAP's initial collection by digitizing roughly 40 million
						pages of court decisions contained in roughly 40,000 bound volumes
						owned by the Harvard Law School Library.
					</p>
					<p>
						The Harvard Law School Collection includes volumes published through
						2018.
					</p>
					<p>
						The Harvard Law School Collection was digitized on site at Langdell
						Hall. Members of our team created metadata for each volume,
						including a unique barcode, reporter name, title, jurisdiction,
						publication date and other volume-level information. We then used a
						high-speed scanner to produce JP2 and TIF images of every page. A
						vendor then used OCR to extract the text of every case, creating
						case-level XML files. Key metadata fields, like case name, citation,
						court and decision date, were corrected for accuracy, while the text
						of each case was left as raw OCR output. In addition, for cases from
						volumes not yet in the public domain, our vendor redacted any
						headnotes.
					</p>
					<h4>Harvard Law School Collection scope limits:</h4>
					<p>The Harvard Law School Collection does not include:</p>
					<ul>
						<li>
							Cases not designated as officially published, such as most lower
							court decisions.
						</li>
						<li>
							Non-published trial documents such as party filings, orders, and
							exhibits.
						</li>
						<li>
							Parallel versions of cases from regional reporters, unless those
							cases were designated by a court as official.
						</li>
						<li>
							Cases officially published in digital form, such as recent cases
							from Illinois, Arkansas, New Mexico, and North Carolina.
						</li>
						<li>
							Copyrighted material such as headnotes, for cases still under
							copyright.
						</li>
					</ul>
					<h3>Fastcase Collection</h3>
					<p>
						Our collection is augmented with yearly caselaw donations courtesy
						of
						<a href="https://www.fastcase.com/">Fastcase</a>.
					</p>
					<p>
						Fastcase provides updates, on a yearly basis, of all caselaw volumes
						published more than one year ago that is not yet in the case.law
						corpus. We currently provide Fastcase cases for volumes published
						through 2020.
					</p>
					<p>
						Fastcase volumes are delivered to us in an internal XML/HTML format,
						and we process each case to match the Harvard Law School Collection
						data formats, so researchers can write consistent code across both
						collections.
					</p>
					<h4>Fastcase Collection scope limits:</h4>
					<p>The Fastcase Collection includes only:</p>
					<ul>
						<li>
							Cases published in the reporters A.3d, B.R., Cal. Rptr. 3d, F.3d,
							F. Supp. 3d, N.E.3d, N.W.2d, P.3d, S.Ct., S.E.2d, So.3d, S.W.3d,
							and U.S.
						</li>
						<li>
							Cases published in volumes during or before {{ CASE_MAX_YEAR }}.
						</li>
						<li>
							Cases not otherwise published in the Harvard Law School
							Collection.
						</li>
					</ul>

					<p>The Fastcase Collection does not include:</p>
					<ul>
						<li>PDF page images.</li>
						<li>Copyrighted material such as headnotes.</li>
					</ul>

					<h2 class="c-decoratedHeader" id="data-quality">Data quality</h2>
					<p>
						Harvard Law School Collection data is generated by OCR from page
						scans, using ABBYY FineReader. Case metadata, such as the party
						names, docket number, citation, and date, has received human review.
						Case text and general head matter has been generated by machine OCR
						and has not received human review.
					</p>
					<p>
						You can report errors of all kinds at our
						<a href='{% url "contact" %}'>contact form</a>, or view existing
						issues at our
						<a href="https://github.com/harvard-lil/capstone/issues/"
							>Github issue tracker</a
						>. We particularly welcome volume-level metadata corrections,
						feature requests, and suggestions for large-scale algorithmic
						changes. We are not currently able to process individual OCR
						corrections, but welcome general suggestions on the OCR correction
						process.
					</p>
					<h2 class="c-decoratedHeader" id="data-citation">Data citation</h2>
					<p>
						Data made available through the Caselaw Access Project API and bulk
						download service is citable. View our suggested citation in these
						standard formats:
					</p>
					<p>
						<strong class="u-text-purple-200">APA</strong><br />
						<span>Caselaw Access Project.</span> (2018). Retrieved [date], from
						[url].
					</p>
					<p>
						<strong class="u-text-purple-200">MLA</strong><br />
						The President and Fellows of Harvard University. &quot;Caselaw
						Access Project.&quot; 2018, [url].
					</p>
					<p>
						<strong class="u-text-purple-200">Chicago / Turabian</strong><br />
						Caselaw Access Project. &quot;Caselaw Access Project.&quot; Last
						modified [date], [url].
					</p>
					<p>
						Have you used Caselaw Access Project data in your research?
						<a href="/about">Tell us about it</a>.
					</p>
					<h2 class="c-decoratedHeader" id="usage-and-access">
						Usage and Access
					</h2>
					<p class="u-text-purple-200">
						<strong>
							The CAP data is free for the public to use and access.
						</strong>
					</p>
					<p>
						Case metadata, such as the case name, citation, court, date, etc.,
						is freely and openly accessible without limitation. Full case text
						can be freely viewed or downloaded but you must register for an
						account to do so, and currently you may view or download no more
						than 500 cases per day. In addition, research scholars can qualify
						for bulk data access by agreeing to certain use and redistribution
						restrictions. You can request a bulk access agreement by creating an
						account and then visiting your account page.
					</p>
					<p>
						Access limitations on full text and bulk data are a component of
						Harvard’s collaboration agreement with Ravel Law, Inc. (now part of
						Lexis-Nexis). These limitations will end, at the latest, in February
						of 2024. In addition, these limitations apply only to cases from
						jurisdictions that continue to publish their official case law in
						print form. Once a jurisdiction transitions from print-first
						publishing to digital-first publishing, these limitations cease.
						Thus far, Illinois, Arkansas, New Mexico, and North Carolina have
						made this important and positive shift and, as a result, all
						historical cases from these jurisdictions are freely available to
						the public without restriction. We hope many other jurisdictions
						will follow their example soon.
					</p>
					<h2 class="c-decoratedHeader" id="press">Press</h2>
					<cap-media-list></cap-media-list>

					<h2 class="c-decoratedHeader" id="friends-and-partners">
						Friends and Partners
					</h2>
					<ul>
						<li>
							The Caselaw Access Project is a
							<a href="https://lil.law.harvard.edu/"
								>Harvard Law School Library Innovation Lab</a
							>
							Project.
						</li>
						<li>
							LIL is part of the
							<a href="https://hls.harvard.edu/library"
								>Harvard Law School Library</a
							>.
						</li>
						<li>
							<a href="https://cyber.law.harvard.edu">Berkman-Klein Center</a>
							cooperated with LIL on the Caselaw Access Project.
						</li>
						<li>
							<a href="https://www.ravellaw.com/">Ravel Law</a> has partnered
							with the Harvard Law School Library and LIL since the beginning of
							the Caselaw Access Project. Ravel funded the digitization effort
							and now offers free public access to the entire corpus through
							their <a href="https://home.ravellaw.com">search interface</a> and
							their
							<a href="https://home.ravellaw.com/api">non-commercial API</a>.
						</li>
						<li>
							Carl Jaeckel of
							<a href="https://www.classaction.org/">ClassAction.org</a>
							graciously donated the case.law domain name.
						</li>
						<li>
							<a href="https://www.cloudflare.com/">Cloudflare</a> has
							generously provided LIL with network services for case.law.
						</li>
					</ul>

					<h2 class="c-decoratedHeader" id="getting-legal-help">
						Getting Legal Help
					</h2>
					<p>
						The Caselaw Access Project team cannot help with personal legal
						research problems or legal representation. Our data is valuable for
						scholarship, but it is a work in progress and is not kept up to
						date. Please do not rely on our data set to solve personal legal
						problems.
					</p>
					<p>
						Finding a lawyer: see the list of links on the Harvard Law School
						Library&#39;s page
					</p>
					<p>
						<a href="https://asklib.law.harvard.edu/faq/115265"
							>Where can I get legal advice?</a
						>
					</p>
					<p>
						Alternate databases: if you need to conduct up-to-date research for
						use in a legal proceeding, consider
						<a href="https://guides.library.harvard.edu/alternatelegaldatabases"
							>one of these alternate databases</a
						>.
					</p>
					<p>
						Learning to conduct legal research: If you have access to a
						<a href="http://www.washlaw.edu/statecourtcounty/"
							>public law library</a
						>, its librarians should be able to help you learn legal research
						skills. The Harvard Law School Library Reference Desk may also be
						able to offer assistance through their
						<a href="https://asklib.law.harvard.edu/">Ask a Librarian</a>
						service.
					</p>
				</article>
			</main>
			<cap-footer></cap-footer>
		`;
	}
}
customElements.define("cap-about-page", CapAboutPage);
