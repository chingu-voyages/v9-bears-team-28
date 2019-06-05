import React, { Component } from 'react';
import DataCard from '../DataCard/dataCard';

class CardView extends Component {
	render() {
		return (
			<div className="card-view-wrapper">
				This is card view
				<DataCard
					title="Project Scope Management"
					description="Project Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped. "
                    image_location="https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg"
				/>
			</div>
		);
	}
}

export default CardView;
