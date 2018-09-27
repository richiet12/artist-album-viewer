import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_FAILURE, FETCH_ALBUMS_SUCCESS, fetchAlbums } from '../actions/fetchAlbums';
import { PINK_FLOYD_ID } from '../config/graphbrainz';
import pinkFloydTestData from './pinkFloydTestData';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetch albums async actions', () => {
	let store;
	beforeEach(() => {
		store = mockStore({});
	});

	it('creates FETCH_ALBUMS_REQUEST and FETCH_ALBUMS_SUCCESS when fetching albums returns', () => {
		const expectedAction = [
			{
				payload: {},
				type: FETCH_ALBUMS_REQUEST,
			},
			{
				type: FETCH_ALBUMS_SUCCESS,
				payload: pinkFloydTestData,
			},
		];
		const artistId = PINK_FLOYD_ID;

		return store.dispatch(fetchAlbums({ id: artistId })).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});

	it('creates FETCH_ALBUMS_REQUEST and FETCH_ALBUMS_FAILURE when fetching images has been done with a broken search tag', () => {
		const expectedAction = [
			{
				payload: {},
				type: FETCH_ALBUMS_REQUEST,
			},
			{
				type: FETCH_ALBUMS_FAILURE,
				payload: 'Variable "$artistId" got invalid value "~~~"; Expected type MBID; Malformed MBID: ~~~',
			},
		];
		const artistId = '~~~';

		return store.dispatch(fetchAlbums({ id: artistId })).then(() => {
			expect(store.getActions()).toEqual(expectedAction);
		});
	});
});
