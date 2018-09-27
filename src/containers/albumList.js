import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAlbums } from '../actions/fetchAlbums';
import { PINK_FLOYD_ID } from '../config/graphbrainz';
import AlbumCard from '../components/albumCard';
import ErrorMsg from '../components/errorMsg';

export const AlbumList = class App extends Component {
	componentDidMount() {
		this.props.fetchAlbums({ id: PINK_FLOYD_ID });
	}

	render() {
		const isFetchInProgress = this.props.album.get('fetching');
		const isError = this.props.album.get('error');
		const albumData = this.props.album.get('data');
		let artistName = '';
		let albums = [];

		if (isError) {
			return <ErrorMsg msg={this.props.album.get('errorMsg')} />;
		}

		if (isFetchInProgress) {
			return <p>loading...</p>;
		}

		if (albumData.get('releaseGroups')) {
			artistName = albumData.get('name');
			albums = albumData.get('releaseGroups').edges;
		}

		return (
			<div>
				<h1>All Albums by {artistName}</h1>

				{albums.map(album => (
					<AlbumCard
						title={album.node.title}
						firstReleaseDate={album.node.firstReleaseDate}
						img={album.node.coverArtArchive.front}
						key={album.node.id}
					/>
				))}
			</div>
		);
	}
};

function mapStateToProps(album) {
	return { album };
}

function mapDispathcToProps(dispatch) {
	return bindActionCreators({ fetchAlbums }, dispatch);
}

export default connect(mapStateToProps, mapDispathcToProps)(AlbumList);