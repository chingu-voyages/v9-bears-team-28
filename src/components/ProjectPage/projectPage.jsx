import React, { Component } from 'react';
import MemberCard from '../Common/MemberCard/memberCard';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import ActivityTimeline from './ActivityTimeline/activityTimeline';
import ProjectLog from './ProjectLog/projectLog';
import AdditionalInfo from './AdditionalInfo/additionalInfo';
import Heading from '../Common/Heading/heading';
import Comments from './Comments/comments';
import SymbolCard from '../Common/SymbolCard/symbolCard';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import './projectPage.scss';
import Loading from '../Common/Loading/loading';
import { ERROR_MESSAGE_VOYAGE_FETCHING } from '../../constants/constant';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../actions/projectActions';

const TeamMembers = ({ members }) => {
	const allMembers = members.map((member, index) => (
		<Grid item md={4} key={index}>
			<MemberCard name={member.name} role={member.role} imageUrl={member.imageUrl} info={member.info} />
		</Grid>
	));
	return (
		<Grid container spacing={10}>
			{allMembers}
		</Grid>
	);
};

const Actions = ({editProject}) => (
	<div className="actions-wrap">
		<div className="symbol-card">
			<SymbolCard
				symbol={<EditIcon />}
				title="Edit info"
				description="Edit info about your project"
				onClick={editProject}
			/>
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
	componentWillMount() {
		let id = this.props.match.params.id;
		this.props.projectActions.getSingleProject(id);
	}
	editProject=()=>{
		let id = this.props.match.params.id;
		this.props.history.push("/edit-project/"+id);
	}
	render() {
		console.log(this.props);
		const { projectFeteched, projectErrorInFetching } = this.props;
		if (!projectFeteched) {
			return <Loading />;
		} else if (projectErrorInFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		}
		const { members, project } = this.props;
		return (
			<div className="project-page">
				<Heading title="View project timeline" />
				<ActivityTimeline />
				<Heading title="Project contributors" />
				<TeamMembers members={members} />
				<Heading title="Project sprint logs" />
				<ProjectLog />
				<Heading title="Review info about the project" />
				<AdditionalInfo project={project} />
				<Heading title="Additional options" />
				<Actions editProject={this.editProject}/>
				<Heading title="Comments on your projects" />
				<Comments />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		project: state.project.project,
		projectFeteched: state.project.projectFeteched,
		projectErrorInFetching: state.project.projectErrorInFetching,
		members: state.project.members,
	};
};

const mapActionsToProps = dispatch => {
	return {
		projectActions: bindActionCreators(projectActions, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(ProjectPage);
