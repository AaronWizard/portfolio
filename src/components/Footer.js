import React from 'react';

import ThirdPartyLink from './ThirdPartyLink';

import resume from '../resume';

const YEAR = 2020;

const style = {
	position: 'fixed',
	bottom: '0'
};

const Footer = () => {
	return (
		<footer style={style}>
			&#169; {YEAR} Aaron MacDonald
			&nbsp;|&nbsp;
			<ThirdPartyLink url={resume.contactInfo.linkedInURL}
				text="LinkedIn" />
			&nbsp;|&nbsp;
			<ThirdPartyLink url={resume.github} text="Github" />
		</footer>
	);
};

export default Footer;
