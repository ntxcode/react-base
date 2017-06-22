import React, { Component } from 'react';
import FormCard from 'components/ui/FormCard';
import AuthPage from 'scenes/Auth/components/AuthPage';
import ForgotForm from './ForgotForm';

class ForgotPage extends Component {
  submit = values => {
    // print the form values to the console
    console.log(values);
  };
  render() {
    return (
      <AuthPage title="Page Title">
        <FormCard title="Forgot your password?">
          <ForgotForm onSubmit={this.submit} />
        </FormCard>
      </AuthPage>
    );
  }
}

export default ForgotPage;
