import React from 'react';
import { Card } from 'react-bootstrap';

import University from './University';
import Training from './Training';

import * as resume from '../resume';

class Education extends React.Component {
	constructor() {
		super();
		this.state = {
			education: null,
			training: []
		};
	}

	componentDidMount() {
		resume.loadResume().then(r => {
			this.setState({
				education: r.education,
				training: r.training
			});
		});
	}

	education() {
		let result = null;
		if (this.state.education) {
			result = <University education={this.state.education} />;
		}
		return result;
	}

	render() {
		return (
			<Card>
				<Card.Body>
					{this.education()}
					<hr />
					<Training courses={this.state.training} />
				</Card.Body>
			</Card>
		);
	}
}

export default Education;
