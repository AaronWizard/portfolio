import React from 'react';
import { Row, Col, Accordion, Card } from 'react-bootstrap';

import resume from '../resume';

const EmploymentHistory = () => {
	return (
		<Accordion>
			{resume.employers.map((employer, index) =>
				<Card key={index}>
					<Accordion.Toggle as={Card.Header} eventKey={index}>
						<Row>
							<Col xs={5}>
								<strong>{employer.company}</strong>
							</Col>
							<Col>{employer.jobTitle}</Col>
							<Col xs={2}>{employer.location}</Col>
							<Col>
								{employer.fromDate} - {employer.toDate}
							</Col>
						</Row>
					</Accordion.Toggle>
					<Accordion.Collapse eventKey={index}>
						<Card.Body>Hello</Card.Body>
					</Accordion.Collapse>
				</Card>
			)}
		</Accordion>
	);
};

export default EmploymentHistory;
