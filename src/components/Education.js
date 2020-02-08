import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
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
					<Row>
						<Col>
							{resume.education.degree}
						</Col>
						<Col>
							{resume.education.fromDate}
							&nbsp;-&nbsp;
							{resume.education.toDate}
						</Col>
					</Row>
					<Row>
						<Col>
							{resume.education.location}
						</Col>
					</Row>
				</Card.Subtitle>
				<Card.Text>
					<Row>
						<Col>
							<strong>Courses</strong>
						</Col>
					</Row>
					<ul>
						{resume.education.courses.map((course, index) =>
							<li key={index}>{course}</li>
						)}
					</ul>
				</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default Education;
