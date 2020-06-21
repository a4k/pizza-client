import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';

import './scss/app.scss';
import App from './components/app';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

const node = document.getElementById('root');
const renderApplication = (): void => ReactDOM.render(<Root />, node);

renderApplication();

if (module.hot) {
  module.hot.accept('./components/app', renderApplication);
}
