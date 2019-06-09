//reducer for all activity-related
import * as ACTIONS from "../actions/actionTypes";

const projectReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.GET_PROJECTS:
			return {
				...state,
				projectList: action.payload
			};
		default:
			return state;
	}
};

export default projectReducer;
