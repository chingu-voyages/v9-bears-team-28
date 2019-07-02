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
import CustomModal from '../Common/Modal/modal';
import SprintAdd from './SprintAdd/sprintAdd';
import EditSprint from './EditSprint/editSprint';

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

const Actions = ({ editProject, addSprint, editSprint }) => (
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
			<SymbolCard symbol={<EditIcon />} title="Edit info" description="Edit sprint" onClick={editSprint} />
		</div>
		<div className="symbol-card">
			<SymbolCard
				symbol={<AddIcon />}
				title="Add sprint log"
				description="Add the next sprint log for your project"
				onClick={addSprint}
			/>
		</div>
	</div>
);

class ProjectPage extends Component {
	state = {
		isAddSprintModal: false,
		isEditSprintModal: false,
	};
	componentWillMount() {
		let id = this.props.match.params.id;
		this.props.projectActions.getSingleProject(id);
	}
	editProject = () => {
		let id = this.props.match.params.id;
		this.props.history.push('/edit-project/' + id);
	};
	addSprint = () => {
		this.setState({ isAddSprintModal: true });
	};
	closeAddSprintModal = () => {
		this.setState({ isAddSprintModal: false });
	};
	confirmAddSprint = async state => {
		this.setState({ submitted: true });
		let _id = this.props.match.params.id;
		const { title, description, startDate, endDate } = state;
		const data = { title, description, startDate, endDate };
		console.log(data);
		console.log(_id);
		await this.props.projectActions.addSprint(_id, data);
		setTimeout(() => {
			this.setState({ submitted: false });
			window.location.href = '/project/' + _id;
		}, 2000);
	};

	confirmEditSprint = (allSprints) => {
		let id = this.props.match.params.id;
		this.props.projectActions.editSprint(id,allSprints);
	};

	editSprint = () => {
		this.setState({ isEditSprintModal: true });
	};

	closeEditSprintModal = () => {
		this.setState({ isEditSprintModal: false });
	};

	render() {
		const { isAddSprintModal, isEditSprintModal } = this.state;
		const { projectFeteched, projectErrorInFetching } = this.props;
		if (!projectFeteched) {
			return <Loading />;
		} else if (projectErrorInFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		}
		const { members, project } = this.props;
		console.log(project);
		return (
			<div className="project-page">
				<CustomModal
					isModalOpen={isAddSprintModal}
					closeModal={this.closeAddSprintModal}
					customComponent={<SprintAdd _id={project._id} confirmAddSprint={this.confirmAddSprint} />}
				/>
				<CustomModal
					isModalOpen={isEditSprintModal}
					closeModal={this.closeEditSprintModal}
					customComponent={<EditSprint project={project} confirmEditSprint={this.confirmEditSprint} />}
				/>
				<Heading title="View project timeline" />
				<ActivityTimeline logs={project.sprints} />
				<Heading title="Project contributors" />
				<TeamMembers members={members} />
				<Heading title="Project sprint logs" />
				<ProjectLog />
				<Heading title="Review info about the project" />
				<AdditionalInfo project={project} />
				<Heading title="Additional options" />
				<Actions editProject={this.editProject} addSprint={this.addSprint} editSprint={this.editSprint} />
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
