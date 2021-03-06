/* eslint-disable  jsx-a11y/heading-has-content */

import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import Img from './img';

Enzyme.configure({ adapter: new Adapter() });

describe('Image', () => {
	let wrapper;

	describe('src and alt text provided', () => {
		beforeEach(() => {
			const src = 'image.jpg';
			const altText = 'alt Text';
			wrapper = shallow(<Img src={src} alt={altText} />);
		});

		it('renders img', () => {
			// todo improve this test to check src and alt attributes are present
			const imgElement = 'Img';
			expect(wrapper.find(imgElement).length).toBe(1);
		});
	});
});
