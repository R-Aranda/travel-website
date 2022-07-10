import React, { useState } from "react";
import "./RegisterForm.scss"
import errors from "./Errors/registerErrors"
import { Link } from "react-router-dom"

const RegisterForm = (props) => {

	const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
		confirmPassword: ""
	})

	const [validate, setValidate] = useState({})
	const [tallForm, setTallForm] = useState(false)

	let formClass = "form-wrapper"

	if(tallForm) {
		formClass = "tall-form-wrapper"
	}

	const handleChange = (event) => { 
		setInputs({
			...inputs,
			[event.target.name]:event.target.value
		})
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		setValidate(errors(inputs))
		if(tallForm) {
			return
		} else {
			setTallForm(!tallForm)
		}

		if(!errors(inputs)) {
			setTallForm(tallForm)
		}

	
	}

  return ( 
    <div>
      <div className={formClass}>
		<div>
			<form className="callout" onSubmit={handleSubmit}>
				<h1 className="form-header">Register</h1>
				<div className="form-input-wrapper">
					<input 
						type="text"
						id="username"
						className="form-input"
						name="username"
						placeholder="Enter your username"
						value={inputs.username}
						onChange={handleChange}
					/>
					<div className="error-message">{validate.username}</div>
				</div>
				<div className="form-input-wrapper">
					<input 
						type="text"
						id="email"
						className="form-input"
						name="email"
						placeholder="Enter your email"
						value={inputs.email}
						onChange={handleChange}
					/>
					<div className="error-message">{validate.email}</div>
				</div>
				<div className="form-input-wrapper">
					<input 
						type="password"
						id="password"
						className="form-input"
						name="password"
						placeholder="Enter your password"
						value={inputs.password}
						onChange={handleChange}
					/>
					<div className="error-message">{validate.password}</div>
				</div>
				<div className="form-input-wrapper">
					<input 
							type="password"
							id="confirmPassword"
							className="form-input"
							name="confirmPassword"
							placeholder="Confirm your password"
							value={inputs.confirmPassword}
							onChange={handleChange}
					/>
					<div className="error-message">{validate.confirmPassword}</div>
				</div>
				<div className="form-btns-wrapper">
					<button className="form-btn" type="submit">Submit</button>
					<hr ></hr>
					<Link to="/login">
						<button className="form-login" type="signup">Login</button>
					</Link>
				</div>
			</form>
		</div>      
      </div>
  	</div>
  );
}
 
export default RegisterForm;