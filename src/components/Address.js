import React from 'react';
import PropTypes from 'prop-types';
import ThirdPartyLink from './ThirdPartyLink';

const Address = ({ contactInfo }) => {
	return (
		<address>
			{contactInfo.street1},&nbsp;
			{contactInfo.street2}<br />
			{contactInfo.city},&nbsp;
			{contactInfo.province},&nbsp;
			{contactInfo.postalCode}<br />
			Home Phone: <a
				href={`tel:${contactInfo.homePhone}`}>
				{contactInfo.homePhone}
			</a><br />
			Mobile Phone: <a
				href={`tel:${contactInfo.mobilePhone}`}>
				{contactInfo.mobilePhone}
			</a><br />
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
