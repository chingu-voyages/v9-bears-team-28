import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardView from '../CardView/cardView';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Switch>
					<Route exact path="/projects-view" component={CardView} />
				</Switch>
			</div>
		);
	}
}

export default App;
