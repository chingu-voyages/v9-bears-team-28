import React, { Component } from 'react';
import DataCard from '../DataCard/dataCard';
import Grid from '@material-ui/core/Grid';
import Dropdown from 'react-dropdown';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';

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

const options = [{ value: 'one', label: 'Title' }, { value: 'two', label: 'Description' }];

const SortDropdown = props => (
	<Dropdown options={options} placeholder="Select an option" value={props.categoryValue} onChange={props.changeCategory} />
);

const order = [{ value: 'ascending', label: 'Ascending' }, { value: 'descending', label: 'Descending' }];

const OrderSort = props => (
	<Dropdown options={order} placeholder="Select an option" value={props.orderValue} onChange={props.changeOrder} />
);

const UtilityRow = ({ classes, changeCategory, changeOrder,categoryValue,orderValue }) => {
	return (
		<Grid container spacing={24}>
			<Grid item md={5}>
				<SearchBox classes={classes} />
			</Grid>
			<Grid item md={1} />
			<Grid item md={2}>
				<SortDropdown changeCategory={changeCategory} categoryValue={categoryValue}/>
			</Grid>
			<Grid item md={1} />
			<Grid item md={2}>
				<OrderSort changeOrder={changeOrder} orderValue={orderValue}/>
			</Grid>
		</Grid>
	);
};

const SearchBox = ({ classes }) => (
	<div className={classes.search}>
		<div className={classes.searchIcon}>
			<SearchIcon />
		</div>
		<InputBase
			placeholder="Search project"
			// value={this.state.searchText}
			// onChange={this.onSearchTextChange}
			// onKeyPress={this._handleKeyPress}
			classes={{
				root: classes.inputRoot,
				input: classes.inputInput,
			}}
		/>
	</div>
);

class CardView extends Component {
	state = {
		categoryValue: 'Title',
		orderValue: 'Ascending',
	};
	changeCategory = option => {
		console.log('Changing category');
		console.log(option.label);
		this.setState({categoryValue:option});
	};
	changeOrder = option => {
		console.log('Changing order');
		console.log(option.label);
		this.setState({orderValue:option});
	};
	render() {
		const { classes } = this.props;
		let { categoryValue, orderValue } = this.state;
		return (
			<div className="card-view-wrapper">
				<UtilityRow
					classes={classes}
					categoryValue={categoryValue}
					changeCategory={this.changeCategory}
					orderValue={orderValue}
					changeOrder={this.changeOrder}
				/>
				<Grid container spacing={12}>
					<Grid item md={4}>
						<DataCard
							description="Project Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped. "
							image_location="https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg"
						/>
					</Grid>
					<Grid item md={4}>
						<DataCard
							description="Project Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped. "
							image_location="https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg"
						/>
					</Grid>
					<Grid item md={4}>
						<DataCard
							description="Project Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped. "
							image_location="https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg"
						/>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(CardView);
