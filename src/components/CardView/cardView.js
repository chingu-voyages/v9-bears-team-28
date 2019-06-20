import React, { Component } from 'react';
import DataCard from '../DataCard/dataCard';
import Grid from '@material-ui/core/Grid';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import UtilityRow from '../Common/UtilityRow/utilityRow';
import { bindActionCreators } from 'redux';
import * as projectActions from '../../actions/projectActions';

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

class CardView extends Component {
	state = {
		categoryValue: { value: 'title', label: 'Title' },
		orderValue: { value: 'ascending', label: 'Ascending' },
		searchTerm: '',
		projects: [],
		allProjects: [],
	};
	async componentWillMount() {
		let id = this.props.match.params.id;
		await this.props.projectActions.getProjects(id);
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
			<Grid item sm={10} md={4} key={project._id}>
				<DataCard title={project.title} description={project.description} image_location={project.imageUrl} />
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
				<Grid container spacing={10}>
					{cards.length === 0 ? <h3 className="text-center margin-top-5">No results found</h3> : cards }
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		projects: state.project.projectList,
		error: state.project.error,
	};
};

const mapActionsToProps = dispatch => {
	return {
		projectActions: bindActionCreators(projectActions, dispatch),
	};
};

export default connect(
	mapStateToProps,
	mapActionsToProps
)(withStyles(styles)(CardView));
