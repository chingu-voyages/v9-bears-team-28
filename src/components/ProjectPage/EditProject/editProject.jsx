import React, { Component } from 'react';
import FormField from '../../Common/FormField/formField';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as projectActions from '../../../actions/projectActions';
import Loading from '../../Common/Loading/loading';
import { ERROR_MESSAGE_VOYAGE_FETCHING } from '../../../constants/constant';

class EditProject extends Component {
	state = {
		title: '',
		description: '',
		githubUrl: '',
		deploymentUrl: '',
		image: '',
	};
	componentWillMount() {
		let id = this.props.match.params.id;
		this.props.projectActions.getSingleProject(id);
	}
	setTitle(title) {
		this.setState({ title });
	}
	setDescription(description) {
		this.setState({ description });
	}
	setGithubUrl(githubUrl) {
		this.setState({ githubUrl });
	}
	setDeploymentUrl(deploymentUrl) {
		this.setState({ deploymentUrl });
	}
	setImage(image) {
		this.setState({ image });
	}
	render() {
		const { projectFeteched, projectErrorInFetching } = this.props;
		if (!projectFeteched) {
			return <Loading />;
		} else if (projectErrorInFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
		}
		const submitVoyageForm = event => {
			event.preventDefault();
			const { title, description, githubUrl, deploymentUrl } = this.state;
			console.log(this.state);
		};
		const { name, description, githubUrl, deploymentUrl, image } = this.state;
		return (
			<div className="create-project">
				<div className="card create-voyage-card">
					<h3 className="text-center mb-5">Edit project</h3>
					<form className="create-voyage-form" onSubmit={submitVoyageForm}>
						<FormField
							title="Project title"
							placeholder="title"
							type="text"
							value={name}
							onChange={this.setTitle}
						/>
						<FormField
							title="Project description"
							placeholder="Info about the project"
							type="text"
							value={description}
							onChange={this.setDescription}
						/>
						<FormField
							title="Github URL"
							placeholder="Github repository link"
							type="text"
							value={githubUrl}
							onChange={this.setGithubUrl}
						/>
						<FormField
							title="Deployment URL"
							placeholder="Enter the live site link here"
							type="text"
							value={deploymentUrl}
							onChange={this.setDeploymentUrl}
						/>
						<div className="col-xs-10 col-md-5 col-lg-2 btn-lg button-center">
							<button type="submit" className="btn btn-primary btn-block btn-oval">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		project: state.project.project,
		projectFeteched: state.project.projectFeteched,
		projectErrorInFetching: state.project.projectErrorInFetching,
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
)(EditProject);
