export function deleteEntry(url) {
	console.log(url);
	return fetch(url, {
		method: 'DELETE'
	}).then(() => {
		console.log('deleted');
		return true;
	});
}
