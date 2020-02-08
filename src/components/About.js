import React from 'react';
import { Card } from 'react-bootstrap';

import Address from './Address';
import ThirdPartyCredits from './ThirdPartyCredits';
import ThirdPartyLink from './ThirdPartyLink';

import resume from '../resume';

const About = () => {
	return (
		<Card>
			<Card.Body>
				<p className="lead">{resume.profile}</p>
				<Address contactInfo={resume.contactInfo} />
				<ThirdPartyCredits
					thirdPartyCredits={resume.thirdPartyTechnologies} />
				<p>
					The source code is available at <ThirdPartyLink
						url={resume.github}
						text="hosted on Github" />.
				</p>
			</Card.Body>
		</Card>
	);
};

export default About;
