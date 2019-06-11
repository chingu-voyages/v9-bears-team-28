import React from "react";
import { Container, CssBaseline, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

export default function Landing() {
	const classes = useStyles();
	return (
		<div>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Link to="/signup">
					<Button
						fullWidth
						variant="contained"
						color="primary"
						className={classes.button}
					>
						SIGNUP
						<Icon className={classes.rightIcon}>send</Icon>
					</Button>
				</Link>

				<Link to="/login">
					<Button
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.button}
					>
						LOGIN
						<Icon className={classes.rightIcon}>send</Icon>
					</Button>
				</Link>
				<Link to="/login">
					<Button
						fullWidth
						variant="contained"
						color="secondary"
						className={classes.button}
					>
						GitHub
						<Icon className={classes.rightIcon}>send</Icon>
					</Button>
				</Link>
			</Container>
		</div>
	);
}

const useStyles = makeStyles(theme => ({
	"@global": {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	button: {
		margin: theme.spacing(3, 0, 2)
	},
	rightIcon: {
		marginLeft: theme.spacing(1)
	}
}));
