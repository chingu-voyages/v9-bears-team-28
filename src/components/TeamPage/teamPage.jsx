import React, { Component } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import './teamPage.scss';
import SymbolCard from '../Common/SymbolCard/symbolCard';
import { Grid } from '@material-ui/core';
import DataCard from '../DataCard/dataCard';
import { connect } from 'react-redux';
import MemberCard from '../Common/MemberCard/memberCard';
import TeamActivity from './TeamActivity/teamActivity';
import Heading from "../Common/Heading/heading";

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
			<div className="actions-wrap">
				<div className="symbol-card">
					<SymbolCard symbol={<EditIcon />} title="Edit info" description="Edit info about your team" />
				</div>
				<div className="symbol-card">
					<SymbolCard
						symbol={<AddIcon />}
						title="Submit a ticket"
						description="Submit a ticker for reasons like lost partner etc"
					/>
				</div>
			</div>
		);

		const MeetTheTeam = () => {
			const { members } = this.props;
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

		const TeamProjects = ({ projects }) => {
			const allProjects = projects.map((project, index) => (
				<Grid item sm={10} md={4} key={project._id}>
					<DataCard
						title={project.title}
						description={project.description}
						image_location={project.imageUrl}
					/>
				</Grid>
			));
			return (
				<Grid container spacing={10}>
					{allProjects}
				</Grid>
			);
		};

		return (
			<div className="team-page">
				<TeamName name="Bears-team-28" />
				<Heading title="Meet the team" />
				<MeetTheTeam />
				<Heading title="Projects by team" />
				<TeamProjects projects={this.props.projectList} />
				<Heading title="Teams's activity" />
				<TeamActivity />
				<Heading title="Perform actions" />
				<Actions />
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

export default connect(mapStateToProps)(TeamPage);
