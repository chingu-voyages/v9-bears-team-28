import React from "react";
import Dropdown from 'react-dropdown';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

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
		className="order-sort-dropdown"
	/>
);

const SearchBox = ({ classes, searchTerm, onChangeSearch }) => (
	<div className={classes.search}>
		<div className={classes.searchIcon}>
			<SearchIcon />
		</div>
		<InputBase
			placeholder="Search here"
			value={searchTerm}
			onChange={onChangeSearch}
			classes={{
				root: classes.inputRoot,
				input: classes.inputInput,
			}}
		/>
	</div>
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
			<Grid item sm={10} md={4}>
				<SearchBox classes={classes} searchTerm={searchTerm} onChangeSearch={onChangeSearch} />
			</Grid>
			<Grid item xs={10} sm={8} md={2} style={{marginLeft:"auto",marginRight:"auto"}}>
				<SortDropdown options={options} changeCategory={changeCategory} categoryValue={categoryValue} />
			</Grid>
			<Grid item xs={10} sm={8} md={2} style={{marginLeft:"auto",marginRight:"auto"}}>
				<OrderSort order={order} changeOrder={changeOrder} orderValue={orderValue} />
			</Grid>
		</Grid>
	);
};

export default UtilityRow;