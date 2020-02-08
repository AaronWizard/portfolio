import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

//import { Container } from 'react-bootstrap';

//import resume from '../resume';

import About from './About';
import EmploymentHistory from './EmploymentHistory';
import Education from './Education';
import Activities from './Activities';
import PageNotFound from './PageNotFound';

class App extends React.Component {
	render() {
		return (
			<Router>
				<h1>Aaron MacDonald&#39;s Resume and Portfolio</h1>
				<nav>
					<ul>
						<li>
							<Link to="/">About</Link>
						</li>
						<li>
							<Link to="/employment">Employment</Link>
						</li>
						<li>
							<Link to="/education">Education</Link>
						</li>
						<li>
							<Link to="/activities">Activities</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route exact path="/" component={About} />
					<Route exact path="/employment"
						component={EmploymentHistory} />
					<Route exact path="/education" component={Education} />
					<Route exact path="/activities" component={Activities} />
					<Route component={PageNotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
