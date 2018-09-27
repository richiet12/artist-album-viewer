import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
	height: 200px;
	width: 200px;
	object-fit: cover;
`;
Image.displayName = 'Img';

const Img = props => (
	<Image src={props.src} alt={props.alt} />
);

export default Img;
