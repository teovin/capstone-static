import { LitElement, html, nothing } from "../lib/lit.js";

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
				window.location = `/caselaw/?reporter=${refererComponents[0]}`;
			} else if (refererComponents.length == 2) {
				// Attempt to load a volume
				// previously: cite.case.law/<str:series_slug>/<str:volume_number_slug>/
				window.location = `/caselaw/?reporter=${refererComponents[0]}&volume=${refererComponents[1]}`;
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
