//reducer for all voyage-related
import * as ACTIONS from "../actions/actionTypes";

const voyageReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.GET_VOYAGES:
			return {
				...state,
				voyageList: action.payload
			};
		default:
			return state;
	}
};

export default voyageReducer;
