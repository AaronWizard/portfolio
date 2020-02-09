import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

import Employer from './Employer';

import resume from '../resume';

const EmploymentHistory = () => {
	return (
		<Card>
			<Card.Body>
				<Accordion defaultActiveKey={0}>
					{resume.employers.map((employer, index) =>
						<Employer key={index} employer={employer}
							index={index} />
					)}
				</Accordion>
			</Card.Body>
		</Card>
	);
};

export default EmploymentHistory;
