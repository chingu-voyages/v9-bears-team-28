import React, { Component } from 'react';
import FormField from '../Common/FormField/formField';
import DatePicker from '../Common/DatePicker/datePicker';
import Loading from '../Common/Loading/loading';
import { ERROR_MESSAGE_VOYAGE_FETCHING } from '../../constants/constant';
import { bindActionCreators } from 'redux';
import * as voyageActions from '../../actions/voyageActions';
import { connect } from 'react-redux';

class AdminVoyageEdit extends Component {
	componentWillMount() {
        let id = this.props.match.params.id;
		this.props.voyageActions.getSingleVoyage(id);
	}
	updateName = event => {
		this.setState({ name: event.target.value });
	};
	updateDescription = event => {
		this.setState({ description: event.target.value });
	};
	updateStartDate = event => {
		this.setState({ startDate: event.target.value });
	};
	updateEndDate = event => {
		this.setState({ endDate: event.target.value });
	};
	render() {
        console.log(this.props);
		const { fetched, voyage, errorFetching } = this.props;
		if (!fetched) {
			return <Loading />;
		} else if (errorFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		}
		const { name, description, startDate, endDate } = voyage;
		const { updateDescription, updateEndDate, updateName, updateStartDate } = this;
		return (
			<div className="admin-voyage-create">
				<div className="card create-voyage-card">
					<h3 className="text-center mb-5">Create voyage</h3>
					<form className="create-voyage-form" onSubmit={this.submitVoyageForm}>
						<FormField
							title="Voyage title"
							placeholder="title"
							type="text"
							value={name}
							onChange={updateName}
						/>
						<FormField
							title="Voyage description"
							placeholder="Info about the voyage"
							type="text"
							value={description}
							onChange={updateDescription}
						/>
						<FormField
							title="Start date"
							customComponent={<DatePicker value={startDate} onChange={updateStartDate} />}
						/>
						<FormField
							title="End date"
							customComponent={<DatePicker value={endDate} onChange={updateEndDate} />}
						/>
						<div className="col-xs-10 col-md-5 col-lg-2 btn-lg button-center">
							<button type="submit" className="btn btn-primary btn-block btn-oval">
								Update
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
    console.log(state);
    return {
		voyage: state.voyage.voyage,
		errorFetching: state.voyage.errorFetching,
		fetched: state.voyage.fetched,
	};
};

const mapActionsToProps = dispatch => {
	return {
		voyageActions: bindActionCreators(voyageActions, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(AdminVoyageEdit);
