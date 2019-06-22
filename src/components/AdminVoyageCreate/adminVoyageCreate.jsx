import React from 'react';
import './adminVoyageCreate.css';
import FormField from '../Common/FormField/formField';
import DatePicker from '../Common/DatePicker/datePicker';
import { Button } from '@material-ui/core';

function submitVoyageForm() {}

export default function AdminVoyageCreate() {
	return (
		<div className="admin-voyage-create">
			<div className="card create-voyage-card">
				<form className="create-voyage-form" onSubmit={submitVoyageForm}>
					<FormField title="Voyage title" placeholder="title" type="text" />
					<FormField title="Voyage description" placeholder="Info about the voyage" type="text" />
					<FormField title="Start date" customComponent={<DatePicker />} />
					<FormField title="End date" customComponent={<DatePicker />} />
					<FormField
						title="Participation sheet"
						placeholder="Select file"
						type="file"
						classFromProps="form-control-file"
					/>
					<div className="col-xs-10 col-md-4 col-lg-2 btn-lg button-center">
						<button type="button" class="btn btn-primary btn-block">
							Submit
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
