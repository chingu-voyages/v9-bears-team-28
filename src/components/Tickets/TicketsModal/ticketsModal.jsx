import React, { Component } from 'react';
import FormField from '../../Common/FormField/formField';
import { UploadButton } from '../../Common/UploadButton/uploadButton';

class TicketModal extends Component {
	state = {
		title: '',
		description: '',
	};
	setTitle = title => {
		this.setState({ title });
	};
	setDescription = description => {
		this.setState({ description });
	};
	render() {
		const { setTitle, setDescription } = this;
		const { title, description } = this.state;
		const { addTicket, submitted } = this.props;
		return (
			<div className="sprint-add">
				<h3 className="text-center mb-5">Add sprint</h3>
				<form>
					<FormField title="Ticket title" placeholder="title" type="text" value={title} onChange={setTitle} />
					<FormField
						title="Ticket description"
						placeholder="Info about the ticket"
						type="text"
						value={description}
						onChange={setDescription}
					/>
					<div className="col-xs-10 col-md-5 col-lg-2 btn-lg button-center">
						<UploadButton
							title="Add ticket"
							submittingTitle="Adding"
							submitted={submitted}
							onClick={() => addTicket(this.state)}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default TicketModal;
