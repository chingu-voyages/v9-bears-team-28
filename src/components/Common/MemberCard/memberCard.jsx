import React, { Component } from 'react';
import './memberCard.css';

class MemberCard extends Component {
	render() {
		const { name, role, imageUrl, info } = this.props;
		return (
			<div className="member-card text-center">
				<img src={imageUrl} alt="pic" className="member-pic"/>
				<p><small>{role}</small></p>
				<p>{name}</p>
				<p>{info}</p>
			</div>
		);
	}
}

export default MemberCard;
