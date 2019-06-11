import { GET_ERRORS } from "../actions/types";
import initialState from "../store/initialState";
export default (state = initialState.errors, action) => {
	switch (action.type) {
		case GET_ERRORS:
			return action.payload;
		default:
			return state;
	}
};
