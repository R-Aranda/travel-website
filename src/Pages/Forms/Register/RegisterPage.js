import React from 'react';
import './RegisterPage.scss';
import RegisterForm from './RegisterForm';
import RegisterWindow from './RegisterWindow';


const RegisterPage = () => {
  return ( 
    <div className="register-wrapper">
      <div className="register-window">
      <RegisterWindow />
      </div>
      <div className="register-form">
        <RegisterForm />
      </div>
    </div>
   );
}
 
export default RegisterPage;