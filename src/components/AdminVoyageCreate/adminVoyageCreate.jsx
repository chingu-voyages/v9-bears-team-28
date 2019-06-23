import React, { useState } from 'react';
import FormField from '../Common/FormField/formField';
import DatePicker from '../Common/DatePicker/datePicker';
import './adminVoyageCreate.css';

function validateForm(fields) {
	let { title, description } = fields;
	return title && description ? true : false;
}

export default function AdminVoyageCreate() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());

	const submitVoyageForm = event => {
		event.preventDefault();
		const valid = validateForm(title, description);
		if (valid) {
			console.log({ title, description, startDate, endDate });
		} else {
			console.log('Invalid value');
			console.log({ title, description, startDate, endDate });
		}
	};

	return (
		<div className="admin-voyage-create">
			<div className="card create-voyage-card">
				<h3 className="text-center mb-5">Create voyage</h3>
				<form className="create-voyage-form" onSubmit={submitVoyageForm}>
					<FormField title="Voyage title" placeholder="title" type="text" value={title} onChange={setTitle} />
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
