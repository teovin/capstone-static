import { LitElement, html, css, nothing } from "../lib/lit.js";
import {
	fetchVolumesData,
	fetchReporterData,
	getBreadcrumbLinks,
} from "../lib/data.js";
import { isEmpty } from "../lib/isEmpty.js";
import { fetchOr404 } from "../lib/fetchOr404.js";
import { baseStyles } from "../lib/wc-base.js";
import "./cap-breadcrumb.js";

export default class CapReporter extends LitElement {
	static properties = {
		volumesData: { attribute: false },
		reporterData: { attribute: false },
		reporter: { type: String },
	};

	constructor() {
		super();
		this.volumesData = [];
		this.reporterData = {};
	}

	static styles = [
		baseStyles,

		css`
			p,
			ul {
				font-family: var(--font-sans-text);
				display: inline;

				@media (min-width: 35rem) {
					font-size: var(--font-size-175);
				}
			}

			ul {
				padding: 0;
			}

			li {
				list-style-type: none;
				display: inline;
			}

			a:link,
			a:visited,
			a:hover,
			a:active {
				text-decoration: none;
				color: var(--color-blue-400);
			}

			a:hover {
				color: var(--color-blue-500);
				text-decoration: underline;
			}

			.reporter {
				grid-column: 1 / -1;
				padding-inline: var(--spacing-500);
				padding-block-start: var(--spacing-400);
				padding-block-end: var(--spacing-550);
			}

			.reporter__headingGroup {
				margin-block-start: var(--spacing-100);
			}

			.reporter__heading {
				font-weight: 600;
				font-size: var(--font-size-250);
				position: relative;
			}

			.reporter__subHeading {
				font-size: var(--font-size-175);
				font-weight: 500;
			}

			.reporter__downloadLinks {
				margin-block-start: var(--spacing-150);
			}

			.reporter__downloadLinks a {
				font-weight: 400;
			}

			.reporter__volumeList {
				margin-block-start: var(--spacing-150);
				display: block;
			}

			.reporter__volumeTitle {
				font-weight: 600;
			}
		`,
	];
	connectedCallback() {
		super.connectedCallback();
		fetchOr404(
			() =>
				fetchVolumesData(this.reporter, (data) => (this.volumesData = data)),
			() =>
				fetchReporterData(this.reporter, (data) => (this.reporterData = data)),
		);
	}

	render() {
		if (!isEmpty(this.volumesData) && !isEmpty(this.reporterData)) {
			window.document.title = `Reporter: ${this.reporterData.short_name} | Caselaw Access Project`;
			return html`
				<cap-caselaw-layout>
					<div class="reporter">
						<cap-breadcrumb
							.navItems=${getBreadcrumbLinks(this.reporterData)}
						></cap-breadcrumb>
						<hgroup class="reporter__headingGroup">
							<h1 class="reporter__heading">${this.reporterData.short_name}</h1>
							<p class="reporter__subHeading">
								${this.reporterData.full_name}
								(${this.reporterData.start_year}-${this.reporterData.end_year}).
							</p>
						</hgroup>
						<div class="reporter__downloadLinks">
							<p>
								Download
								<a href="${window.BUCKET_ROOT}/${this.reporter}/">bulk data</a>.
							</p>
						</div>
						<div class="reporter__downloadLinks">
							<p>
								Download
								<a
									href="${window.BUCKET_ROOT}/${this
										.reporter}/ReporterMetadata.json"
									>reporter metadata</a
								>.
							</p>
							<p>
								Download
								<a
									href="${window.BUCKET_ROOT}/${this
										.reporter}/VolumesMetadata.json"
									>volumes metadata</a
								>.
							</p>
						</div>
						<ul class="reporter__volumeList">
							<p class="reporter__volumeTitle">Volume number:</p>
							${this.volumesData
								.sort(
									(a, b) =>
										Number(a.volume_number.split(" ")[0]) -
										Number(b.volume_number.split(" ")[0]),
								)
								.map(
									(v) =>
										html`<li>
											<a
												href="/caselaw/?reporter=${this
													.reporter}&volume=${v.volume_folder}"
												>${v.volume_folder}</a
											>
										</li>`,
								)}
						</ul>
					</div>
				</cap-caselaw-layout>
			`;
		} else {
			return nothing;
		}
	}
}

customElements.define("cap-reporter", CapReporter);
