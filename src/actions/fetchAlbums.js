import { query as allAlbumsQuery, operationName as allAlbumsOperationName } from '../graphql/queries/allAlbums';
import { GRAPHBRAINZ_ENDPOINT } from '../config/graphbrainz';

export const FETCH_ALBUMS_FAILURE = 'FETCH_ALBUMS_FAILURE';
export const FETCH_ALBUMS_REQUEST = 'FETCH_ALBUMS_REQUEST';
export const FETCH_ALBUMS_SUCCESS = 'FETCH_ALBUMS_SUCCESS';

const fetchAlbumsFailure = function (body) {
	return {
		type: FETCH_ALBUMS_FAILURE,
		payload: body,
	};
};

const fetchAlbumsRequest = function () {
	return {
		type: FETCH_ALBUMS_REQUEST,
		payload: {},
	};
};

const fetchAlbumsSuccess = function (body) {
	return {
		type: FETCH_ALBUMS_SUCCESS,
		payload: body,
	};
};

export const fetchAlbums = function (payload) {
	return (
		(dispatch) => {
			dispatch(fetchAlbumsRequest());
			return new Promise((resolve) => {
				const request = new XMLHttpRequest();

				request.open('POST', GRAPHBRAINZ_ENDPOINT, true);
				request.setRequestHeader('Content-Type', 'application/json');
				request.send(JSON.stringify({
					query: allAlbumsQuery,
					variables: {
						artistId: payload.id,
					},
					operationName: allAlbumsOperationName,
				}));

				request.onreadystatechange = () => {
					if (request.readyState === 4) {
						resolve(request.responseText);
					}
				};
			})
				.then((response) => {
					const jsonResponse = JSON.parse(response);

					if (jsonResponse.data) {
						dispatch(fetchAlbumsSuccess(jsonResponse));
					} else if (jsonResponse.errors.length >= 0) {
						dispatch(fetchAlbumsFailure(jsonResponse.errors[0].message));
					}
				})
				.catch(response =>
					dispatch(fetchAlbumsFailure(response.toString())));
		});
};
