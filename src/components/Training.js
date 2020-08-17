import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const Training = ( { courses } ) => {
	return (
		<div>
			<Card.Title>Professional Development</Card.Title>
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
