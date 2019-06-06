import React, { Component } from 'react';
import DataCard from '../DataCard/dataCard';
import Grid from '@material-ui/core/Grid';

class CardView extends Component {
	render() {
		return (
			<div className="card-view-wrapper">
				<Grid container spacing={24}>
					<Grid item md={4}>
						<DataCard
							description="Project Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped. "
							image_location="https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg"
						/>
					</Grid>
					<Grid item md={4}>
						<DataCard
							description="Project Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped. "
							image_location="https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg"
						/>
					</Grid>
					<Grid item md={4}>
						<DataCard
							description="Project Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped. "
							image_location="https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg"
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default CardView;
