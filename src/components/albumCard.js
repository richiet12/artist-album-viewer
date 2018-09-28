import React from 'react';
import styled from 'styled-components';
import Img from '../components/img';
import MissingImg from '../components/missingImg';
import { FONTSIZE_MEDIUM, COLOUR_PRIMARY } from '../styles/vars';

const Card = styled.li`
	border-bottom: 1px solid ${COLOUR_PRIMARY};
	margin: 40px auto 0;
	list-style: none;
	padding-bottom: 20px;
	text-align:center;
	width: 100%;

	@media (min-width: 400px) {
		width: 400px;
	}
`;

const Title = styled.h3`
	font-size: ${FONTSIZE_MEDIUM};
	margin-bottom: 10px;
`;
Title.displayName = 'Title';

const ReleaseDate = styled.small`
	display: block;
	font-size: 0.8em;
	margin-bottom: 20px;
`;
ReleaseDate.displayName = 'ReleaseDate';

const AlbumCard = (props) => {
	let albumImg = <MissingImg />;
	const releaseYear = (new Date(props.firstReleaseDate)).getFullYear() || '-';

	if (props.img) {
		albumImg = <Img src={props.img} alt={props.title} />;
	}

	return (
		<Card>
			<Title>{props.title}</Title>
			<ReleaseDate>{releaseYear}</ReleaseDate>
			{albumImg}
		</Card>
	);
};

export default AlbumCard;
