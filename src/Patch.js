const Patch = (url, curr, name) => {
	curr = !curr;
	if (name === 'bookmark') {
		fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				bookmark: curr
			})
		});
	} else {
		fetch(url, {
			method: 'PATCH',
			headers: {
				'Content-type': 'application/json'
			},
			body: JSON.stringify({
				like: curr
			})
		});
	}

	return curr;
};
export default Patch;
