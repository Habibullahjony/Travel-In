import React, { useState } from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loader from "../../Shared/Spinner/Spinner";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();
	const [signInWithEmailAndPassword, user, loading, error] =
		useSignInWithEmailAndPassword(auth);
	if (user) {
		navigate("/home");
	}
	let Load;
	if (loading) {
		return <Loader></Loader>;
	}
	const handleForm = (e) => {
		e.preventDefault();
		signInWithEmailAndPassword(email, password);
	};
	return (
		<div className="container  mt-4">
			<h2 className="text-center">Log in</h2>
			<Form onSubmit={handleForm} className=" mt-5 w-75 mx-auto ">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control
						onBlur={(e) => setEmail(e.target.value)}
						type="email"
						placeholder="Enter email"
						required
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Control
						onBlur={(e) => setPassword(e.target.value)}
						type="current-password"
						placeholder="Password"
						required
					/>
				</Form.Group>

				{/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Check me out" />
				</Form.Group> */}
				<p>
					New to Travel In? <Link to="/register">Register!</Link>
				</p>
				<p>
					Forget password?{" "}
					<span className="text-primary cursor">Reset password</span>
				</p>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
			<SocialLogin></SocialLogin>
		</div>
	);
};

export default Login;
