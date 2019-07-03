import React, { Component } from 'react';
import FormField from '../../Common/FormField/formField';
import DatePicker from '../../Common/DatePicker/datePicker';
import { UploadButton } from '../../Common/UploadButton/uploadButton';
import Select from 'react-select';

class EditSprint extends Component {
	state = {
		options: [],
		allSprints: [],
		selectedOption: { value: 0 },
	};
	componentWillMount() {
		const sprints = this.props.project.sprints;
		let options = [],
			allSprints = [];
		let index = 0;
		sprints.map(sprint => {
			if (sprint) {
				options.push({ label: sprint.title, value: index });
				allSprints.push(sprint);
				index++;
			}
		});
		let selectedOption = options[0];
		let { title, description, startDate, endDate } = allSprints[selectedOption.value];
		this.setState({ allSprints, options, selectedOption, title, description, startDate, endDate });
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
	handleSubmit=()=>{
		const { title, description, startDate, endDate, allSprints, selectedOption } = this.state;
		let sprint = { title, description, startDate, endDate };
		let index = selectedOption.value;
		allSprints[index] = sprint;
		this.setState({allSprints});
		this.props.confirmEditSprint(allSprints);
	}
	handleChange = selectedOption => {
		console.log('Handle change called');
		const { title, description, startDate, endDate, allSprints, selectedOption: prevOption } = this.state;
		let sprint = { title, description, startDate, endDate };
		let prevIndex = prevOption.value;
		allSprints[prevIndex] = sprint;
		let {
			title: newTitle,
			startDate: newStartDate,
			startDate: newEndDate,
			description: newDescription,
		} = allSprints[selectedOption.value];
		this.setState(
			{
				selectedOption,
				allSprints,
				title: newTitle,
				description: newDescription,
				startDate: newStartDate,
				endDate: newEndDate,
			},
			() => {
				console.log(this.state);
			}
		);
	};
	render() {
		const { setTitle, setDescription, setStartDate, setEndDate } = this;
		const { submitted } = this.props;
		const { options, selectedOption } = this.state;
		const { title, startDate, endDate, description } = this.state;
		console.log(this.state);
		return (
			<div className="sprint-add">
				<h3 className="text-center mb-5">Edit sprint</h3>
				<form>
					<Select value={selectedOption} onChange={this.handleChange} options={options} />
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
							onClick={() => this.handleSubmit()}
						/>
					</div>
				</form>
			</div>
		);
	}
}

// export default connect(mapStateToProps,mapActionsToProps)(SprintAdd);
export default EditSprint;
