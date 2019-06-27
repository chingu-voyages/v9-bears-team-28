import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
		width: '500px!important',
	};
}

const styles = theme => ({
	modal: {
		minHeight: 500,
		maxHeight: 700,
		overflow: 'scroll',
		minWidth: 500,
	},
	paper: {
		position: 'absolute',
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(4),
		outline: 'none',
		paddingTop: 0,
	},
	title: {
		margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,
	},
	listItem: {
		padding: 0,
	},
	button: {
		textAlign: 'center',
		// marginTop: 30,
		margin: 20,
	},
});

class CustomModal extends React.Component {
	render() {
		const { classes, isModalOpen, closeModal, title, customComponent } = this.props;
		return (
			<Modal
				aria-labelledby="simple-modal-title"
				aria-describedby="simple-modal-description"
				open={isModalOpen}
				onClose={closeModal}
				className={classes.modal}
			>
				<div style={getModalStyle()} className={classes.paper}>
					<Typography variant="h6" className={classes.title}>
						{title}
					</Typography>
					<div className={classes.demo}>
						{customComponent}
					</div>
				</div>
			</Modal>
		);
	}
}

CustomModal.propTypes = {
	classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
// const Modal = withStyles(styles)(ConfirmModal);

export default withStyles(styles)(CustomModal);
