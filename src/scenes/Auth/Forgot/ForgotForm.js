import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import InputGroup from 'components/ui/InputGroup';
import Button from 'components/ui/Button';
import './ForgotForm.css';

let ForgotForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="ForgotForm">
      <InputGroup
        name="email"
        label="E-mail"
        type="email"
        placeholder="Inform your e-mail"
      />
      <Button type="ButtonPrimary">Email me</Button>
      <Link to="/login">Back to login</Link>
    </form>
  );
};

ForgotForm = reduxForm({
  form: 'forgot',
  fields: ['email']
})(ForgotForm);

export default ForgotForm;
