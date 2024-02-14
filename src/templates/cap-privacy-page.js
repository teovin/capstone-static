import { LitElement, html } from "../lib/lit.js";
import "../components/cap-nav.js";
import "../components/cap-page-header.js";
import "../components/cap-footer.js";
import "../components/cap-anchor-list.js";
import { anchorLinks } from "../data/privacySidebarLinks.js";

export class CapPrivacyPage extends LitElement {
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
					<cap-page-header heading="Privacy Policy">
						<p class="u-text-white u-text-serif">
							Caselaw Access Project is operated by the President and Fellows of
							Harvard College (“Harvard”) in support of its mission to educate
							and disseminate knowledge and information. As used in this Privacy
							Policy, “CAP” refers to the Caselaw Access Project and to Harvard
							more generally.
						</p>
						<p class="u-text-white u-text-serif">
							CAP is committed to preserving your privacy and being transparent
							about how we use information collected through the case.law
							website (the “Website”) and any other applications, functionality
							or services offered by CAP (collectively with the Website, the
							“Services”). This privacy policy describes how CAP uses, collects,
							and shares information through the Services.
						</p>
					</cap-page-header>
				</header>
				<aside class="u-sm-hidden">
					<cap-anchor-list .data=${anchorLinks}></cap-anchor-list>
				</aside>
				<article class="c-article u-bg-beige">
					<h2
						class="c-decoratedHeader"
						id="what-types-of-information-does-cap-collect"
					>
						What types of information does CAP collect?
					</h2>
					<h3>Usage Data</h3>
					<p>
						As with most services, CAP may automatically collect certain
						information when you use the Services, even when you are not logged
						in. CAP collects this information when you access the Services,
						including when you set up an account or browse, read, or download
						information from the Services. This type of information may include,
						but is not limited to, your IP address, URL request, browser type,
						and the date and time of a request. CAP may use cookies or other
						automated mechanisms to collect this information and may collect
						this information on an aggregate or individual basis. Cookies are
						small text files that the Services can send to your browser for
						storage on your computer. They make use of the Website easier by
						saving your status and preferences and refreshing them every time
						you use the Website. For instance, to facilitate registration and
						login functions, CAP may use cookies to recognize when you return to
						the Website so that you do not have to resubmit your logon
						credentials. In order to clear this logon information, for example
						if using a public terminal, you should log out of your account.
						While many browsers allow you to change your settings in order to
						refuse cookies or to be alerted when cookies are being sent, it is
						recommended that you leave cookies enabled, as disabling cookies may
						interfere with some functionality of the Services.
					</p>
					<h3>Personal Information</h3>
					<p>
						In order to access certain parts of the Services, CAP may require
						you to provide personal information, such as your name and email
						address. CAP uses this information to manage your account,
						communicate with you, and provide the Services to you. CAP will not
						collect any personal information from your use of the Services
						unless you choose to provide it by registering for an account or
						otherwise posting, sending, or uploading the information to the
						Services.
					</p>
					<h2
						class="c-decoratedHeader"
						id="how-does-cap-use-the-information-it-collects"
					>
						How does CAP use the information it collects?
					</h2>
					<p>
						CAP uses the information that it collects to deliver and improve the
						Services, administer mailing lists and online communities, and other
						activities related to the provision of the Services. CAP may retain
						all data and content collected through the Services for restorative,
						archival, or research purposes.
					</p>
					<h2
						class="c-decoratedHeader"
						id="when-does-cap-disclose-information-to-third-parties"
					>
						When does CAP disclose information to third parties?
					</h2>
					<p>
						CAP uses third party services providers, such as web analytics
						providers, infrastructure providers, and other similar providers, to
						help deliver the Services. CAP may share the information it collects
						through the Services with these service providers as necessary to
						provide or improve the Services. CAP may also share certain
						information it collects with its research partners. In addition,
						although CAP will not publicly share personal information unless you
						choose to make that information public, CAP may publicly share
						aggregated data or statistics related to the Services that may
						include anonymized user information or usage statistics. Finally,
						CAP may share information when responding to a request from law
						enforcement, or to prevent malicious use of the Services. In the
						event that CAP is required by law to disclose any information
						related to your account, CAP will use reasonable efforts to provide
						you with notice of the request by email, unless CAP is prohibited by
						law or government order from doing so. CAP will not sell information
						it collects or stores through the Services to any third parties for
						monetary compensation.
					</p>
					<h2
						class="c-decoratedHeader"
						id="what-if-I-access-another-website-or-third-party-service-through-the-services"
					>
						What if I access another website or third party service through the
						Services?
					</h2>
					<p>
						CAP may link you to or provide you access to services or websites
						offered by third parties, such as libraries, museums, archives,
						Facebook, Twitter, Google, and other similar services. Please note
						that this privacy policy does not apply to the practices of those
						third parties, and CAP is not responsible for the privacy practices
						of those third parties. Please make sure you are comfortable with
						the privacy practices of these third parties before using their
						services.
					</p>
					<h2 class="c-decoratedHeader" id="security">Security</h2>
					<p>
						CAP has taken efforts to put security measures in place to protect
						information and data that is collected through the Services.
						However, CAP cannot guarantee or warrant that any information
						collected through the Services will remain confidential, and many
						functions of the Services are intended to make information and
						content publicly available. You are responsible for setting and
						maintaining the security of your password. CAP may not keep a copy
						of your password, so please safeguard the password associated with
						your account and do not share your password with third parties.
					</p>
					<h2 class="c-decoratedHeader" id="transfer-of-information">
						Transfer of Information
					</h2>
					<p>
						Your information may be transferred to and maintained on servers and
						databases located outside of your state, province, country or other
						governmental jurisdiction where the privacy laws may not be as
						protective as your jurisdiction. Please be advised that we may
						transfer your information to and from any state, province, country
						or other governmental jurisdiction, and process it in the United
						States or elsewhere. By using the Services, you consent to any such
						transfer of your information.
					</p>
					<h2 class="c-decoratedHeader" id="changes-to-this-privacy-policy">
						Changes to this Privacy Policy
					</h2>
					<p>
						CAP reserves the right to modify this privacy policy at any time at
						its discretion. If CAP does make changes to this privacy policy, CAP
						will update this page accordingly. Please check this page
						periodically for any changes. Unless otherwise defined in this
						privacy policy, terms used in this privacy policy have the same
						meanings as in the Terms of Use.
					</p>
					<h2 class="c-decoratedHeader" id="questions">Questions?</h2>
					<p>
						If you have questions about this privacy policy, please contact CAP.
					</p>
					<p>Last modified on May 2, 2019.</p>
				</article>
			</main>
			<cap-footer></cap-footer>
		`;
	}
}
customElements.define("cap-privacy-page", CapPrivacyPage);
