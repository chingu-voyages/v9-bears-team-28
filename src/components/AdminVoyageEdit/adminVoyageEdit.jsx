import React, { Component } from 'react';
import FormField from '../Common/FormField/formField';
import DatePicker from '../Common/DatePicker/datePicker';
import Loading from '../Common/Loading/loading';
import { ERROR_MESSAGE_VOYAGE_FETCHING } from '../../constants/constant';
import { bindActionCreators } from 'redux';
import * as voyageActions from '../../actions/voyageActions';
import { connect } from 'react-redux';
import { CircularProgress } from '@material-ui/core';

class AdminVoyageEdit extends Component {
	state = {
		name: '',
		desricption: '',
		startDate: '',
		endDate: '',
	};
	componentWillMount() {
		let id = this.props.match.params.id;
		this.props.voyageActions.getSingleVoyage(id);
	}
	componentWillReceiveProps(newProps) {
		const { single_voyage_fetched, voyage, errorFetching } = newProps;
		let prev_single_voyage_fetched=this.props.single_voyage_fetched;
		
		if (prev_single_voyage_fetched!==single_voyage_fetched&&single_voyage_fetched && !errorFetching) {
			const { name, description, startDate, endDate,_id } = voyage;
			this.setState({ name, description, startDate, endDate,_id });
		}
	}
	updateName = name => {
		this.setState({ name });
	};
	updateDescription = description => {
		this.setState({ description });
	};
	updateStartDate = startDate => {
		this.setState({ startDate });
	};
	updateEndDate = endDate => {
		this.setState({ endDate });
	};
	editVoyage = (event) => {
		event.preventDefault();
		const { name, description, startDate, endDate } = this.state;
		const data = { name, description, startDate, endDate };
		const id = this.state._id;
		this.setState({update_clicked:true});
		try {
			this.props.voyageActions.editVoyage(id, data);
			setTimeout(()=>{
				// this.props.history.push("/admin/view-voyages");
			},1800);
		} catch (err) {
			console.log(err);
		}
		finally{
			setTimeout(()=>{
				this.setState({update_clicked:false});
			},1500);
		}
	};
	render() {
		const { single_voyage_fetched, errorFetching } = this.props;
		if (!single_voyage_fetched) {
			return <Loading />;
		} else if (errorFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		}
		console.log(this.state);
		const { name, description, startDate, endDate,update_clicked } = this.state;
		const { updateDescription, updateEndDate, updateName, updateStartDate } = this;
		return (
			<div className="admin-voyage-create">
				<div className="card create-voyage-card">
					<h3 className="text-center mb-5">Edit voyage</h3>
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
							<button
								type="submit"
								className="btn btn-primary btn-block btn-oval"
								onClick={(event) => this.editVoyage(event)}
							>
								{update_clicked ? (
									<span>
										Updating
										<CircularProgress style={{ marginLeft: '5px', width: 25, height: 25 }} />
									</span>
								) : (
									'Update'
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		voyage: state.voyage.voyage,
		errorFetching: state.voyage.errorFetching,
		edit_fetched: state.voyage.edit_fetched,
		single_voyage_fetched: state.voyage.single_voyage_fetched,
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
