import React from "react";
import Landing from "./layout/Landing";
import NavBar from "./layout/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";

import { Provider } from "react-redux";
import store from "../store/store";

function App() {
	return (
		<Provider store = {store}>
			<Router>
				<div className="App">
					<NavBar />
					<Route exact path="/" component={Landing} />
					<Route path="/signup" component={Signup} />
					<Route path="/login" component={Login} />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
