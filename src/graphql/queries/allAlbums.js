export const operationName = 'AllAlbums';

// note: would like to order releaseGroups by firstReleaseDate
// but graphbrain does not support this

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
