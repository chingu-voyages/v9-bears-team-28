//reducer for all voyage-related
import * as ACTIONS from "../actions/actionTypes";

const voyageReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.GET_VOYAGES_LOADING:
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
		default:
			return state;
	}
};

export default voyageReducer;
