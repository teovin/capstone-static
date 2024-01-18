import { mapData } from "../data/map.js";
import { LitElement, css, html, svg } from "../lib/lit.js";

const MAP_KEYS = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

export class AccessibleMap extends LitElement {
	static properties = {
		data: { type: Object },
		abbreviations: { type: Array },
		width: { type: Number },
		height: { type: Number },
	};

	static styles = [
		css`
			.map__path {
				color: var(--color-white);
				fill: none;
			}

			.map__link {
				pointer-events: all;
			}

			.map__link:hover > .map__path,
			.map__link:focus > .map__path {
				fill: var(--color-yellow);
			}
		`,
	];

	_handlePointerEvent(event) {
		const activeState = event.target.getAttribute("data-abbreviation");
		this.activeState = activeState;
		this.dispatchEvent(new Event("map-update"));
	}

	_handleHoverExit() {
		this.activeState = "";
		this.dispatchEvent(new Event("map-update"));
	}

	_getFutureState({ key, currentState }) {
		switch (key) {
			case "ArrowLeft":
				return this.data[currentState].neighbors.left;
			case "ArrowRight":
				return this.data[currentState].neighbors.right;
			case "ArrowUp":
				return this.data[currentState].neighbors.up;
			case "ArrowDown":
				return this.data[currentState].neighbors.down;
		}
	}

	_handleKeyboardEvent(event) {
		const keyName = event.key;
		const currentState = event.target.getAttribute("data-abbreviation");

		// Ignore key events unrelated to arrow keys
		if (!MAP_KEYS.includes(keyName) || !currentState) return;

		const futureState = this._getFutureState({ key: keyName, currentState });
		const futureStateElement = this.shadowRoot.querySelector(
			`.map__link--${futureState}`
		);
		futureStateElement.focus();
		this.activeState = futureState;

		this.dispatchEvent(new Event("map-update"));
	}

	render() {
		return html`
			<svg
				data-abbreviation="us"
				tabindex="0"
				@mouseleave="${this._handleHoverExit}"
				@keydown="${this._handleKeyboardEvent}"
				fill="none"
				class="map"
				viewBox="0 0 ${this.width} ${this.height}"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Map of USA and territories</title>
				<desc>Map showing a summary of available data</desc>

				<path
					d="M222.989 9.4405L213.836 34.5876ZM222.989 9.4405C220.96 8.43697 219.967 6.04644 220.76 3.86917C221.61 1.53403 224.192 0.329727 226.528 1.17964C228.863 2.02956 230.067 4.61222 229.217 6.94735C228.367 9.28343 225.785 10.4868 223.449 9.63688C223.291 9.57908 223.137 9.5135 222.989 9.4405Z"
					fill="white"
				/>
				<path
					d="M222.989 9.4405L213.836 34.5876M222.989 9.4405C220.96 8.43697 219.967 6.04644 220.76 3.86917C221.61 1.53403 224.192 0.329727 226.528 1.17964C228.863 2.02956 230.067 4.61222 229.217 6.94735C228.367 9.28343 225.785 10.4868 223.449 9.63688C223.291 9.57908 223.137 9.5135 222.989 9.4405Z"
					stroke="white"
					stroke-width="0.5"
				/>

				${this.abbreviations.map(
					(abbreviation) =>
						svg`<g class="map__group">
				<title id=${abbreviation}>${mapData[abbreviation].name}</title>
				<a data-abbreviation=${abbreviation} @focus="${this._handlePointerEvent}"  href="https://tinykitelab.com" class="map__link map__link--${abbreviation}" aria-labelledby=${abbreviation}>
					<path data-abbreviation=${abbreviation} @mouseover="${this._handlePointerEvent}" class="map__path" d=${mapData[abbreviation].path} stroke-width="0.5" stroke="currentColor" />
				</a>
			</g>`
				)}
			</svg>
		`;
	}
}
customElements.define("accessible-map", AccessibleMap);
