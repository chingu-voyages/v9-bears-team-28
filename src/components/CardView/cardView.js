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

const options = [{ value: 'title', label: 'Title' }, { value: 'description', label: 'Description' }];

const SortDropdown = props => (
	<Dropdown
		options={options}
		placeholder="Select an option"
		value={props.categoryValue}
		onChange={props.changeCategory}
	/>
);

const order = [{ value: 'ascending', label: 'Ascending' }, { value: 'descending', label: 'Descending' }];

const OrderSort = props => (
	<Dropdown options={order} placeholder="Select an option" value={props.orderValue} onChange={props.changeOrder} />
);

const UtilityRow = ({ classes, changeCategory, changeOrder, categoryValue, orderValue,searchTerm,onChangeSearch }) => {
	return (
		<Grid container spacing={24}>
			<Grid item md={5}>
				<SearchBox classes={classes} searchTerm={searchTerm} onChangeSearch={onChangeSearch}/>
			</Grid>
			<Grid item md={1} />
			<Grid item md={2}>
				<SortDropdown changeCategory={changeCategory} categoryValue={categoryValue} />
			</Grid>
			<Grid item md={1} />
			<Grid item md={2}>
				<OrderSort changeOrder={changeOrder} orderValue={orderValue} />
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

const projects = [
	{
		title: 'Project2',
		description:
			'Project2 Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped.',
		image_location:
			'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
	},
	{
		title: 'Project1',
		description:
			'Project1 Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped.',
		image_location:
			'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
	},
	{
		title: 'Project3',
		description:
			'Project3 Scope Management refers to the set of processes that ensure a project’s scope is accurately defined and mapped.',
		image_location:
			'https://www.simplilearn.com/ice9/free_resources_article_thumb/Project-Scope-Management-Cover.jpg',
	},
];

class CardView extends Component {
	state = {
		categoryValue: { value: 'title', label: 'Title' },
		orderValue: { value: 'ascending', label: 'Ascending' },
		searchTerm: '',
	};
	componentWillMount() {
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
		console.log(key);
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
		} else {
			console.log('not changing order');
			console.log(order);
		}
	};
	sortCategory=()=>{
		let { projects, categoryValue, orderValue } = this.state;
		console.log(categoryValue);
		console.log(orderValue);
		let data = this.sortArray(projects, categoryValue.value, orderValue.value);
		this.setState({ projects: data });
	}
	searchProjects=(event)=>{
		console.log(event.target.value);
		let searchTerm = event.target.value;
		let { allProjects } = this.state;
		let projects = [];
		allProjects.map((project, index) => {
			if (project.title.includes(searchTerm)) {
				projects.push(project);
			}
			else if (project.description.includes(searchTerm)) {
				projects.push(project);
			}
		});
		this.setState({ projects: projects,searchTerm:searchTerm });
	}
	render() {
		const { classes } = this.props;
		let { categoryValue, orderValue, searchTerm } = this.state;
		const cards = this.state.projects.map((project, index) => (
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

export default withStyles(styles)(CardView);
