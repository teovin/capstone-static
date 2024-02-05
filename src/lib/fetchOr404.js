export async function fetchOr404 () {
	const promises = [...arguments].map((arg) => arg.apply())
	try {
		await Promise.all(promises);
	} catch {
		window.location.replace(`./not-found/${location.search}`);
	}
};
