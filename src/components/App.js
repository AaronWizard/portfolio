import React from 'react';
import { Container } from 'react-bootstrap';

//import resume from '../resume';

import About from './About';
import EmploymentHistory from './EmploymentHistory';
import Education from './Education';
import Activities from './Activities';

class App extends React.Component {
	render() {
		return (
			<Container>
				<h1>Aaron MacDonald Resume and Portfolio</h1>
				<About />
				<EmploymentHistory />
				<Education />
				<Activities />
			</Container>
		);
	}
}

export default App;
