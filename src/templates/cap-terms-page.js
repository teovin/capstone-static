import { LitElement, html } from "../lib/lit.js";
import "../components/cap-banner.js";
import "../components/cap-nav.js";
import "../components/cap-page-header.js";
import "../components/cap-footer.js";
import "../components/cap-anchor-list.js";
import { anchorLinks } from "../data/termsSidebarLinks.js";

export class CapTermsPage extends LitElement {
	// Turn Shadow DOM off
	// Generally discouraged: https://lit.dev/docs/components/shadow-dom/#implementing-createrenderroot
	createRenderRoot() {
		return this;
	}

	render() {
		return html`
			<cap-banner></cap-banner>
			<cap-nav></cap-nav>
			<main id="main" class="l-interiorPage">
				<header class="u-bg-gray-500 u-col-span-full">
					<cap-page-header heading="Terms of Use">
						<p class="u-text-white u-text-serif">
							Effective: <span class="u-text-purple-200">April 23, 2019</span>
						</p>
						<p class="u-text-white u-text-serif">
							Caselaw Access Project is operated by the President and Fellows of
							Harvard College (“Harvard”) in support of its mission to educate
							and disseminate knowledge and information. As used in these Terms
							of Use, “CAP” refers to the Caselaw Access Project and to Harvard
							more generally. The “site” refers to the CAP website.
						</p>
						<p class="u-text-white u-text-serif">
							These Terms of Use constitute an agreement between you (either an
							individual or an entity, referred to herein as “you”) and CAP and
							governs your access to and use of the API.
						</p>
					</cap-page-header>
				</header>
				<aside class="u-sm-hidden">
					<cap-anchor-list .data=${anchorLinks}></cap-anchor-list>
				</aside>
				<article class="c-article u-bg-beige">
					<h2 class="c-decoratedHeader" id="daily-caselaw-limit">
						Daily caselaw limit
					</h2>
					<p>
						CAP allows access to the full text of a maximum of 500 cases per
						person per day.
						<b
							>By using case.law you agree to restrict your access to 500 cases
							per day, regardless of the device or devices used for access, and
							regardless of the URL or method by which the cases are retrieved
							from the site.</b
						>
					</p>
					<p>
						This restriction does not apply to cases from “whitelisted”
						jurisdictions, as designated on the site, and does not apply to
						research scholars governed by a separate agreement.
					</p>
					<h2 class="c-decoratedHeader" id="about-cite.case.law">
						About cite.case.law
					</h2>
					<p>
						"cite.case.law" is a subdomain of CAP that provides access to
						caselaw for individual readers.
					</p>
					<h2 class="c-decoratedHeader" id="access-to-cite.case.law">
						Access to cite.case.law
					</h2>
					<p>
						Unlike the CAP API and bulk download files, cite.case.law is
						intended for human readers, not for bots or programmatic access.
					</p>
					<p class="u-text-purple-200">You shall not:</p>
					<ol>
						<li>
							use robots, spiders, scripts, service, software or any manual or
							automatic device, tool, or process designed to data mine or scrape
							cite.case.law, or otherwise access cite.case.law using automated
							means;
						</li>
						<li>
							use services, software or any manual or automatic device, tool, or
							process designed to circumvent any restriction, condition, or
							technological measure that controls access to cite.case.law in any
							way, including overriding any security feature or bypassing or
							circumventing any access controls or use limits.
						</li>
					</ol>
					<h2 class="c-decoratedHeader" id="about-the-api">About the API</h2>
					<p>
						CAP provides an application programmer interface (API) as a tool for
						accessing data and digital files made available through the
						digitization of portions of the collection of the Harvard Law School
						Library.
					</p>
					<p>Use of the API is contingent on agreeing to the Terms of Use.</p>
					<h2 class="c-decoratedHeader" id="access-to-api">Access to API</h2>
					<p>
						CAP reserves the right to limit access or to eliminate access to the
						API to anyone for any reason.
					</p>
					<p class="u-text-purple-200">You shall:</p>
					<ol>
						<li>Comply with the Terms of Use.</li>
						<li>
							Comply with any and all legal requirements and restrictions
							pertaining to the usage of content available through CAP.
						</li>
					</ol>
					<p class="u-text-purple-200">You shall not:</p>
					<ol>
						<li>
							Misrepresent or conceal your identity or your application’s
							identity when using or requesting authorization to use the API.
						</li>
						<li>
							Use the API for any illegal purpose, including, but not limited
							to, piracy and other violations of intellectual property rights.
						</li>
						<li>Use an unreasonable amount of bandwidth.</li>
						<li>Make an unreasonable amount of calls to the API.</li>
						<li>
							Seek to circumvent limits placed on your token pursuant to these
							terms by creating additional tokens.
						</li>
						<li>
							Use the API in a manner that adversely impacts the stability of
							CAP servers or other applications using the API.
						</li>
						<li>
							Use the API in connection with spyware, malware, or other
							malicious programs or code.
						</li>
						<li>
							Sell, lease or sublicense the API, the API key or access thereto.
						</li>
						<li>
							Falsely indicate the endorsement by CAP or Harvard of your project
							by any means.
						</li>
					</ol>

					<h2 class="c-decoratedHeader" id="compliance-with-laws">
						Compliance with Laws
					</h2>
					<p>
						You are responsible for complying with all applicable laws, rules,
						regulations and third-party rights in conjunction with your use of
						the API.
					</p>
					<h2 class="c-decoratedHeader" id="authentication-tokens">
						Authentication Tokens
					</h2>
					<p>
						Certain uses of the API may require you to apply for an
						<b>Authentication Token</b>. An Authentication Token is a type of
						credential similar to a username/password that indicates a user is
						entitled to a certain set of permissions.
					</p>
					<p>
						By applying for an Authentication Token you warrant the information
						you supply is true and correct. Your use of an Authentication Token
						is subject to the terms of this agreement.
					</p>
					<h2 class="c-decoratedHeader" id="disclaimer-of-any-warranty">
						Disclaimer of Any Warranty
					</h2>
					<p>
						By using the API, you agree that the API is provided “as is” and
						your use of the API is solely at your own discretion and risk. You
						agree that you will be solely responsible for any damage that
						results from your use of the API. You agree that CAP is not
						responsible for providing any support for your use of the API.
					</p>
					<p>
						CAP may discontinue the availability of some or all of the API, its
						features, or its services at any time for any reason.
					</p>
					<p>
						Some of the CAP API may be experimental and not tested in any
						manner. CAP makes no representations or warranties, express or
						implied, regarding the operation of the CAP API or the content
						available through the CAP API.
					</p>
					<p>
						To the extent permitted by law, CAP disclaims any and all
						warranties, including but not limited to the warranties of
						merchantability, fitness for a particular purpose, warranties
						regarding security, accuracy, timeliness, and performance of the API
						and the content accessed through the CAP website.
					</p>
					<h2
						class="c-decoratedHeader"
						id="release-waiver-and-limitation-of-liability"
					>
						Release, Waiver, and Limitation of Liability
					</h2>
					<p>
						To the maximum extent permitted by applicable law, you release and
						waive all claims against CAP, its subsidiaries, affiliates and
						agents from any and all liability for claims, damages, costs and
						expenses arising from or related to your use of the CAP API.
					</p>
					<p>
						CAP shall not, under any circumstances, be liable to you for any
						indirect, incidental, consequential, special, or exemplary damages
						arising out of or in connection with the use of the API, whether
						based on breach of contract, breach of warranty, tort, or any other
						pecuniary loss, whether or not CAP has been advised of the
						possibility of such damages.
					</p>
					<p>
						Under no circumstances shall CAP be liable to you for any amount.
					</p>
					<h2 class="c-decoratedHeader" id="hold-harmless-and-indemnify">
						Hold Harmless and Indemnify
					</h2>
					<p>
						You agree that CAP will have no liability whatsoever with regard to
						any third-party claims related to your use of the API. To the
						maximum extent permitted by applicable law, you agree to hold
						harmless and indemnify CAP, its subsidiaries, affiliates and agents
						from any third-party claims, damages, liabilities, costs and fees
						(including attorney fees) arising from or related to your use of the
						API.
					</p>
					<h2 class="c-decoratedHeader" id="severability-and-integration">
						Severability and Integration
					</h2>
					<p>
						If any part of the Terms of Use is found unenforceable, the rest of
						the Terms of Use shall remain enforceable to the maximum extend of
						the law.
					</p>
					<p>
						The Terms of Use constitute the entire agreement between CAP and you
						with respect to the use of the API. The section headings and
						subheadings contained in the API Terms of Use are included for
						convenience only, and shall not limit or otherwise affect the Terms
						of Use.
					</p>
					<h2 class="c-decoratedHeader" id="eligibility">Eligibility</h2>
					<p>
						You affirm that you are either more than 18 years of age, or an
						emancipated minor, or possess legal parental or guardian consent,
						and that you are fully competent to use the Site and to enter into
						and comply with these Terms of Use. In any case, you affirm that you
						are at least 13 years of age, as the Site is not intended for
						children who are under 13 years of age. Use of the Site by anyone
						under 13 years of age is not authorized.
					</p>
					<h2 class="c-decoratedHeader" id="modifications">Modifications</h2>
					<p>
						CAP reserves the right to change these Terms of Use at any time, at
						its sole discretion.
					</p>
				</article>
			</main>
			<cap-footer></cap-footer>
		`;
	}
}
customElements.define("cap-terms-page", CapTermsPage);
