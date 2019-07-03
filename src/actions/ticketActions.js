import axios from 'axios';
import * as ACTIONS from './actionTypes';
import { API_URL } from '../constants/constant';

export const addTicket = (ticket) => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.ADD_TICKET_LOADING,
		});
		const resp = await axios.post(API_URL + '/tickets/', ticket);
		console.log(resp);
		dispatch({
			type: ACTIONS.ADD_TICKET,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.ADD_TICKET_ERROR,
			payload: err,
		});
	}
};