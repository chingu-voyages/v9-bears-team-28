import React, { Component } from 'react';
import TicketCard from '../Common/TicketCard/ticketCard';
import './ticketsAdminView.scss';

const tickets=[{
    title:"Lizard",
    description:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
    onHold:false
}];

const ticket_cards=tickets.map((ticket,index)=>(
    <TicketCard key={index} title={ticket.title} description={ticket.description} onHold={ticket.onHold} />
));

class TicketsAdminView extends Component {
	render() {
		return (
			<div className="tickets-admin-view">
				{ticket_cards}
			</div>
		);
	}
}

export default TicketsAdminView;
