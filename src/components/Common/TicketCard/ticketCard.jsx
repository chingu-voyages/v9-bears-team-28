import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import StopIcon from '@material-ui/icons/Stop';
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';

const useStyles = makeStyles({
	card: {
		width: '100%',
	},
	media: {
		height: 140,
	},
	small: {
		fontSize: '0.75rem',
		paddingLeft:16
	},
});

export default function TicketCard(props) {
	const classes = useStyles();
	let { title, description, onHold } = props;
	return (
		<Card className={classes.card}>
			<CardActionArea>
				<CardContent>
					<Typography gutterBottom variant="h5" component="h2">
						{title}
					</Typography>
					<Typography variant="subtitle2" color="textPrimary">
						Anshul Dubey, Bears-team-28
					</Typography>

					<Typography variant="body2" component="p" color="textSecondary">
						{description}
					</Typography>
				</CardContent>
			</CardActionArea>
			<small className={classes.small}>Status: {props.status}</small>
			<CardActions>
				<Button size="small" color="primary">
					<DoneIcon />
					Approve
				</Button>
				<Button size="small" color="primary">
					{onHold ? (
						<span>
							<RestoreIcon />
							Reactivate ticket
						</span>
					) : (
						<span>
							<StopIcon />
							Keep on hold
						</span>
					)}
				</Button>
				<Button size="small" color="primary">
					<DeleteIcon />
					Reject
				</Button>
			</CardActions>
		</Card>
	);
}
