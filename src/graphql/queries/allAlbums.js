export const operationName = 'AllAlbums';
export const query = `
query ${operationName}($artistId:MBID!) {
	lookup {
		artist(mbid: $artistId) {
			name
			releaseGroups(type: ALBUM) {
				edges {
					node {
						id
						title
						firstReleaseDate
						coverArtArchive {
							front
						}
					}
				}
			}
		}
	}
}
`;
