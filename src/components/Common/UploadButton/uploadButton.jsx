import React from 'react';
import { CircularProgress, Button } from '@material-ui/core';

export const UploadButton = ({ title, submittingTitle, submitted, onClick }) => {
	return (
		<div className="submit-button">
			<Button variant="contained" color="primary" onClick={onClick} className="action-btn">
				{submitted ? (
					<span>
						{submittingTitle}
						<CircularProgress style={{ marginLeft: '5px', width: 25, height: 25 }} />
					</span>
				) : (
					title
				)}
			</Button>
		</div>
	);
};
