
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import albumsReducer from './reducers/albums';
import AlbumList from './containers/albumList';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export const App = () => (
	<Provider store={createStoreWithMiddleware(albumsReducer)}>
		<AlbumList />
	</Provider>
);

export default App;
