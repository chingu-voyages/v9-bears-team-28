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

export default class Signup extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			name: "",
			userId: "",
			email: "",
			password: "",
			password2: "",
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

		const newUser = {
			name: this.state.name,
			userId: this.state.userId,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		};

		console.log(newUser);
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
					<h2>
						<b>SIGN UP</b>
					</h2>
					<p>
						Already have an account? <Link to="/login">Log in</Link>
					</p>
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
							id="name"
							label="Name"
							name="name"
							type="text"
							autoComplete="name"
							autoFocus
							onChange={this.handleChange}
							value={this.state.name}
							error={errors.name}
						/>

						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="userId"
							label="User Id"
							name="userId"
							type="text"
							autoComplete="userId"
							onChange={this.handleChange}
							value={this.state.userId}
							error={errors.userId}
						/>

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
							autoComplete="password"
							onChange={this.handleChange}
							value={this.state.password}
							error={errors.password}
						/>

						<TextField
							variant="outlined"
							margin="normal"
							required
							fullWidth
							id="password2"
							label="Confirm Password"
							name="password2"
							type="password"
							autoComplete="confirm-password"
							onChange={this.handleChange}
							value={this.state.password2}
							error={errors.password2}
						/>

						<Button
							type="submit"
							fullWidth
							variant="contained"
							color="primary"
							className={classes.submit}
						>
							SIGN UP
							<Icon className={classes.rightIcon}>send</Icon>
						</Button>
					</form>
				</Container>
			</div>
		);
	}
}
