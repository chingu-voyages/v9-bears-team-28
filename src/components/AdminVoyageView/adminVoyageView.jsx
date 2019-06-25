import React, { Component } from 'react';
import { connect } from 'react-redux';
import './adminVoyageView.scss';
import Loading from '../Common/Loading/loading';
import { ERROR_MESSAGE_VOYAGE_FETCHING } from '../../constants/constant';
import { bindActionCreators } from 'redux';
import * as voyageActions from '../../actions/voyageActions';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { toast } from 'react-toastify';
import CustomModal from '../Common/Modal/modal';
import { Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';

class AdminVoyageView extends Component {
	state = {
		isDeleteModalOpen: false,
		submitted: false,
	};
	componentWillMount() {
		if (!this.props.fetched) {
			this.props.voyageActions.getVoyages();
		}
	}

	openDeleteModal = data => {
		this.setState({ isDeleteModalOpen: true, data: data });
	};

	closeDeleteModal = () => {
		console.log("Clicked on delete modal")
		this.setState({ isDeleteModalOpen: false, data: null });
	};

	deleteVoyage = async () => {
		let id = this.state.data._id;
		try {
			this.setState({ submitted: true });
			await this.props.voyageActions.deleteVoyage(id);
			setTimeout(() => window.location.reload(), 2000);
		} catch (err) {
			console.log(err);
			toast.error('Error while deleting', { autoClose: 2000 });
		} finally {
			setTimeout(() => this.setState({ submitted: false, isDeleteModalOpen: false }), 1800);
		}
	};

	editVoyage=async ()=>{
		this.props.history.push("/admin/voyage-edit/");
	}

	render() {
		const { errorFetching, fetched, voyages: dataFromProps } = this.props;
		const { submitted, isDeleteModalOpen } = this.state;
		if (!fetched) {
			return <Loading />;
		} else if (errorFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		}
		const titles = ['Title', 'Start date', 'End date', 'Participation number', 'Actions'];

		const tableTitles = titles.map((title, index) => <th key={index}>{title}</th>);

		const customComponent = (
			<div className="modal-custom-component">
				<div className="description">Are you sure you want to delete this modal?</div>
				<Button variant="contained" color="primary" onClick={this.deleteVoyage} className="action-btn">
					{submitted ? (
						<span>
							Deleting
							<CircularProgress style={{marginLeft:"5px",width:25,height:25}} />
						</span>
					) : (
						'Confirm'
					)}
				</Button>
				<Button variant="contained" color="secondary" onClick={this.closeDeleteModal} className="action-btn">
					Cancel
				</Button>
			</div>
		);

		const tableBody = dataFromProps.map((data, index) => {
			let startDate=moment(data.startDate).format('MMMM Do YYYY');
			let endDate=moment(data.endDate).format('MMMM Do YYYY');
			return (
				<tr key={index}>
					<td>{data.name || ''}</td>
					<td>{startDate || 'None specified'}</td>
					<td>{endDate || 'None specified'}</td>
					<td>{data.participationNumber || 'None'}</td>
					<td>
						{' '}
						<span onClick={this.editVoyage}>
							<EditIcon />
						</span>
						<span onClick={() => this.openDeleteModal(data)}>
							<DeleteIcon />
						</span>
					</td>
				</tr>
			);
		});

		return (
			<div className="admin-voyage-view">
				<CustomModal
					title="Delete voyage?"
					isModalOpen={isDeleteModalOpen}
					closeModal={this.closeDeleteModal}
					customComponent={customComponent}
				/>
				<table className="table table-striped table-hover table-responsive-md admin-voyage-table">
					<thead>
						<tr>{tableTitles}</tr>
					</thead>
					<tbody>{tableBody}</tbody>
				</table>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		voyages: state.voyage.voyageList,
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
)(AdminVoyageView);
