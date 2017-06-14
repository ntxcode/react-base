import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const rootEl = document.getElementById('root');

// regular imports
ReactDOM.render(<App />, rootEl);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    ReactDOM.render(<App />, rootEl);
  });
}

registerServiceWorker();
