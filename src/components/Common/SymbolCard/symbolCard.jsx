import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
		width: 250,
		height: 150,
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)',
	},
	title: {
		fontSize: 14,
		padding: 10,
	},
	pos: {
		marginBottom: 12,
	},
	container: {
		marginBottom: 10,
  },
  description:{
    marginTop:10
  }
});

export default function SymbolCard(props) {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardContent>
				<div className="text-center heading">
					<div className={classes.container}>{props.symbol}</div>
					<Typography variant="title" component="h5">
						{props.title}
					</Typography>
				</div>
				<div className={classes.description}>
					<Typography variant="body2" component="p">
						{props.description}
					</Typography>
				</div>
			</CardContent>
		</Card>
	);
}
