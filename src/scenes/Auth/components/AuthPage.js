import React from 'react';
import './AuthPage.css';

const AuthPage = props =>
  <div className="AuthPage">
    <header>
      <h1 className="AuthPageTitle">{props.title}</h1>
    </header>
    {props.children}
  </div>;

export default AuthPage;
