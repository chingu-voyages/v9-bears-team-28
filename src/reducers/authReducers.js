import isEmpty from "is-empty";
import { USER_LOADING, SET_CURRENT_USER } from "../actions/types";
import initialState from "../store/initialState";

export default function(state = initialState.auth, action) {
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			};
		case USER_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
