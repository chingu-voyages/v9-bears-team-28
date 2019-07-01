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
		case ACTIONS.GET_SINGLE_PROJECT_LOADING:
			return{
				...state,
				projectFeteched:false
			}
		case ACTIONS.GET_SINGLE_PROJECT:
			return{
				...state,
				projectFeteched:true,
				project:action.payload
			}
		case ACTIONS.GET_SINGLE_PROJECT_ERROR:
			return{
				...state,
				projectFeteched:true,
				projectErrorInFetching:true
			}
		default:
			return state;
	}
};

export default projectReducer;
