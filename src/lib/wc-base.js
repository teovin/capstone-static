import { css } from "./lit.js";
// Base styles are based on Josh W Comeau's excellent CSS Reset
// https://www.joshwcomeau.com/css/custom-css-reset/

export const baseStyles = css`
	:host * {
		margin: 0;
		-webkit-font-smoothing: antialiased;
	}

	:host,
	:host *,
	:host *::before,
	:host *::after {
		box-sizing: border-box;
	}

	p,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		overflow-wrap: break-word;
		line-height: 1.5;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: var(--font-sans-titling);
	}

	p {
		font-family: var(--font-serif);
	}

	img,
	svg {
		display: block;
		max-width: 100%;
	}

	input,
	button,
	textarea,
	select {
		font: inherit;
	}

	/* Further reading: https://cloudfour.com/thinks/see-no-evil-hidden-content-and-accessibility/ */
	.u-visuallyHidden {
		border: 0;
		clip: rect(0 0 0 0);
		clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
		-webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		width: 1px;
		white-space: nowrap;
	}

	.u-skipLink {
		position: absolute;
		top: calc(-100% + -1rem);
		left: 0;
		padding-block: var(--spacing-250);
		padding-inline: var(--spacing-300);
		background: var(--color-white);
		font-family: var(--font-sans-text);
		font-size: var(--font-size-175);
		font-weight: 700;
		color: var(--color-blue-200);
		text-decoration: none;
		z-index: 1;

		&:focus {
			top: 0;
		}
	}

	.u-w-maxContent {
		max-width: 41rem;
	}
`;
