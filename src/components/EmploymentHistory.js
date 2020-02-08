import React from 'react';
import { Accordion } from 'react-bootstrap';

import Employer from './Employer';

import resume from '../resume';

const EmploymentHistory = () => {
	return (
		<Accordion>
			{resume.employers.map((employer, index) =>
				<Employer key={index} employer={employer} index={index} />
			)}
		</Accordion>
	);
};

export default EmploymentHistory;
