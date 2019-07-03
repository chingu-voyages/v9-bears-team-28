import React, { Component } from 'react';
import FormField from '../../Common/FormField/formField';
import DatePicker from '../../Common/DatePicker/datePicker';
import { UploadButton } from '../../Common/UploadButton/uploadButton';

class SprintAdd extends Component {
	state = {
		title: '',
		description: '',
		startDate: '',
		endDate: '',
	};
	setTitle = title => {
		this.setState({ title });
	};
	setDescription = description => {
		this.setState({ description });
	};
	setStartDate = startDate => {
		this.setState({ startDate });
	};
	setEndDate = endDate => {
		this.setState({ endDate });
	};
	render() {
		const { setTitle, setDescription, setStartDate, setEndDate } = this;
		const { title, description, startDate, endDate } = this.state;
		const { confirmAddSprint, submitted } = this.props;
		return (
			<div className="sprint-add">
				<h3 className="text-center mb-5">Add sprint</h3>
				<form>
					<FormField title="Sprint title" placeholder="title" type="text" value={title} onChange={setTitle} />
					<FormField
						title="Sprint description"
						placeholder="Info about the sprint"
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
						<UploadButton
							title="Update sprint"
							submittingTitle="Updating"
							submitted={submitted}
							onClick={() => confirmAddSprint(this.state)}
						/>
					</div>
				</form>
			</div>
		);
	}
}

// export default connect(mapStateToProps,mapActionsToProps)(SprintAdd);
export default SprintAdd;
