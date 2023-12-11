import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";

export class CapSidebarNavList extends LitElement {
	static properties = {
		sidebarLinks: Array,
	};

	static styles = [baseStyles, css``];

	constructor() {
		super();
	}
	render() {
		return html`
			<ul>
				${sidebarLinks.map((link) => {
					return html`
						<li>
							<a href="${link.url}">${link.title}</a>
						</li>
					`;
				})}
			</ul>
		`;
	}
}

customElements.define("cap-sidebar-nav-list", CapSidebarNavList);
