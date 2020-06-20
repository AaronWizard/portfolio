import React from 'react';
import PropTypes from 'prop-types';
import ThirdPartyLink from './ThirdPartyLink';

const Address = ({ contactInfo }) => {
	return (
		<address>
			<a href={`mailto:${contactInfo.email}`}>
				{contactInfo.email}
			</a><br />
			<ThirdPartyLink url={contactInfo.linkedInURL}
				text={contactInfo.linkedInURL}/>
		</address>
	);
};

Address.propTypes = {
	contactInfo: PropTypes.object.isRequired
};

export default Address;
