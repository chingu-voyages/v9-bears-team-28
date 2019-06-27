import React, { Component } from 'react';
import ActivityCard from '../../Common/ActivityCard/activityCard';
import { Grid } from '@material-ui/core';

class TeamActivity extends Component {
	render() {
		return (
			<div className="activity-cards">
				<Grid container spacing={10}>
					<Grid item md={3}>
						<ActivityCard
							backgroundImage="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjO86LhhIfjAhUJdCsKHba9AIcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.omgubuntu.co.uk%2F2018%2F06%2Fmicrosoft-buying-github&psig=AOvVaw0uQ2Z629ux9_Np_klhQN5x&ust=1561634699567986"
							title="Github"
							status="95 commits"
						/>
					</Grid>
					<Grid item md={3}>
						<ActivityCard
							backgroundImage="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjO86LhhIfjAhUJdCsKHba9AIcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.omgubuntu.co.uk%2F2018%2F06%2Fmicrosoft-buying-github&psig=AOvVaw0uQ2Z629ux9_Np_klhQN5x&ust=1561634699567986"
							title="Github"
							status="95 commits"
						/>
					</Grid>
					<Grid item md={3}>
						<ActivityCard
							backgroundImage="https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwjO86LhhIfjAhUJdCsKHba9AIcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.omgubuntu.co.uk%2F2018%2F06%2Fmicrosoft-buying-github&psig=AOvVaw0uQ2Z629ux9_Np_klhQN5x&ust=1561634699567986"
							title="Github"
							status="95 commits"
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default TeamActivity;
