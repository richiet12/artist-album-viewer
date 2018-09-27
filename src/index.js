import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import { COLOUR_PRIMARY, COLOUR_SECONDARY } from './styles/vars';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// eslint-disable-next-line
injectGlobal`
	body {
		background-color: ${COLOUR_SECONDARY};
		color: ${COLOUR_PRIMARY};
		font-family: sans-serif;
	}
`;
