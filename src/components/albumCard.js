import React from 'react';
import Img from '../components/img';
import MissingImg from '../components/missingImg';

const AlbumCard = (props) => {
	let albumImg = <MissingImg />;

	if (props.img) {
		albumImg = <Img src={props.img} alt={props.title} />;
	}

	return (
		<div>
			<p>{props.title}</p>
			<small>{props.firstReleaseDate}</small>
			{albumImg}
		</div>
	);
};

export default AlbumCard;
