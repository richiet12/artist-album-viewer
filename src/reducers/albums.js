import Immutable from 'immutable';
import { FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_FAILURE, FETCH_ALBUMS_SUCCESS } from '../actions/fetchAlbums';

const immutableState = Immutable.Map({
	fetching: false,
	error: false,
	errorMsg: '',
	data: Immutable.Map({}),
});

export default function (state = immutableState, action) {
	switch (action.type) {
		case FETCH_ALBUMS_REQUEST:
			return state.set('fetching', true)
				.set('error', false)
				.set('errorMsg', '')
				.set('data', Immutable.Map());

		case FETCH_ALBUMS_SUCCESS:
			return state.set('fetching', false)
				.set('error', false)
				.set('errorMsg', '')
				.set('data', Immutable.Map(action.payload.data.lookup.artist));

		case FETCH_ALBUMS_FAILURE:
			return state.set('fetching', false)
				.set('error', true)
				.set('errorMsg', action.payload)
				.set('data', Immutable.Map());

		default:
			return state;
	}
}
