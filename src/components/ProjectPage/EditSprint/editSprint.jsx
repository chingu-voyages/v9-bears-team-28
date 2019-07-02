import React, { Component } from 'react';
import FormField from '../../Common/FormField/formField';
import DatePicker from '../../Common/DatePicker/datePicker';
import { UploadButton } from '../../Common/UploadButton/uploadButton';
import Select from 'react-select';

class EditSprint extends Component {
	state = {
		currentIndex: 0,
		options: [],
		allSprints:[]
	};
	componentWillMount() {
		const sprints = this.props.project.sprints;
		let options = [],
			allSprints = [];
		sprints.map((sprint, index) => {
			if (sprint) {
				options.push({ label: sprint.title, value: index });
				allSprints.push(sprint);
			}
		});
		this.setState({ allSprints, options });
	}
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
	handleChange = selectedOption => {
		this.setState({ selectedOption });
		console.log(`Option selected:`, selectedOption);
	};
	render() {
		const { setTitle, setDescription, setStartDate, setEndDate } = this;
		const { project, confirmEditSprint } = this.props;
		const { currentIndex, options, submitted, allSprints } = this.state;

		const { title, startDate, endDate, description } = allSprints[currentIndex];
		return (
			<div className="sprint-add">
				<h3 className="text-center mb-5">Edit sprint</h3>
				<form>
					<Select value={options[0]} onChange={this.handleChange} options={options} />
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
							onClick={() => confirmEditSprint(allSprints)}
						/>
					</div>
				</form>
			</div>
		);
	}
}

// export default connect(mapStateToProps,mapActionsToProps)(SprintAdd);
export default EditSprint;
