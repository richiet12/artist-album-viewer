import Immutable from 'immutable';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { AlbumList } from './albumList';
import pinkFloydTestData from '../config/pinkFloydTestData';

Enzyme.configure({ adapter: new Adapter() });

describe('Album list', () => {
	const mockFetchAlbumsfn = jest.fn();
	const loadingState = Immutable.Map({
		fetching: true,
		error: false,
		errorMsg: '',
		data: Immutable.Map({}),
	});
	const errorState = Immutable.Map({
		fetching: false,
		error: true,
		errorMsg: 'x went wrong',
		data: Immutable.Map({}),
	});
	const successState = Immutable.Map({
		fetching: false,
		error: false,
		errorMsg: '',
		data: Immutable.Map(pinkFloydTestData.data.lookup.artist),
	});
	let wrapper;
	let hasLoadingText;
	let hasErrorComponent;
	let artistNameHeading;
	let countOfAlbumCards;

	describe('fetching', () => {
		beforeEach(() => {
			wrapper = shallow(<AlbumList album={loadingState} fetchAlbums={mockFetchAlbumsfn} />);
			hasLoadingText = wrapper.contains('loading...');
			hasErrorComponent = wrapper.find('ErrorMsg').length === 1;
			artistNameHeading = wrapper.find('h1').length === 1;
			countOfAlbumCards = wrapper.find('AlbumCard').length;
		});

		it('has loading text', () => {
			expect(hasLoadingText).toEqual(true);
		});

		it('has no error component', () => {
			expect(hasErrorComponent).toEqual(false);
		});

		it('has no artist name heading', () => {
			expect(artistNameHeading).toEqual(false);
		});

		it('has no album cards', () => {
			expect(countOfAlbumCards).toBe(0);
		});
	});

	describe('error', () => {
		beforeEach(() => {
			wrapper = shallow(<AlbumList album={errorState} fetchAlbums={mockFetchAlbumsfn} />);
			hasLoadingText = wrapper.contains('loading...');
			hasErrorComponent = wrapper.find('ErrorMsg').length === 1;
			artistNameHeading = wrapper.find('h1').length === 1;
			countOfAlbumCards = wrapper.find('AlbumCard').length;
		});

		it('has no loading text', () => {
			expect(hasLoadingText).toEqual(false);
		});

		it('has error component', () => {
			expect(hasErrorComponent).toEqual(true);
		});

		it('has no artist name heading', () => {
			expect(artistNameHeading).toEqual(false);
		});

		it('has no album cards', () => {
			expect(countOfAlbumCards).toBe(0);
		});
	});

	describe('real album data', () => {
		beforeEach(() => {
			wrapper = shallow(<AlbumList album={successState} fetchAlbums={mockFetchAlbumsfn} />);
			hasLoadingText = wrapper.contains('loading...');
			hasErrorComponent = wrapper.find('ErrorMsg').length === 1;
			artistNameHeading = wrapper.find('h1').length === 1;
			countOfAlbumCards = wrapper.find('AlbumCard').length;
		});

		it('has no loading text', () => {
			expect(hasLoadingText).toEqual(false);
		});

		it('has no error component', () => {
			expect(hasErrorComponent).toEqual(false);
		});

		it('has artist name heading', () => {
			expect(artistNameHeading).toEqual(true);
		});

		it('has album cards', () => {
			expect(countOfAlbumCards).toBe(25);
		});
	});
});
