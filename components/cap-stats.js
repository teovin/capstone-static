import { LitElement, html, css } from "../lib/lit.js";
import { baseStyles } from "../lib/wc-base.js";

class CapStats extends LitElement {
	static styles = [
		baseStyles,
		css`
			:host {
				--border-sm: 2px;
				--border-md: 4px;
			}

			.stat {
				display: grid;
				grid-template-columns: 1fr 1fr;
				grid-row-gap: var(--spacing-100);
				justify-content: center;

				background: var(--color-purple-300);
				color: var(--color-white);
				position: relative;
				padding-block: var(--spacing-300);
				padding-inline: calc(var(--spacing-475) * 1.5);

				@media (min-width: 36rem) {
					padding-block: calc(var(--spacing-300) * 1.125);
					padding-inline: calc(var(--spacing-475) * 2);
				}

				@media (min-width: 60rem) {
					display: none;
				}
			}

			.stat::before {
				--size: 25px;

				content: "";
				position: absolute;
				top: 0;
				left: calc(50% - var(--size));
				border-left: var(--size) solid transparent;
				border-right: var(--size) solid transparent;
				border-top: var(--size) solid var(--color-gray-500);
			}

			.stat__item {
				position: relative;
				grid-row: 2;
				font-family: var(--font-sans-titling);
				font-weight: 600;
				font-size: var(--font-size-150);
				line-height: 1;

				@media (min-width: 36rem) {
					font-size: var(--font-size-225);
				}
			}

			.stat__item--one {
				grid-row: 1;
				grid-column: 1 / -1;

				display: grid;
				grid-template-columns: 1fr 1fr;
				align-items: center;
				justify-content: center;
				gap: 0;

				border-bottom: var(--border-sm) solid var(--color-white);

				@media (min-width: 36rem) {
					border-bottom: var(--border-md) solid var(--color-white);
				}
			}

			.stat__item--one > .stat__text:nth-of-type(2) {
				position: relative;
				grid-row: 1;
				grid-column: 2;
				align-self: end;
				margin-block-start: var(--spacing-150);
				font-weight: 900;
				font-size: var(--font-size-200);

				&::before {
					content: "";
					position: absolute;
					top: calc(var(--spacing-150) * -1);
					height: var(--border-sm);
					width: 100%;
					background: var(--color-white);
				}

				@media (min-width: 36rem) {
					font-size: 3rem;

					&::before {
						height: var(--border-md);
					}
				}
			}

			.stat__item--one > .stat__text:last-of-type {
				grid-row: 2;
				grid-column: 2;
				align-self: start;
			}

			.stat__item--two {
				padding-inline-end: 1rem;
			}

			.stat__item--three {
				margin-inline-start: 1rem;
				padding-inline-start: 1rem;

				&::before {
					content: "";
					position: absolute;
					top: 55%;
					transform: translateY(-50%);
					left: -1rem;
					width: var(--border-sm);
					height: 90%;
					background: var(--color-white);
				}

				@media (min-width: 36rem) {
					&::before {
						width: var(--border-md);
					}
				}
			}

			.stat__number {
				font-size: calc(var(--font-size-200) * 2);

				@media (min-width: 36rem) {
					font-size: 6rem;
				}
			}

			.stat__number--one {
				padding-block-end: var(--spacing-100);
				padding-inline-end: 1rem;
				font-weight: 900;
				font-size: calc(var(--font-size-250) * 2);
				grid-row: 1 / 3;

				@media (min-width: 36rem) {
					font-size: 9rem;
				}
			}

			.stat__number--two {
				font-weight: 700;
			}

			.stat__number--three {
				font-weight: 200;
			}

			.stat__text {
				display: block;
			}
		`,
	];
	render() {
		return html`
			<div class="stat">
				<p class="stat__item stat__item--one">
					<span class="stat__number stat__number--one">6.9</span>
					<span class="stat__text stat__text--one">Million</span>
					<span class="stat__text stat__text--one">Unique Cases</span>
				</p>
				<p class="stat__item stat__item--two">
					<span class="stat__number stat__number--two">612</span>
					<span class="stat__text stat__text--two">Reporters</span>
				</p>
				<p class="stat__item stat__item--three">
					<span class="stat__number stat__number--three">36M</span>
					<span class="stat__text stat__text--three">Pages Scanned</span>
				</p>
			</div>
		`;
	}
}

customElements.define("cap-stats", CapStats);
