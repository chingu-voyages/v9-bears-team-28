//reducer for all voyage-related
import * as ACTIONS from "../actions/actionTypes";

const ticketReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.ADD_TICKET_LOADING:
			return{
				...state,
				ticketFeteched:false
			}
		case ACTIONS.ADD_TICKET:
			return {
				...state,
				ticket: action.payload,
				ticketFeteched:true
			};
		case ACTIONS.ADD_TICKET_ERROR:
			return{
				...state,
				ticketErrorInFetching:true,
				ticketFeteched:true
			}
		case ACTIONS.GET_TICKETS_LOADING:
			return{
				...state,
				ticketFeteched:false
			}
		case ACTIONS.GET_TICKETS:
			return {
				...state,
				ticket: action.payload,
				ticketFeteched:true
			};
		case ACTIONS.GET_TICKETS_ERROR:
			return{
				...state,
				ticketErrorInFetching:true,
				ticketFeteched:true
			}
		default:
			return state;
	}
};

export default ticketReducer;
