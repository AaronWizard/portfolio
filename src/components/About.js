import React from 'react';

import Address from './Address';
import ThirdPartyCredits from './ThirdPartyCredits';
import ThirdPartyLink from './ThirdPartyLink';

import resume from '../resume';

const About = () => {
	return (
		<div>
			<p className="lead">{resume.profile}</p>
			<Address contactInfo={resume.contactInfo} />
			<ThirdPartyCredits
				thirdPartyCredits={resume.thirdPartyTechnologies} />
			<p>
				The source code is available at <ThirdPartyLink
					url={resume.github}
					text="hosted on Github" />.
			</p>
		</div>
	);
};

export default About;
