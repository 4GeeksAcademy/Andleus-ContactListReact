import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop.js";

import { Home } from "./views/Home.jsx";
import { Demo } from "./views/Demo.jsx";
import { Single } from "./views/Single.jsx";
import injectContext from "./store/appContext.js";

import { Navbar } from "./component/Navbar.jsx";
import { Footer } from "./component/Footer.jsx";
import { CreateUser } from "./component/CreateUser.jsx";
import { GetTasks } from "./views/GetUsers.jsx";
import { Contactlist } from "./views/ContactList.jsx";


//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<h1>REVELIO</h1>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					< Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contactList" element={<Contactlist />}/>
						<Route path="/createUser" element={<CreateUser />} />
						<Route path="/getTasks" element={<GetTasks />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
