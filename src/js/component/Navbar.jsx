import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light mb-3 py-4" style = {{background: "rgb(220, 95, 2)"}}>
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-3">To main menu</span>
			</Link>
			<div className="ml-auto">
				<Link to="/createUser">
					<button className="btn btn-primary me-4">Add a new contact</button>
				</Link>
				<Link to="/contactList">
					<button className="btn btn-primary me-4">My contacts</button>
				</Link>
			</div>
		</nav>
	);
};
