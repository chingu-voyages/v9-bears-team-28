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

class AdminVoyageView extends Component {
	componentWillMount() {
		if (!this.props.fetched) {
			this.props.voyageActions.getVoyages();
		}
    }
    
    deleteVoyage=async (voyage)=>{
        let id=voyage._id;
        try{
            await this.props.voyageActions.deleteVoyage(id);
            toast.success("Voyage deleted successfully",{autoClose:2000});
        }catch(err){
            console.log(err);
            toast.error("Error while deleting",{autoClose:2000});
        }
    }

	render() {
		const { errorFetching, fetched, voyages: dataFromProps } = this.props;
		const titles = ['Title', 'Start date', 'End date', 'Participation number', 'Actions'];
		if (!fetched) {
			return <Loading />;
		} else if (errorFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		}
		const tableTitles = titles.map((title, index) => <th key={index}>{title}</th>);

		// const actions=(

		// );

		const tableBody = dataFromProps.map((data, index) => {
			return (
				<tr key={index}>
					<td>{data.name||""}</td>
					<td>{data.startDate||"None specified"}</td>
					<td>{data.endDate||"None specified"}</td>
					<td>{data.participationNumber||"None"}</td>
					<td>
						{' '}
						<span onClick={this.editVoyage}><EditIcon /></span>
						<span onClick={()=>this.deleteVoyage(data)}><DeleteIcon /></span>
					</td>
				</tr>
			);
		});

		return (
			<div className="admin-voyage-view">
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
