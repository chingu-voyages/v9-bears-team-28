import React, { Component } from 'react';
import { connect } from 'react-redux';
import './adminVoyageView.scss';
import Loading from '../Common/Loading/loading';
import { ERROR_MESSAGE_VOYAGE_FETCHING } from '../../constants/constant';
import { bindActionCreators } from 'redux';
import * as voyageActions from '../../actions/voyageActions';

class AdminVoyageView extends Component {
	componentWillMount() {
		if (!this.props.fetched) {
			this.props.voyageActions.getVoyages();
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
		// const dataFromProps = [
		// 	['Voyage-1', '27th March, 2019', '30th April, 2019', '100', 'Actions here'],
		// 	['Voyage-1', '27th March, 2019', '30th April, 2019', '100', 'Actions here'],
		// 	['Voyage-1', '27th March, 2019', '30th April, 2019', '100', 'Actions here'],
		// 	['Voyage-1', '27th March, 2019', '30th April, 2019', '100', 'Actions here'],
		// ];
		const tableTitles = titles.map((title, index) => <th key={index}>{title}</th>);
		console.log(dataFromProps);
		const tableBody = dataFromProps.map((data, index) => {
			return (
				<tr key={index}>
					<td>{data.name}</td>
					<td>{data.startDate}</td>
					<td>{data.endDate}</td>
					<td>{data.participationNumber}</td>
                    <td>Actions will go here</td>
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
