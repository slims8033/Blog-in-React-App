// in fetching the data from through api call we already use 3 hooks
// and if we wanted to etch some data from different api we would have to re write it
// so to avoid it we create our own CUSTOM HOOK
import { useState, useEffect } from 'react';
const useFetch = (url) => {
	const [ data, setData ] = useState(null);
	// conditional loading and error message using set state
	const [ isLoading, setLoading ] = useState(true);
	const [ isError, setError ] = useState(false);

	useEffect(
		() => {
			setTimeout(() => {
				fetch(url)
					.then((res) => {
						console.log(res);
						if (res.ok !== true) {
							throw Error('response status is not OK');
						}
						return res.json();
					})
					.then((data) => {
						console.log(data);
						setData(data);
						setLoading(false);
						setError();
					})
					.catch(() => {
						console.log('error occured');
						setLoading(false);
						setError(true);
					});
			}, 1000);
		},
		[ url ]
	);
	return { data, isLoading, isError };
};
export default useFetch;
