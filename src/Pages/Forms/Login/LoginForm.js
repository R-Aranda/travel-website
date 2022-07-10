import React, {useState} from 'react';
import './LoginForm.scss'
import errors from './Errors/loginErrors'
import { Link } from "react-router-dom"

const LoginForm = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const [validate, setValidate] = useState({})
    
    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.name]:event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setValidate(errors(inputs))
    }

    return ( 
        <div className="login-form-wrapper">
            <div>
                <form className="callout" onSubmit={handleSubmit}>
                    <h1 className="form-header">Login</h1>
                    <div className="form-input-wrapper">
                        <input 
                            type="text"
                            id="username"
                            className="login-form-input"
                            name="username"
                            placeholder="Enter your username"
                            value={inputs.username}
                            onChange={handleChange} 
                        />
                        <div className="error-message">{validate.username}</div>
                    </div>
                    <div className="form-input-wrapper">
                        <input 
                            type="password"
                            id="password"
                            className="login-form-input"
                            name="password"
                            placeholder="Enter your password"
                            value={inputs.password}
                            onChange={handleChange} 
                        />
                        <div className="error-message">{validate.password}</div>
                    </div>
                    <div className="login-form-btns-wrapper">
                        <button className="login-form-btn" type="submit">Submit</button>
                        <hr />
                        <button className="forgot-pw" type="">Forgot Password?</button>
                    </div>
                    <Link to="/register">
                        <div className="register-link">Register</div>
                    </Link>
                </form>
            </div>
        </div>
     );
}
 
export default LoginForm;