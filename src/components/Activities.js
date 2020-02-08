import React from 'react';

import Activity from './Activity';

import resume from '../resume';

const Activities = () => {
	return (
		<ul>
			{resume.activities.map((activity, index) =>
				<Activity key={index} activity={activity} />
			)}
		</ul>
	);
};

export default Activities;
