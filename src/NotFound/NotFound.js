import React from "react";
import "./Notfound.css";
import errorImg from "../images/404.png";

const NotFound = () => {
	return (
		<div className="container  mt-3   ">
			<img className="w-100" src={errorImg} alt="" />
		</div>
	);
};

export default NotFound;
