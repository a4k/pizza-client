import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import configureStore from './configure_store';

import App from './components/app';
import './scss/app.scss';

const history = createBrowserHistory();
const initialState = window.INITIAL_REDUX_STATE;
const store = configureStore(history, initialState);

const Root = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
);

const node = document.getElementById('root');
const renderApplication = (): void => ReactDOM.render(<Root />, node);

renderApplication();

if (module.hot) {
  module.hot.accept('./components/app', renderApplication);
}
