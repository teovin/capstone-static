export const isEmpty = (obj) => {
	if (obj === null || obj === undefined) {
		return True;
	} else if (Array.isArray(obj) || typeof obj === "string") {
		return obj.length === 0;
	} else if (
		["boolean", "number", "bigint", "symbol", "function"].includes(typeof obj)
	) {
		throw new Error(f`Unsuported type: ${typeof obj}`);
	} else {
		return Object.keys(obj).length === 0;
	}
};
