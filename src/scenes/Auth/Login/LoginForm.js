import React from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import InputGroup from 'components/ui/InputGroup';
import Button from 'components/ui/Button';
import './LoginForm.css';

let LoginForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit} className="LoginForm">
      <InputGroup
        name="email"
        label="E-mail"
        type="email"
        placeholder="Inform your e-mail"
      />
      <InputGroup
        name="password"
        label="Password:"
        type="password"
        placeholder="Inform your password"
      />
      <Button type="ButtonPrimary">Login</Button>
      <Link to="/forgot">Forgot your password?</Link>
    </form>
  );
};

LoginForm = reduxForm({
  form: 'login',
  fields: ['email', 'password']
})(LoginForm);

export default LoginForm;
