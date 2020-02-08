import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Accordion, Card } from 'react-bootstrap';

const Employer = ({ employer, index }) => {
	return (
		<Card>
			<Accordion.Toggle as={Card.Header} eventKey={index}>
				<Row>
					<Col>
						<strong>{employer.company}</strong>
					</Col>
					<Col>{employer.jobTitle}</Col>
				</Row>
			</Accordion.Toggle>
			<Accordion.Collapse eventKey={index}>
				<Card.Body>
					<Row>
						<Col>{employer.location}</Col>
						<Col>
							{employer.fromDate} - {employer.toDate}
						</Col>
					</Row>
					<ul>
						{employer.achievements.map((achievement, aindex) =>
							<li key={aindex}>{achievement}</li>
						)}
					</ul>
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
