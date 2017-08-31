import * as types from './types';


function receiveData(json) {
	return {
		type: types.RECV_DATA,
		data: json
	};
}

function receiveError() {
	return {
		type: types.RECV_ERROR,
	};
}

export function fetchData() {
	const URL = 'http://192.168.1.10:3000/tcards';
	return function (dispatch) {
		return fetch(URL)
			.then(response => Promise.all([response, response.json()]))
			.then(([response, json]) => {
				dispatch(receiveData(json));
			})
			.catch((err) => {
				console.log(err);
				dispatch(receiveError(err));
			}
		);
	};
}
