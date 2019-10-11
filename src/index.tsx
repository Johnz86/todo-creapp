import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import './index.css';
import Home from './pages/home';
import { register } from './serviceWorker';
import configureStore, { history } from './store';

ReactDOM.render(
  <Provider store={configureStore}>
    <ConnectedRouter history={history}>
      <Home />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
register();
