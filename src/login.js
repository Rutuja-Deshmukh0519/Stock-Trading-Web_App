import React, {useState} from 'react'
import {login} from './auth'
import logo from './static/logo.png';
import { Redirect } from 'react-router';
import { useHistory } from 'react-router-dom';

const Login = () => {
	let history = useHistory();
	const [form,setForm] = useState({
		email:'',
		password:'',
		error:''
	})
	const handleSubmit = async(e)=>{
		e.preventDefault();
		let a = await login(form);
		console.log(a);
		if(typeof a !== "undefined") {
			console.log('Logged in')
			history.push('/Trial')
		}
		else {
			setForm({email:'', password:'', error: "Invalid Email or Password!"});
		}
		console.log(e);
	}
	return (
		<div>
			<head>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
				<title>Sign In</title>
				<link rel="stylesheet" href="login.css"></link>
			</head>
				<body className="no-scrl">
					<div className="container1 bg">
						<div className="forms-container">
							<div className="signin">
								<form className="sign-in-form" onSubmit={handleSubmit}>
									<h2 className="title">Sign In</h2>
									<div className="input-field">
										<i className="fas fa-envelope"></i>
										<input type="email" placeholder="Email Address" onChange={(e) => setForm({...form, email: e.target.value})}/>
									</div>
									<div className="input-field">
										<i className="fas fa-lock"></i>
										<input type="password" placeholder="Password" onChange={(e) =>setForm({...form, password: e.target.value})}/>
									</div>
									<button class="btn1 solid">Login</button>
									<p className="style1">{form.error}</p>
								</form>
							</div>
						</div>
						<div className="panels-container">
							<div className="panel left-panel">
								<div className="content">
									<img src={logo} alt="logo-image" className="image" />
									<h1 class="size">TradeX</h1>
									<p>It Does Exactly What it says on the Trading Platform</p>
								</div>
							</div>
						</div>
					</div>
				</body>
		</div>
	)
}

export default Login;
