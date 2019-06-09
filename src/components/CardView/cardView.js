import React, { Component } from 'react';
import DataCard from '../DataCard/dataCard';
import Grid from '@material-ui/core/Grid';
import Dropdown from 'react-dropdown';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

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

const SortDropdown = props => (
	<Dropdown
		options={props.options}
		placeholder="Select an option"
		value={props.categoryValue}
		onChange={props.changeCategory}
	/>
);

const OrderSort = props => (
	<Dropdown
		options={props.order}
		placeholder="Select an option"
		value={props.orderValue}
		onChange={props.changeOrder}
	/>
);

const UtilityRow = ({
	classes,
	changeCategory,
	changeOrder,
	categoryValue,
	orderValue,
	searchTerm,
	onChangeSearch,
	options,
	order,
}) => {
	return (
		<Grid container spacing={24}>
			<Grid item md={5}>
				<SearchBox classes={classes} searchTerm={searchTerm} onChangeSearch={onChangeSearch} />
			</Grid>
			<Grid item md={1} />
			<Grid item md={2}>
				<SortDropdown options={options} changeCategory={changeCategory} categoryValue={categoryValue} />
			</Grid>
			<Grid item md={1} />
			<Grid item md={2}>
				<OrderSort order={order} changeOrder={changeOrder} orderValue={orderValue} />
			</Grid>
		</Grid>
	);
};

const SearchBox = ({ classes, searchTerm, onChangeSearch }) => (
	<div className={classes.search}>
		<div className={classes.searchIcon}>
			<SearchIcon />
		</div>
		<InputBase
			placeholder="Search project"
			value={searchTerm}
			onChange={onChangeSearch}
			classes={{
				root: classes.inputRoot,
				input: classes.inputInput,
			}}
		/>
	</div>
);

class CardView extends Component {
	state = {
		categoryValue: { value: 'title', label: 'Title' },
		orderValue: { value: 'ascending', label: 'Ascending' },
		searchTerm: '',
	};
	componentWillMount() {
		let { projects } = this.props;
		this.setState({ projects: projects, allProjects: projects }, () => {
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
		let { projects, categoryValue, orderValue } = this.state;
		let data = this.sortArray(projects, categoryValue.value, orderValue.value);
		this.setState({ projects: data });
	};
	searchProjects = event => {
		let searchTerm = event.target.value;
		let { allProjects } = this.state;
		let projects = [];
		allProjects.map((project, index) => {
			if (project.title.includes(searchTerm)) {
				projects.push(project);
			} else if (project.description.includes(searchTerm)) {
				projects.push(project);
			}
		});
		this.setState({ projects: projects, searchTerm: searchTerm });
	};
	render() {
		const { classes } = this.props;
		let { categoryValue, orderValue, searchTerm, projects } = this.state;
		const options = [{ value: 'title', label: 'Title' }, { value: 'description', label: 'Description' }];
		const order = [{ value: 'ascending', label: 'Ascending' }, { value: 'descending', label: 'Descending' }];

		const cards = projects.map((project, index) => (
			<Grid item md={4}>
				<DataCard
					title={project.title}
					description={project.description}
					image_location={project.image_location}
				/>
			</Grid>
		));

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
					onChangeSearch={this.searchProjects}
				/>
				<Grid container spacing={12}>
					{cards}
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.project.projectList,
	};
};

export default connect(mapStateToProps)(withStyles(styles)(CardView));
