import React from "react";
import "./Service.css";

const Service = ({ service }) => {
	const { name, price, image, description } = service;
	return (
		<>
			<div className="col">
				<div className="card h-100">
					<img src={image} alt="..." />
					<div className="card-body">
						<h5 className="service-title">{name}</h5>
						<h5 className="service-price">{price}</h5>
						<p className="service-description">{description}</p>
					</div>
					<div className="card-footer">
						<button className="btn btn-primary w-100">check out</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Service;
