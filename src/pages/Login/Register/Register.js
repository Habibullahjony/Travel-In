import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
	return (
		<div className="container  mt-4">
			<h2 className="text-center">Register</h2>
			<Form className=" mt-5 w-75 mx-auto ">
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Control type="text" placeholder="Enter your name" required />
				</Form.Group>
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
					Alredy Travel In? <Link to="/login">Log in!</Link>
				</p>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</div>
	);
};

export default Register;
