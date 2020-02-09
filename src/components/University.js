import React from 'react';
import PropTypes from 'prop-types';

const University = ({ education }) => {
	return (
		<div>
			<h2>{education.school}</h2>
			<h3>{education.degree}</h3>
			<p>
				{education.location}<br />
				{education.fromDate} - {education.toDate}
			</p>
			<h2>Courses</h2>
			<ul>
				{education.courses.map((course, index) =>
					<li key={index}>{course}</li>
				)}
			</ul>
		</div>
	);
};

University.propTypes = {
	education: PropTypes.object.isRequired
};

export default University;
