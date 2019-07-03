import React, { Component } from 'react';
import TicketCard from '../Common/TicketCard/ticketCard';
import { bindActionCreators } from 'redux';
import {connect} from "react-redux";
import * as ticketActions from "../../actions/ticketActions";
import './ticketsAdminView.scss';

// const tickets=[{
//     title:"Lizard",
//     description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
//     onHold:false
// }];

class TicketsAdminView extends Component {
	render() {
        const ticket_cards=this.props.tickets.map((ticket,index)=>(
            <TicketCard key={index} title={ticket.title} description={ticket.description} onHold={ticket.onHold} />
        ));
		return (
			<div className="tickets-admin-view">
				{ticket_cards}
			</div>
		);
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

