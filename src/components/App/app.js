import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CardView from '../CardView/cardView';
import VoyageView from '../VoyageView/voyageView';
import { ToastContainer } from 'react-toastify';
import AdminVoyageCreate from '../AdminVoyageCreate/adminVoyageCreate';
import AdminVoyageView from '../AdminVoyageView/adminVoyageView';
import AdminVoyageEdit from '../AdminVoyageEdit/adminVoyageEdit';
import TeamPage from '../TeamPage/teamPage';
import ProjectPage from '../ProjectPage/projectPage';
import EditProject from '../ProjectPage/EditProject/editProject';

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
					<Route path="/admin/view-voyages" component={AdminVoyageView} />
					<Route path="/admin/edit-voyage/:id" component={AdminVoyageEdit} />
					<Route path="/team" component={TeamPage} />
					<Route path="/project/:id" component={ProjectPage} />
					<Route path="/edit-project/:id" component={EditProject} />
				</Switch>
			</div>
		);
	}
}

export default App;
