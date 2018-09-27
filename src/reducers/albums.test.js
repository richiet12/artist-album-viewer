import Immutable from 'immutable';
import albumReducer from './albums';
import { FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_FAILURE, FETCH_ALBUMS_SUCCESS } from '../actions/fetchAlbums';

const albumDefaultImmutableState = Immutable.Map({
	fetching: false,
	error: false,
	errorMsg: '',
	data: Immutable.Map({}),
});

describe('Album Reducer', () => {
	it('handles action with unknown type', () => {
		expect(albumReducer(undefined, {})).toEqual(albumDefaultImmutableState);
	});

	it('handles action of type FETCH_ALBUMS_REQUEST', () => {
		const payload = {};
		const expectedOutput = Immutable.Map({
			fetching: true,
			error: false,
			errorMsg: '',
			data: Immutable.Map({}),
		});
		const action = { type: FETCH_ALBUMS_REQUEST, payload };
		expect(albumReducer(albumDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FETCH_ALBUMS_SUCCESS', () => {
		const payload = {
			data: {
				lookup: {
					artist: {
						name: 'Pink Floyd',
					},
				},
			},
		};
		const expectedOutput = Immutable.Map({
			fetching: false,
			error: false,
			errorMsg: '',
			data: Immutable.Map({ name: 'Pink Floyd' }),
		});
		const action = { type: FETCH_ALBUMS_SUCCESS, payload };
		expect(albumReducer(albumDefaultImmutableState, action)).toEqual(expectedOutput);
	});

	it('handles action of type FETCH_ALBUMS_FAILURE', () => {
		const payload = 'an error occured';
		const expectedOutput = Immutable.Map({
			fetching: false,
			error: true,
			errorMsg: 'an error occured',
			data: Immutable.Map({}),
		});
		const action = { type: FETCH_ALBUMS_FAILURE, payload };
		expect(albumReducer(albumDefaultImmutableState, action)).toEqual(expectedOutput);
	});
});
