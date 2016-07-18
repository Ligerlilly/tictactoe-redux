import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import reducer from './redux/reducer';
import thunk from 'redux-thunk';
import Main from './components/Main';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(reducer);
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const routes = (
  <Router history={appHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main} />
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
