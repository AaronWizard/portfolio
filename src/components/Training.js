import React from 'react';
import PropTypes from 'prop-types';

const Training = ( { courses } ) => {
	return (
		<div>
			<h2>Professional Development</h2>
			<ul>
				{courses.map((course, index) =>
					<li key={index}>
						<em>{course.name}</em>;&nbsp;
						{course.institution}, {course.date}
					</li>
				)}
			</ul>
		</div>
	);
};

Training.propTypes = {
	courses: PropTypes.array.isRequired
};

export default Training;
