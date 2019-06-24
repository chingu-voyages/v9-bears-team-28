import axios from 'axios';
import * as ACTIONS from './actionTypes';
import { toast } from 'react-toastify';
import { API_URL } from '../constants/constant';

export const getVoyages = () => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.LOADING_GET_VOYAGES,
		});
		const resp = await axios.get(API_URL + '/voyages');
		console.log(resp);
		dispatch({
			type: ACTIONS.GET_VOYAGES,
			payload: resp.data,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.GET_VOYAGES_ERROR,
			payload: err,
		});
		toast.error('Something went wrong. Please try again later.');
	}
};

export const deleteVoyage = id => async dispatch => {
	try {
		dispatch({
			type: ACTIONS.LOADING_DELETE_VOYAGE,
		});
		const resp = await axios.delete(API_URL + '/voyages/' + id);
		console.log(resp);
		dispatch({
			type: ACTIONS.DELETE_VOYAGE,
		});
	} catch (err) {
		console.log(err);
		dispatch({
			type: ACTIONS.ERROR_DELETE_VOYAGE,
			payload: err,
		});
		toast.error('Something went wrong. Please try again later.', { autoClose: 2000 });
	}
};
