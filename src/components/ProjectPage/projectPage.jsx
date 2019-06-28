import React, { Component } from 'react';
import MemberCard from '../Common/MemberCard/memberCard';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import ActivityTimeline from './ActivityTimeline/activityTimeline';

const TeamMembers = ({members}) => {
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

class ProjectPage extends Component {
	render() {
        const {members}=this.props;
		return (
			<div className="project-page">
				<ActivityTimeline />
				<TeamMembers members={members}/>
				{/* <Sprints />
				<AdditionalInfo />
				<Comments /> */}
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
