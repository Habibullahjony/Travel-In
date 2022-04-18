import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import logo from "../../../images/logo.png";

const Header = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="#home">
						{" "}
						<img
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt=""
						/>
						Travel In
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="#home">Home</Nav.Link>
							<Nav.Link href="#services">Services</Nav.Link>
							<Nav.Link href="#checkout">Check out</Nav.Link>
							<Nav.Link href="#blogs">Blogs</Nav.Link>
						</Nav>
						<Nav>
							<Nav.Link href="#about">About</Nav.Link>
							<Nav.Link eventKey={2} href="#memes">
								Dank memes
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default Header;
