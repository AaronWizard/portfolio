import React, { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import { Container, Card } from 'react-bootstrap';

import NavBar from './NavBar';
import Footer from './Footer';

const About = React.lazy(() => import('./About'));
const EmploymentHistory = React.lazy(() => import('./EmploymentHistory'));
const Education = React.lazy(() => import('./Education'));
const Activities = React.lazy(() => import('./Activities'));
const PageNotFound = React.lazy(() => import('./PageNotFound'));

const style = {
	paddingTop: '0.5em',
	paddingBottom: '90px'
};

const App = () => {
	return (
		<Router>
			<Container>
				<div style={style}>
					<h1>Aaron MacDonald&#39;s Resume and Portfolio</h1>
					<NavBar />
					<Card>
						<Card.Body>
							<Suspense fallback={<div>Loading...</div>}>
								<Switch>
									<Route exact path="/" component={About} />
									<Route exact path="/employment"
										component={EmploymentHistory} />
									<Route exact path="/education"
										component={Education} />
									<Route exact path="/activities"
										component={Activities} />
									<Route component={PageNotFound} />
								</Switch>
							</Suspense>
						</Card.Body>
					</Card>
				</div>
				<Footer />
			</Container>
		</Router>
	);
};

export default App;
