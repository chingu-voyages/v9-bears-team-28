import React, { Component } from 'react';

class AdditionalInfo extends Component {
	render() {
        const tableTitles = ['title', 'description', 'hosted url', 'github url', 'Keywords'];
        const {project}=this.props;
        console.log(project);
		return (
			<div className="additional-info">
				<table className="table table-striped table-hover table-responsive-md">
					<tbody>
                        <tr>
                            <td>{tableTitles[0]}</td>
                            <td>{project.title}</td>
                        </tr>
                        <tr>
                            <td>{tableTitles[1]}</td>
                            <td>{project.description}</td>
                        </tr>
                        <tr>
                            <td>{tableTitles[2]}</td>
                            <td>{project.deploymentUrl}</td>
                        </tr>
                        <tr>
                            <td>{tableTitles[3]}</td>
                            <td>{project.githubUrl}</td>
                        </tr>
                        <tr>
                            <td>{tableTitles[4]}</td>
                            <td>React, NodeJS</td>
                        </tr>
                    </tbody>
				</table>
			</div>
		);
	}
}

export default AdditionalInfo;
