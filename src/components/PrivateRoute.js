import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Auth from 'utils/Auth/Auth';

const PrivateRoute = ({ component: Component, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      Auth.isAuthenticated
        ? <Component {...props} />
        : <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location }
            }}
          />}
  />;

export default PrivateRoute;
