import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = () => {
	return (
		<div
			style={{ height: "400px" }}
			className="w-100 d-flex justify-content-center align-items-center"
		>
			<Spinner animation="border" variant="primary" />
		</div>
	);
};

export default Loader;
