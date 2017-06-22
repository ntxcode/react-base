import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import PrivateRoute from 'components/PrivateRoute';
import HomePage from 'scenes/Home/HomePage';
import LoginPage from 'scenes/Auth/Login/LoginPage';
import ForgotPage from 'scenes/Auth/Forgot/ForgotPage';

const history = createBrowserHistory();

const App = () =>
  <Router history={history}>
    <Switch>
      <PrivateRoute exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/forgot" component={ForgotPage} />
    </Switch>
  </Router>;

export default App;
