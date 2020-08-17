import React from 'react';
import { Card } from 'react-bootstrap';

import Activity from './Activity';
import Gallery from './Gallery';

import * as resume from '../resume';

class Activities extends React.Component {
	constructor() {
		super();
		this.state = {
			activities: [],
			images: []
		};
	}

	componentDidMount() {
		resume.loadResume().then(r => {
			this.setState({
				activities: r.activities,
				images: r.activityImages
			});
		});
	}

	render () {
		return (
			<Card>
				<Card.Body>
					<Card.Title>Activities</Card.Title>
					<ul>
						{this.state.activities.map((activity, index) =>
							<Activity key={index} activity={activity} />
						)}
					</ul>
					<Gallery images={this.state.images} />
				</Card.Body>
			</Card>
		);
	}
}

export default Activities;
