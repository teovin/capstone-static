import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";
import { navLinks } from "../data/nav.js";
import "./cap-logo.js";

class CapNav extends LitElement {
	static styles = [
		baseStyles,
		css`
			.header {
				position: relative;
			}
			.nav__mobileMenuToggle {
				background: none;
				border: none;
				cursor: pointer;
				height: 2rem; /* Minimum touch target size */
				width: auto;

				@media (min-width: 37.5rem) {
					display: none;
				}
			}

			.nav__mobileMenuIcon {
				overflow: visible;
				color: var(--color-white);

				&:hover {
					color: var(--color-yellow);
				}
			}

			.nav__mobileMenuPath,
			.nav_mobileMenuIcon {
				@media (prefers-reduced-motion: no-preference) {
					transition-property: opacity, transform;
					transition-duration: 0.3s;
				}
			}

			.nav__mobileMenuPath--bottom {
				transform-origin: bottom left;
			}

			.nav {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				font-family: var(--font-sans-text);
				color: var(--color-white);
				padding: calc(var(--spacing-125) / 2);
				background: var(--color-gray-500);
				position: relative;
			}

			.nav__list {
				display: none;
				justify-content: center;
				flex-basis: 100%;
				flex-wrap: wrap;
				margin-top: var(--spacing-200);

				@media (min-width: 37.5rem) {
					display: flex;
					flex-basis: auto;
					margin-top: 0;
				}
			}

			.nav__mobileMenuToggle[aria-expanded="true"] + .nav__list {
				display: flex;
			}

			.nav__item {
				list-style: none;
				margin-right: 1rem;
			}

			.nav__item:not(:last-of-type) {
				margin-right: var(--spacing-275);
			}

			.nav__link {
				color: inherit;
				text-decoration: none;
			}

			.nav__link:hover,
			.nav__link:focus {
				color: var(--color-yellow);
			}
		`,
	];

	_handleCloseAnimation() {
		this.shadowRoot.querySelector(
			".nav__mobileMenuPath--middle",
		).style.opacity = "1";

		this.shadowRoot.querySelector(".nav__mobileMenuPath--top").style.transform =
			"unset";

		this.shadowRoot.querySelector(
			".nav__mobileMenuPath--bottom",
		).style.transform = "unset";

		this.shadowRoot.querySelector(".nav__mobileMenuIcon").style.transform =
			"unset";
	}

	_handleOpenAnimation() {
		this.shadowRoot.querySelector(
			".nav__mobileMenuPath--middle",
		).style.opacity = "0";

		this.shadowRoot.querySelector(".nav__mobileMenuPath--top").style.transform =
			"rotate(45deg)";

		this.shadowRoot.querySelector(
			".nav__mobileMenuPath--bottom",
		).style.transform = "rotate(-45deg)";

		this.shadowRoot.querySelector(".nav__mobileMenuIcon").style.transform =
			"translateX(4px)";
	}

	_handleMenuToggle() {
		const navToggle = this.shadowRoot.querySelector(".nav__mobileMenuToggle");
		const isToggled = navToggle.ariaExpanded;

		// Note: an aria attribute-derived value is always a string
		// So to check the value, we need this super verbose syntax
		if (isToggled === "false") {
			navToggle.ariaExpanded = true;
			this._handleOpenAnimation();

			// When mobile nav is toggled, we need to programmatically focus its first link
			this.shadowRoot.querySelector(".nav__link").focus();
		} else {
			navToggle.ariaExpanded = false;
			this._handleCloseAnimation();
		}
	}

	render() {
		return html`
			<header class="header">
				<a href="#main" class="u-skipLink">Skip to main content</a>

				<nav class="nav">
					<a href="/">
						<cap-logo></cap-logo>
						<span class="u-visuallyHidden">Caselaw Access Project</span></a
					>

					<button
						class="nav__mobileMenuToggle"
						aria-haspopup="menu"
						aria-expanded="false"
						@click="${this._handleMenuToggle}"
					>
						<span class="u-visuallyHidden"> Menu </span>

						<svg
							class="nav__mobileMenuIcon"
							aria-hidden="true"
							width="25"
							height="18"
							viewBox="0 0 25 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								class="nav__mobileMenuPath nav__mobileMenuPath--top"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8.74228e-08 0.999998C1.35705e-07 0.447713 0.447716 -2.14643e-06 1 -2.09815e-06L24 -8.74228e-08C24.5523 -3.91405e-08 25 0.447715 25 1V1C25 1.55228 24.5523 2 24 2L1 2C0.447715 2 3.91405e-08 1.55228 8.74228e-08 0.999998V0.999998Z"
								fill="currentColor"
							/>
							<path
								class="nav__mobileMenuPath nav__mobileMenuPath--middle"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8.74228e-08 9C1.35705e-07 8.44771 0.447716 8 1 8L24 8C24.5523 8 25 8.44772 25 9V9C25 9.55228 24.5523 10 24 10L1 10C0.447715 10 3.91405e-08 9.55228 8.74228e-08 9V9Z"
								fill="currentColor"
							/>
							<path
								class="nav__mobileMenuPath nav__mobileMenuPath--bottom"
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M8.74228e-08 17C1.35705e-07 16.4477 0.447716 16 1 16L24 16C24.5523 16 25 16.4477 25 17V17C25 17.5523 24.5523 18 24 18L1 18C0.447715 18 3.91405e-08 17.5523 8.74228e-08 17V17Z"
								fill="currentColor"
							/>
						</svg>
					</button>

					<ul class="nav__list">
						${navLinks.map((link) => {
							return html`
								<li class="nav__item" tab>
									<a class="nav__link" href="${link.path}">${link.name}</a>
								</li>
							`;
						})}
					</ul>
				</nav>
			</header>
		`;
	}
}

customElements.define("cap-nav", CapNav);
