import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const SocialLogin = () => {
	const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
	let Error;
	if (error) {
		Error = <p>Error: {error.message}</p>;
	}
	return (
		<div>
			<div className="text-danger text-center">{Error}</div>
			<button
				onClick={() => signInWithGoogle()}
				className="btn btn-primary w-50  d-flex mx-auto my-2"
			>
				<div className="d-flex mx-auto ">
					{/* <img alt="" /> */}
					<h5 className="mb-0 ms-3">google login </h5>
				</div>
			</button>
		</div>
	);
};

export default SocialLogin;
