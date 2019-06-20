import React, { Component } from 'react';
import UtilityRow from '../Common/UtilityRow/utilityRow';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DataCard from '../DataCard/dataCard';
import { bindActionCreators } from 'redux';
import * as voyageActions from '../../actions/voyageActions';

const styles = theme => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(3),
			width: 'auto',
		},
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 200,
		},
	},
});

class VoyageView extends Component {
	state = {
		categoryValue: { value: 'title', label: 'Title' },
		orderValue: { value: 'ascending', label: 'Ascending' },
		searchTerm: '',
		voyages: [],
		allVoyages: [],
		isLoading: false,
	};
	async componentWillMount() {
		this.setState({ isLoading: true });
		await this.props.voyageActions.getVoyages();
		let { voyages } = this.props;
		this.setState({ voyages: voyages, allVoyages: voyages, isLoading: false }, () => {
			this.sortCategory();
		});
	}
	changeCategory = option => {
		this.setState({ categoryValue: option }, () => {
			this.sortCategory();
		});
	};
	changeOrder = option => {
		this.setState({ orderValue: option, order: option }, () => {
			this.sortCategory();
		});
	};
	sortArray = (data, key, order) => {
		key = key.toLowerCase();
		if (order === 'ascending') {
			return data.sort(function(a, b) {
				var x = a[key];
				var y = b[key];
				return x < y ? -1 : x > y ? 1 : 0;
			});
		} else if (order === 'descending') {
			return data.sort(function(a, b) {
				var x = a[key];
				var y = b[key];
				return x < y ? 1 : x > y ? -1 : 0;
			});
		}
	};
	sortCategory = () => {
		let { voyages, categoryValue, orderValue } = this.state;
		let data = this.sortArray(voyages, categoryValue.value, orderValue.value);
		this.setState({ voyages: data });
	};
	searchVoyages = event => {
		let searchTerm = event.target.value;
		let { allVoyages } = this.state;
		let voyages = [];
		allVoyages.map((voyage, index) => {
			if (voyage.title.includes(searchTerm)) {
				voyages.push(voyage);
			} else if (voyage.description.includes(searchTerm)) {
				voyages.push(voyage);
			}
		});
		this.setState({ voyages: voyages, allVoyages: voyages });
	};

	openVoyage = id => {
		this.props.history.push('/voyages/' + id);
	};

	render() {
		const { classes } = this.props;
		const options = [{ value: 'title', label: 'Title' }, { value: 'description', label: 'Description' }];
		const order = [{ value: 'ascending', label: 'Ascending' }, { value: 'descending', label: 'Descending' }];
		let { categoryValue, orderValue, searchTerm, voyages } = this.state;

		if (this.state.isLoading) {
			return null;
		}

		let cards = voyages.map((voyage, index) => {
			return (
				<Grid key={voyage._id} item sm={10} md={4}>
					<DataCard
						title={voyage.name}
						description={voyage.description}
						image_location={voyage.imageUrl}
						openVoyage={this.openVoyage}
						id={voyage._id}
					/>
				</Grid>
			);
		});

		return (
			<div className="card-view-wrapper">
				<UtilityRow
					classes={classes}
					options={options}
					order={order}
					categoryValue={categoryValue}
					changeCategory={this.changeCategory}
					orderValue={orderValue}
					changeOrder={this.changeOrder}
					searchTerm={searchTerm}
					onChangeSearch={this.searchVoyages}
				/>
				<Grid container spacing={10}>
					{cards}
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		voyages: state.voyage.voyageList,
	};
};

const mapActionsToProps = dispatch => {
	return {
		voyageActions: bindActionCreators(voyageActions, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(withStyles(styles)(VoyageView));
