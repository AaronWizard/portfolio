import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Accordion, Card } from 'react-bootstrap';

import Gallery from './Gallery';

const headerStyle = {
	cursor: 'pointer'
};

const showImages = (images) => {
	if (images) {
		return (
			<Gallery images={images} />
		);
	}
	else {
		return null;
	}
};

const Employer = ({ employer, index }) => {
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey={index}
				style={headerStyle}>
				<Row>
					<Col>
						<strong>{employer.company}</strong>
					</Col>
					<Col>{employer.jobTitle}</Col>
				</Row>
				<Row>
					<Col>{employer.location}</Col>
					<Col>
						{employer.fromDate} - {employer.toDate}
					</Col>
				</Row>
			</Accordion.Toggle>
			<Accordion.Collapse eventKey={index}>
				<Card.Body>
					<ul>
						{employer.achievements.map((achievement, aindex) =>
							<li key={aindex}>{achievement}</li>
						)}
					</ul>
					{showImages(employer.images)}
				</Card.Body>
			</Accordion.Collapse>
		</Card>
	);
};

Employer.propTypes = {
	employer: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
};

export default Employer;
