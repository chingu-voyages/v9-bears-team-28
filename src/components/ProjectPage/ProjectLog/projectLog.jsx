import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const info = [
	{
		date: '27th June, 2019 10:04:16 GMT',
		title: 'Issue opened',
		branch: 'development',
		comment: 'Please resolve the fix on crashes due to MIME text error',
		author: 'Anshul2166',
	},
];

const Log = props => {
	const { date, title, branch, comment, author } = props.data;
	const { classes } = props;
	return (
		<div className={classes.log}>
			<Typography variant="body2" component="p">
				{date}
			</Typography>
			<Card className={classes.card}>
				<CardContent>
					<Typography variant="subtitle1" component="h3">
						{title} on {branch}
					</Typography>
					<Typography variant="body2" className={classes.pos} color="textSecondary">
						by {author}
					</Typography>
					<Typography variant="body2" component="p">
						{comment}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
};

const styles = theme => ({
	log: {
		marginLeft: '7%',
		marginRight: '7%',
	},
	card: {
		minWidth: 275,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

class ProjectLog extends Component {
	render() {
		const { classes } = this.props;
		return info.map((data, index) => <Log data={data} key={index} classes={classes} />);
	}
}

export default withStyles(styles)(ProjectLog);
