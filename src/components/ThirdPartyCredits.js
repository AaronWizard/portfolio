import React from 'react';
import PropTypes from 'prop-types';

import ThirdPartyLink from './ThirdPartyLink';

const ThirdPartyCredits = ({ thirdPartyCredits }) => {
	return (
		<div>
			This site was built using the following technologies:
			<ul>
				{thirdPartyCredits.map((credit, index) =>
					<li key={index}>
						<ThirdPartyLink url={credit.url} text={credit.name} />
					</li>
				)}
			</ul>
		</div>
	);
};

ThirdPartyCredits.propTypes = {
	thirdPartyCredits: PropTypes.array.isRequired
};

export default ThirdPartyCredits;
