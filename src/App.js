import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import PrivateRoute from 'modules/common/PrivateRoute';
import HomePage from 'scenes/Home/HomePage';
import LoginPage from 'scenes/Auth/Login/LoginPage';

const history = createBrowserHistory();

const App = () =>
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
    </Switch>
  </Router>;

export default App;
