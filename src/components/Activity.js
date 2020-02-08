import React from 'react';
import PropTypes from 'prop-types';

import ThirdPartyLink from './ThirdPartyLink';

const showSubItems = (subItems) => {
	if (subItems) {
		return (
			<ul>
				{subItems.map((subItem, index) =>
					<li key={index}>{subItem}</li>
				)}
			</ul>
		);
	}
	else {
		return null;
	}
};

const showLinks = (links) => {
	if (links) {
		return (
			<ul>
				{links.map((url, index) =>
					<li key={index}>
						<ThirdPartyLink url={url} text={url} />
					</li>
				)}
			</ul>
		);
	}
	else {
		return null;
	}
};

const Activity = ({ activity }) => {
	return (
		<li>
			{activity.item}
			{showSubItems(activity.subItems)}
			{showLinks(activity.links)}
		</li>
	);
};

Activity.propTypes = {
	activity: PropTypes.object.isRequired
};

export default Activity;
