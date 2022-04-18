import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<>
			<h3 className="text-center mt-3">Our Services</h3>
			<div
				id="services"
				className="container mx-auto mt-3 row row-cols-1 row-cols-md-3 g-4"
			>
				{services.map((service) => (
					<Service key={service.id} service={service}></Service>
				))}
			</div>
		</>
	);
};

export default Services;
