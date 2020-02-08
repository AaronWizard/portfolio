import React from 'react';
import PropTypes from 'prop-types';

const ThirdPartyLink = ({ url, text }) => {
	return (
		<a target="_blank" rel="noreferrer noopener" href={url}>{text}</a>
	);
};

ThirdPartyLink.propTypes = {
	url: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
};

export default ThirdPartyLink;
