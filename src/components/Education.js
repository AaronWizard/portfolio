import React from 'react';
import { Card } from 'react-bootstrap';
//import PropTypes from 'prop-types';

import resume from '../resume';

const Education = () => {
	return (
		<Card>
			<Card.Body>
				<Card.Title>
					{resume.education.school}
				</Card.Title>
				<Card.Subtitle>
					{resume.education.degree}
				</Card.Subtitle>
			</Card.Body>
		</Card>
	);
};

export default Education;
