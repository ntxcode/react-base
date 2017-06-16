import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from 'utils/registerServiceWorker';
import App from 'App';
import 'assets/css/normalize.css';

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
