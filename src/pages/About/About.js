import React from "react";
import "./About.css";
import myImg from "../../images/my-img.png";

const About = () => {
	return (
		<div className="container border border-dark mt-3 d-flex justify-content-center align-items-center ">
			<img
				className="rounded-pill"
				style={{ width: "300px", height: "" }}
				src={myImg}
				alt=""
			/>
			<div className="ms-5">
				<h2>Habibullah Jony</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
					deleniti earum, iste beatae odit iusto soluta natus sequi odio facere
					dolore excepturi eaque dolorem quas eos consectetur fugit ex et esse
					ratione. Laudantium voluptates necessitatibus maxime accusantium quam
					molestias nemo! Distinctio blanditiis ullam voluptas quasi, laborum
					eligendi vitae debitis ex.
				</p>
			</div>
		</div>
	);
};

export default About;
