/* eslint-disable  jsx-a11y/heading-has-content */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import AlbumCard from './albumCard';

Enzyme.configure({ adapter: new Adapter() });

describe('Album card', () => {
	let wrapper;
	const sampleAlbum = {
		title: 'Green Is the Colour',
		date: '1993-07',
		imgSrc: 'http://coverartarchive.org/release/ee7104dd-ed89-4b4f-850a-97c265381eb8/18662681690.jpg',
		year: '1993',
	};
	let albumTitle;
	let albumReleaseDate;
	let albumImage;

	describe('image provided', () => {
		beforeEach(() => {
			wrapper = shallow(<AlbumCard
				title={sampleAlbum.title}
				firstReleaseDate={sampleAlbum.date}
				img={sampleAlbum.imgSrc}
			/>);

			albumTitle = wrapper.find('Title');
			albumReleaseDate = wrapper.find('ReleaseDate');
			albumImage = wrapper.find('Img');
		});

		it('album card has a title', () => {
			expect(albumTitle.length).toBe(1);
			expect(albumTitle.contains(sampleAlbum.title)).toEqual(true);
		});

		it('album card has a release year', () => {
			expect(albumReleaseDate.length).toBe(1);
			// expect(albumReleaseDate.contains(sampleAlbum.year)).toEqual(true);
		});

		it('album card has an Img component', () => {
			expect(albumImage.length).toBe(1);
		});
	});

	describe('no image provided', () => {
		beforeEach(() => {
			wrapper = shallow(<AlbumCard
				title={sampleAlbum.title}
				firstReleaseDate={sampleAlbum.date}
			/>);
			albumImage = wrapper.find('MissingImg');
		});

		it('album card has a MissingImg component', () => {
			expect(albumImage.length).toBe(1);
		});
	});
});
