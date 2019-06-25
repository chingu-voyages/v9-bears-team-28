import React, { Component } from 'react';
import UtilityRow from '../Common/UtilityRow/utilityRow';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import DataCard from '../DataCard/dataCard';
import { bindActionCreators } from 'redux';
import * as voyageActions from '../../actions/voyageActions';
import Loading from '../Common/Loading/loading';
import {
	ERROR_MESSAGE_VOYAGE_FETCHING,
	OPTIONS,
	ORDER,
	DEFAULT_ORDER_VALUE,
	DEFAULT_CATEGORY_VALUE,
} from '../../constants/constant';
import { sortArrayOfObject } from '../../utils/sort';

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
		categoryValue: DEFAULT_CATEGORY_VALUE,
		orderValue: DEFAULT_ORDER_VALUE,
		searchTerm: '',
		voyages: [],
		allVoyages: [],
	};
	
	async componentWillMount() {
		await this.props.voyageActions.getVoyages();
		let { voyages } = this.props;
		this.setState({ voyages: voyages, allVoyages: voyages }, () => {
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

	sortCategory = () => {
		let { voyages, categoryValue, orderValue } = this.state;
		let data = sortArrayOfObject(voyages, categoryValue.value, orderValue.value);
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
		const { errorFetching, fetched } = this.props;
		const { categoryValue, orderValue, searchTerm, voyages } = this.state;

		if (!fetched) {
			return <Loading />;
		} else if (errorFetching) {
			return <div className="text-center">{ERROR_MESSAGE_VOYAGE_FETCHING}</div>;
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
					options={OPTIONS}
					order={ORDER}
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
		errorFetching: state.voyage.errorFetching,
		fetched: state.voyage.fetched,
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
