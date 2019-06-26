//reducer for all voyage-related
import * as ACTIONS from "../actions/actionTypes";

const voyageReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.LOADING_GET_VOYAGES:
			return{
				...state,
				fetched:false
			}
		case ACTIONS.GET_VOYAGES:
			return {
				...state,
				voyageList: action.payload,
				fetched:true
			};
		case ACTIONS.GET_VOYAGES_ERROR:
			return{
				...state,
				errorFetching:true,
				fetched:true
			}
		case ACTIONS.DELETE_VOYAGE:
			return{
				...state,
				voyageDeleting:false
			}
		case ACTIONS.LOADING_DELETE_VOYAGE:
			return{
				...state,
				voyageDeleting:true
			}
		case ACTIONS.ERROR_DELETE_VOYAGE:
			return{
				...state,
				voyageDeleting:true
			}
		case ACTIONS.GET_SINGLE_VOYAGE:
			console.log("Inside single voyage");
			return{
				...state,
				voyage:action.payload,
				single_voyage_fetched:true
			}
		case ACTIONS.GET_SINGLE_VOYAGE_ERROR:
			return{
				...state,
				single_voyage_fetched:true,
				errorFetching:true
			}
		case ACTIONS.GET_SINGLE_VOYAGE_LOADING:
			return{
				...state,
				single_voyage_fetched:false
			}
		case ACTIONS.EDIT_VOYAGE:
			return{
				...state,
				edit_fetched:true
			}
		case ACTIONS.EDIT_VOYAGE_ERROR:
			return{
				...state,
				edit_fetched:true,
				errorFetching:true
			}
		case ACTIONS.EDIT_VOYAGE_LOADING:
			return{
				...state,
				edit_fetched:false
			}
		default:
			return state;
	}
};

export default voyageReducer;
