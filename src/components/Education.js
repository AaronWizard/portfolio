import React from 'react';
import { Card } from 'react-bootstrap';

import University from './University';
import Training from './Training';

import resume from '../resume';

const Education = () => {
	return (
		<Card>
			<Card.Body>
				<University education={resume.education} />
				<hr />
				<Training courses={resume.training} />
			</Card.Body>
		</Card>
	);
};

export default Education;
