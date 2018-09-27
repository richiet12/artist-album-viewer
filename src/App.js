
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import albumsReducer from './reducers/albums';
import AlbumsContainer from './containers/albums';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export const App = () => (
	<Provider store={createStoreWithMiddleware(albumsReducer)}>
		<AlbumsContainer />
	</Provider>
);

export default App;
