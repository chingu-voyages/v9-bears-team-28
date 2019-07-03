import React, { Component } from 'react';
import TicketCard from '../Common/TicketCard/ticketCard';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ticketActions from '../../actions/ticketActions';
import './ticketsAdminView.scss';
import Loading from '../Common/Loading/loading';
import { ERROR_MESSAGE_VOYAGE_FETCHING } from '../../constants/constant';

function getStatus(onHold, accept, reject) {
	if (accept) {
		return 'Accept';
	} else if (onHold) {
		return 'On Hold';
	} else if (reject) {
		return 'Reject';
	} else {
		return 'Active';
	}
}

class TicketsAdminView extends Component {
	componentWillMount() {
		if (!this.props.ticketFeteched) {
			this.props.ticketActions.getTickets();
		}
	}

	onAccept = async ticket => {
		let id = ticket._id;
		await this.props.ticketActions.acceptTicket(id);
	};

	onHold = async ticket => {
		let id = ticket._id;
		await this.props.ticketActions.holdTicket(id);
	};

	onReject = async ticket => {
		let id = ticket._id;
		await this.props.ticketActions.rejectTicket(id);
	};

	activateTicket = async ticket => {
		let id = ticket._id;
		await this.props.ticketActions.activateTicket(id);
	};

	render() {
		const { tickets, ticketFeteched, ticketErrorInFetching } = this.props;
		if (!ticketFeteched) {
			return <Loading />;
		} else if (ticketErrorInFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		}
		const ticket_cards = tickets.map((ticket, index) => {
			let { onHold, accept, reject } = ticket;
			let status = getStatus(onHold, accept, reject);
			return (
				<TicketCard
					key={index}
					title={ticket.title}
					status={status}
					description={ticket.description}
					onHold={ticket.onHold}
					onAccept={this.onAccept}
					onReject={this.onReject}
					putOnHold={this.putOnHold}
					activateTicket={this.activateTicket}
				/>
			);
		});
		return <div className="tickets-admin-view">{ticket_cards}</div>;
	}
}

const mapStateToProps = state => {
	return {
		tickets: state.ticket.tickets,
		ticketFeteched: state.ticket.ticketFeteched,
		ticketErrorInFetching: state.ticket.ticketErrorInFetching,
	};
};

const mapActionsToProps = dispatch => {
	return {
		ticketActions: bindActionCreators(ticketActions, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(TicketsAdminView);
