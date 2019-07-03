import axios from 'axios';
import * as ACTIONS from './actionTypes';
import { API_URL } from '../constants/constant';
import { toast } from 'react-toastify';

export const addTicket = ticket => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.ADD_TICKET_LOADING,
		});
		const resp = await axios.post(API_URL + '/tickets/', ticket);
		console.log(resp);
		toast.success('Ticket successfully submitted', { autoClose: 2000 });
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

export const getTickets = () => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.GET_TICKETS_LOADING,
		});
		const resp = await axios.get(API_URL + '/tickets/');
		console.log(resp);
		dispatch({
			type: ACTIONS.GET_TICKETS,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.GET_TICKETS_ERROR,
			payload: err,
		});
	}
};

export const acceptTicket = id => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET_LOADING,
		});
		const resp = await axios.put(API_URL + '/tickets/:id', { accept: true, onHold: false, reject: false });
		console.log(resp);
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET_ERROR,
			payload: err,
		});
	}
};

export const rejectTicket = (id) => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET_LOADING,
		});
		const resp = await axios.put(API_URL + '/tickets/:id', { accept: false, onHold: false, reject: true });
		console.log(resp);
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET_ERROR,
			payload: err,
		});
	}
};

export const holdTicket = (id) => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET_LOADING,
		});
		const resp = await axios.put(API_URL + '/tickets/:id', { accept: false, onHold: true, reject: false });
		console.log(resp);
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET_ERROR,
			payload: err,
		});
	}
};

export const reactivateTicket = (id) => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET_LOADING,
		});
		const resp = await axios.put(API_URL + '/tickets/:id', { accept: false, onHold: false, reject: false });
		console.log(resp);
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.ACTION_ON_TICKET_ERROR,
			payload: err,
		});
	}
};
