import { LitElement, html, nothing } from "../lib/lit.js";

import { fetchCasesList } from "../lib/data.js";
import { fetchOr404 } from "../lib/fetchOr404.js";

import "./cap-notification-banner.js";
import "./cap-nav.js";
import "./cap-page-header.js";
import "./cap-footer.js";

export default class CapRedirector extends LitElement {
	// Turn Shadow DOM off
	// Generally discouraged: https://lit.dev/docs/components/shadow-dom/#implementing-createrenderroot
	createRenderRoot() {
		return this;
	}

	static properties = {
		checkedRedirect: { type: Boolean },
	};

	constructor() {
		super();
		this.checkedRedirect = false;
	}

	async connectedCallback() {
		super.connectedCallback();

		// Check whether we should redirect to another URL

		// Format the path for our checks
		const referer = location.pathname.endsWith("/")
			? location.pathname.slice(0, -1)
			: location.pathname;
		const refererPrefix = referer.split("/").slice(0, 2).join("/");
		const urlParams = new URLSearchParams(window.location.search);

		// If this is a request that originated from cite.case.law...
		if (urlParams.get("src") === "cite.case.law") {
			// ...attempt to parse it as an attempt to view caselaw.
			const refererComponents = referer.split("/").filter((entry) => {
				return entry.trim() != "";
			});
			if (refererComponents.length == 1) {
				// Attempt to load a reporter
				// previously: cite.case.law/<str:series_slug>/
				// Example: https://cite.case.law/ill-app/
				window.location = `/caselaw/?reporter=${refererComponents[0]}`;
			} else if (refererComponents.length == 2) {
				// Attempt to load a volume
				// previously: cite.case.law/<str:series_slug>/<str:volume_number_slug>/
				// Example: https://cite.case.law/ill-app/302/
				window.location = `/caselaw/?reporter=${refererComponents[0]}&volume=${refererComponents[1]}`;
			} else if (refererComponents.length == 3) {
				// Attempt to load a single case using its page number.
				// If multiple cases appear on the same page, show a disambiguation page instead.
				// previously: cite.case.law/<str:series_slug>/<str:volume_number_slug>/<str:page_number>
				// Examples:
				// single case - https://cite.case.law/ill-app/302/1/
				// multiple cases - https://cite.case.law/ill-app/302/570
				const page = refererComponents[2];
				fetchOr404(() =>
					fetchCasesList(refererComponents[0], refererComponents[1], (data) => {
						const cases = data.filter((o) => o.first_page === page);
						if (cases.length === 1) {
							// redirect to that case
							const casePath = cases[0].file_name;
							window.location = `/caselaw/?reporter=${refererComponents[0]}&volume=${refererComponents[1]}&case=${casePath}`;
						} else if (cases.length > 1) {
							// redirect to the disambiguation page
							const reporter = refererComponents[0];
							const volume = refererComponents[1];
							const cite = cases[0].citations[0].cite;
							const caseList = cases
								.map((o) => `${reporter}/${volume}/${o.file_name}`)
								.join(",");
							window.location = `/caselaw/?disambiguate=${encodeURIComponent(caseList)}&cite=${encodeURIComponent(cite)}`;
						} else {
							// we know we're not redirecting
							this.checkedRedirect = true;
						}
					}),
				);
			} else if (refererComponents.length == 4) {
				// Attempt to load a single case using its case id.
				// previously: cite.case.law/<str:series_slug>/<str:volume_number_slug>/<str:page_number>/<int:case_id>/
				// Example: https://cite.case.law/ill-app/302/570/3143810/
				const caseId = refererComponents[3];
				fetchOr404(() =>
					fetchCasesList(refererComponents[0], refererComponents[1], (data) => {
						const targetCase = data.find((o) => o.id.toString() === caseId);
						if (targetCase) {
							const casePath = targetCase.file_name;
							window.location = `/caselaw/?reporter=${refererComponents[0]}&volume=${refererComponents[1]}&case=${casePath}`;
						} else {
							// we know we're not redirecting
							this.checkedRedirect = true;
						}
					}),
				);
			} else {
				// we know we're not redirecting
				this.checkedRedirect = true;
			}
		} else {
			// ...otherwise, see if we should redirect to one of the
			// simplified site's new pages, or to the LIL museum.

			// Simple redirects are an exact match.
			const simpleRedirects = {
				"/bulk/download": "/docs/#bulk-downloads",
				"/exhibits/cite-grid":
					"https://museum.lil.tools/archive/caselaw-access-project/cite-grid",
				"/exhibits/limericks":
					"https://museum.lil.tools/archive/caselaw-access-project/caselaw-limericks",
				"/exhibits/witchcraft":
					"https://museum.lil.tools/archive/caselaw-access-project/witchcraft",
				"/exhibits/wordclouds":
					"https://museum.lil.tools/archive/caselaw-access-project/california-wordclouds",
				"/trends":
					"https://museum.lil.tools/archive/caselaw-access-project/historical-trends",
			};

			// Glob redirects match a prefix.
			const globRedirects = {
				"/docs": "/docs/",
				"/gallery": "/gallery/",
			};

			// Redirect if anything matches.
			if (referer in simpleRedirects) {
				window.location = simpleRedirects[referer];
			} else if (refererPrefix in globRedirects) {
				window.location = globRedirects[refererPrefix];
			} else if (referer.startsWith("/labs/chronolawgic/timeline/")) {
				// Chronologic timelines redirect to the LIL museum with a
				// timeline-specific querystring,
				window.location = `https://museum.lil.tools/archive/caselaw-access-project/chronolawgic?url=https://case.law${referer}`;
			}

			// we know we're not redirecting
			this.checkedRedirect = true;
		}
	}

	render() {
		if (this.checkedRedirect) {
			return html`<a href="#main" class="u-skipLink">Skip to main content</a>
				<cap-notification-banner></cap-notification-banner>
				<cap-nav></cap-nav>
				<main id="main" class="l-interiorPage">
					<header class="u-bg-gray-500 u-col-span-full">
						<cap-page-header heading="Not Found.">
							<p class="u-text-white u-text-serif" style="visibility: hidden">
								The Caselaw Access Project has updated and simplified our site
								to provide long-term, unrestricted access to U.S. case law.
							</p>
							<p class="u-text-white u-text-serif" style="visibility: hidden">
								As part of this process we have deactivated portions of the
								site, potentially including the page you were looking for.
							</p>
							<p class="u-text-white u-text-serif" style="visibility: hidden">
								If you have questions about the changes we have made, please let
								us know at
								<a class="u-link-purple" href="mailto:info@case.law"
									>info@case.law</a
								>.
							</p>
						</cap-page-header>
					</header>
				</main>
				<cap-footer></cap-footer> `;
		}
		return nothing;
	}
}

customElements.define("cap-redirector", CapRedirector);
