import React from "react";
import "./Login.css";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
	return (
		<div className="container  mt-4">
			<h2 className="text-center">Log in</h2>
			<Form className=" mt-5 w-75 mx-auto ">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Control type="email" placeholder="Enter email" required />
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Control
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
		</div>
	);
};

export default Login;
