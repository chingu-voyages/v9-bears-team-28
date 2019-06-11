import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
	Container,
	CssBaseline,
	TextField,
	Button,
	Icon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default class Login extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			email: "",
			password: "",
			errors: {}
		};
	}

	handleChange(event) {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		event.preventDefault();

		const userData = {
			email: this.state.email,
			password: this.state.password
		};

		console.log(userData);
	}
	render() {
		const { errors } = this.state;
		const classes = makeStyles(theme => ({
			"@global": {
				body: {
					backgroundColor: theme.palette.common.white
				}
			},
			paper: {
				marginTop: theme.spacing(8),
				display: "flex",
				flexDirection: "column",
				alignItems: "center"
			},
			form: {
				maxWidth: "100%",
				marginTop: theme.spacing(1)
			},
			submit: {
				margin: theme.spacing(3, 0, 2)
			},
			rightIcon: {
				marginLeft: theme.spacing(1)
			}
		}));
		return (
			<div>
				<Container component="main" maxWidth="xs">
					<CssBaseline />
					<Link to="/">
						<Icon>keyboard_backspace</Icon> Back to home
					</Link>
					<div style={{ paddingLeft: "11.250px" }}>
						<h4>
							<b>Login</b>
						</h4>
						<p className="grey-text text-darken-1">
							Don't have an account? <Link to="/signup">Signup</Link>
						</p>
					</div>
					<form
						noValidate
						className={classes.form}
						onSubmit={this.handleSubmit}
					>
						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							type="email"
							autoComplete="email"
							autoFocus
							onChange={this.handleChange}
							value={this.state.email}
							error={errors.email}
						/>

						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="password"
							label="Password"
							name="password"
							type="password"
							autoComplete="current-password"
							onChange={this.handleChange}
							value={this.state.password}
							error={errors.password}
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							LOGIN
							<Icon className={classes.rightIcon}>send</Icon>
						</Button>
					</form>
				</Container>
			</div>
		);
	}
}
