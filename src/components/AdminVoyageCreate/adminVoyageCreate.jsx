import React, { useState } from 'react';
import FormField from '../Common/FormField/formField';
import DatePicker from '../Common/DatePicker/datePicker';
import './adminVoyageCreate.css';
import { API_URL } from '../../constants/constant';
import { toast } from 'react-toastify';
import Axios from 'axios';

function validateForm(name, description) {
	return name && description ? true : false;
}

export default function AdminVoyageCreate() {
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const submitVoyageForm = async event => {
		event.preventDefault();
		const valid = validateForm(name, description);
		if (valid) {
			let state = { name, description, startDate, endDate };
			try {
				const resp = await Axios.post(API_URL + '/voyages',  state );
				console.log(resp);
				toast.success('Voyage created successfully', { autoClose: 2000 });
			} catch (err) {
				console.log(err);
				toast.error('Error creating voyage', { autoClose: 2000 });
			}
		} else {
			console.log('Invalid value');
			console.log({ name, description, startDate, endDate });
		}
	};

	return (
		<div className="admin-voyage-create">
			<div className="card create-voyage-card">
				<h3 className="text-center mb-5">Create voyage</h3>
				<form className="create-voyage-form" onSubmit={submitVoyageForm}>
					<FormField title="Voyage title" placeholder="title" type="text" value={name} onChange={setName} />
					<FormField
						title="Voyage description"
						placeholder="Info about the voyage"
						type="text"
						value={description}
						onChange={setDescription}
					/>
					<FormField
						title="Start date"
						customComponent={<DatePicker value={startDate} onChange={setStartDate} />}
					/>
					<FormField
						title="End date"
						customComponent={<DatePicker value={endDate} onChange={setEndDate} />}
					/>
					<div className="col-xs-10 col-md-5 col-lg-2 btn-lg button-center">
						<button type="submit" className="btn btn-primary btn-block btn-oval">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
