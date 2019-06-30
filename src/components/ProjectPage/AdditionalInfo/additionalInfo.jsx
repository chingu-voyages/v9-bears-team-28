import React, { Component } from 'react';

class AdditionalInfo extends Component {
	render() {
        const tableTitles = ['title', 'description', 'hosted url', 'github url', 'Keywords'];
		return (
			<div className="additional-info">
				<table className="table table-striped table-hover table-responsive-md">
					<tbody>
                        <tr>
                            <td>{tableTitles[0]}</td>
                            <td>Project-1</td>
                        </tr>
                        <tr>
                            <td>{tableTitles[1]}</td>
                            <td>Random project info added</td>
                        </tr>
                        <tr>
                            <td>{tableTitles[2]}</td>
                            <td>www.google.com</td>
                        </tr>
                        <tr>
                            <td>{tableTitles[3]}</td>
                            <td>www.github.com</td>
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
