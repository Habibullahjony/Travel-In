import { Route, Routes } from "react-router-dom";
import "./App.css";
import CheckOut from "./CheckOut/Checkout";
import NotFound from "./NotFound/NotFound";
import About from "./pages/About/About";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Footer from "./pages/Shared/Footer/Footer";
import Header from "./pages/Shared/Header/Header";

function App() {
	return (
		<>
			<Header></Header>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route
					path="/checkout"
					element={
						<RequireAuth>
							<CheckOut />
						</RequireAuth>
					}
				/>

				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<NotFound></NotFound>} />
			</Routes>
			<Footer></Footer>
		</>
	);
}

export default App;
