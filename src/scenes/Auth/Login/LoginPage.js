import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from 'utils/Auth/Auth';
import FormCard from 'components/ui/FormCard';
import AuthPage from 'scenes/Auth/components/AuthPage';
import LoginForm from './LoginForm';

class LoginPage extends Component {
  state = {
    redirectToReferrer: false
  };

  submit = values => {
    // print the form values to the console
    console.log(values);
  };

  login = () => {
    Auth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <AuthPage title="Page Title">
        <FormCard title="Login">
          <LoginForm onSubmit={this.submit} />
        </FormCard>
      </AuthPage>
    );
  }
}

LoginPage.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object
  }).isRequired
};

export default LoginPage;
