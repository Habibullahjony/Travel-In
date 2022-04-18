import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import "./Register.css";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [createUserWithEmailAndPassword, user, , error] =
		useCreateUserWithEmailAndPassword(auth);

	const Navigate = useNavigate();
	useEffect(() => {
		if (user) {
			console.log(user);
			Navigate("/home");
		}
	}, [user]);

	let Error;
	if (error) {
		Error = <p>Error: {error.message}</p>;
	}
	const handleForm = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(email, password);
	};
	return (
		<div className="container  mt-4">
			<h2 className="text-center">Register</h2>
			<Form onSubmit={handleForm} className=" mt-5 w-75 mx-auto ">
				{/* <Form.Group className="mb-3" controlId="formBasicName">
					<Form.Control type="text" placeholder="Enter your name" required />
				</Form.Group> */}
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
				<p>
					Alredy Travel In? <Link to="/login">Log in!</Link>
				</p>
				<div className="text-danger text-center">{Error}</div>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
			<SocialLogin></SocialLogin>
		</div>
	);
};

export default Register;
