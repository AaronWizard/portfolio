import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Container } from 'react-bootstrap';

import NavBar from './NavBar';

import About from './About';
import EmploymentHistory from './EmploymentHistory';
import Education from './Education';
import Activities from './Activities';
import PageNotFound from './PageNotFound';

const App = () => {
	return (
		<Router>
			<Container>
				<h1>Aaron MacDonald&#39;s Resume and Portfolio</h1>
				<NavBar />
				<Switch>
					<Route exact path="/" component={About} />
					<Route exact path="/employment"
						component={EmploymentHistory} />
					<Route exact path="/education" component={Education} />
					<Route exact path="/activities"
						component={Activities} />
					<Route component={PageNotFound} />
				</Switch>
			</Container>
		</Router>
	);
};

export default App;
