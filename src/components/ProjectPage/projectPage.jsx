import React, { Component } from 'react';
import MemberCard from '../Common/MemberCard/memberCard';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import ActivityTimeline from './ActivityTimeline/activityTimeline';
import ProjectLog from './ProjectLog/projectLog';
import AdditionalInfo from './AdditionalInfo/additionalInfo';
import Heading from '../Common/Heading/heading';
import './projectPage.scss';
import Comments from './Comments/comments';
import SymbolCard from '../Common/SymbolCard/symbolCard';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';

const TeamMembers = ({ members }) => {
	const allMembers = members.map((member, index) => (
		<Grid item md={4}>
			<MemberCard
				key={index}
				name={member.name}
				role={member.role}
				imageUrl={member.imageUrl}
				info={member.info}
			/>
		</Grid>
	));
	return (
		<Grid container spacing={10}>
			{allMembers}
		</Grid>
	);
};

const Actions = () => (
	<div className="actions-wrap">
		<div className="symbol-card">
			<SymbolCard symbol={<EditIcon />} title="Edit info" description="Edit info about your project" />
		</div>
		<div className="symbol-card">
			<SymbolCard
				symbol={<AddIcon />}
				title="Submit a ticket"
				description="Submit a ticker for reasons like lost partner etc"
			/>
		</div>
		<div className="symbol-card">
			<SymbolCard symbol={<EditIcon />} title="Edit info" description="Edit sprint" />
		</div>
		<div className="symbol-card">
			<SymbolCard
				symbol={<AddIcon />}
				title="Add sprint log"
				description="Add the next sprint log for your project"
			/>
		</div>
	</div>
);

class ProjectPage extends Component {
	render() {
		const { members } = this.props;
		return (
			<div className="project-page">
				<Heading title="View project timeline" />
				<ActivityTimeline />
				<Heading title="Project contributors" />
				<TeamMembers members={members} />
				<Heading title="Project sprint logs" />
				<ProjectLog />
				<Heading title="Review info about the project" />
				<AdditionalInfo />
				<Heading title="Additional options" />
				<Actions />
				<Heading title="Comments on your projects" />
				<Comments />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projectList: state.project.projectList,
		members: state.project.members,
	};
};

export default connect(mapStateToProps)(ProjectPage);
