import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import './teamPage.scss';

class TeamPage extends Component {
	render() {
		const TeamName = ({ name }) => (
			<div class="image-container">
				<img src="https://www.w3schools.com/howto/img_nature_wide.jpg" alt="Norway" style={{ width: '100%' }} />
				<div class="text-block">
					<h1>{name}</h1>
				</div>
			</div>
		);

		const Actions = () => (
			<div className="actions">
				<p>
					<EditIcon />
				</p>
			</div>
		);

		return (
			<div className="team-page">
				<TeamName name="Bears-team-28" />
				{/* <TeamActivity />
                <TeamProjects />
                <MeetTheTeam />
                <Actions /> */}
			</div>
		);
	}
}

export default TeamPage;
