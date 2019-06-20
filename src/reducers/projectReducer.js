//reducer for all projects-related
import * as ACTIONS from "../actions/actionTypes";

const projectReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.GET_PROJECTS:
			return {
				...state,
				projectList: action.payload
			};
		case ACTIONS.GET_PROJECTS_ERROR:
			return {
				...state,
				error:action.payload
			};
		default:
			return state;
	}
};

export default projectReducer;
