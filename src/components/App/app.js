import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardView from '../CardView/cardView';
import VoyageView from '../VoyageView/voyageView';
import { ToastContainer } from 'react-toastify';
import AdminVoyageCreate from '../AdminVoyageCreate.jsx/adminVoyageCreate';

class App extends Component {
	render() {
		return (
			<div className="app">
				<ToastContainer autoClose={2000} />
				<Switch>
					{/* <Route exact path="/projects-view" component={CardView} /> */}
					<Route exact path="/voyages" component={VoyageView} />
					<Route path="/voyages/:id" component={CardView} />
					<Route path="/admin/create-voyage" component={AdminVoyageCreate} />
				</Switch>
			</div>
		);
	}
}

export default App;
