import React from 'react';
import LoginForm from './LoginForm';
import './LoginPage.scss'

const LoginPage = () => {
    return ( 
        <div className="login-wrapper">
            <div className="login-form">
                <LoginForm />
            </div>
        </div>
     );
}
 
export default LoginPage;