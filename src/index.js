import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from 'utils/registerServiceWorker';
import App from 'App';
import 'assets/css/normalize.css';
import 'assets/css/elements.css';
import configureStore from './store';

const rootEl = document.getElementById('root');
const store = configureStore();

const renderApp = Component =>
  render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootEl
  );

renderApp(App);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderApp(NextApp);
  });
}

registerServiceWorker();
