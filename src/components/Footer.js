import React from 'react';
import { Card } from 'react-bootstrap';

import ThirdPartyLink from './ThirdPartyLink';

import resume from '../resume';

const YEAR = 2020;

const Footer = () => {
	return (
		<footer className="fixed-bottom">
			<Card>
				<Card.Body>
					&#169; {YEAR} Aaron MacDonald
					&nbsp;|&nbsp;
					<ThirdPartyLink url={resume.contactInfo.linkedInURL}
						text="LinkedIn" />
					&nbsp;|&nbsp;
					<ThirdPartyLink url={resume.github} text="Github" />
				</Card.Body>
			</Card>
		</footer>
	);
};

export default Footer;
