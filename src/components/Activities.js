import React from 'react';
import { Card } from 'react-bootstrap';

import Activity from './Activity';

import resume from '../resume';

const Activities = () => {
	return (
		<Card>
			<Card.Body>
				<ul>
					{resume.activities.map((activity, index) =>
						<Activity key={index} activity={activity} />
					)}
				</ul>
			</Card.Body>
		</Card>
	);
};

export default Activities;
