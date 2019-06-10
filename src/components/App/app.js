import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardView from '../CardView/cardView';
import VoyageView from '../VoyageView/voyageView';

class App extends Component {
	render() {
		return (
			<div className="app">
				<Switch>
					<Route exact path="/projects-view" component={CardView} />
					<Route exact path="/voyages" component={VoyageView} />
				</Switch>
			</div>
		);
	}
}

export default App;
