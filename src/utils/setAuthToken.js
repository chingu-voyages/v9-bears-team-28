import axios from "axios";

const setAuthToken = token => {
	if (token) {
		//Applying authorization token to all requests if logged in
		axios.defaults.headers.common["Authorization"] = token;
	} else {
		//Delete auth header
		delete axios.defaults.headers.common["Authorization"];
	}
};

export default setAuthToken;
