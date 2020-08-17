import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const University = ({ education }) => {
	return (
		<div>
			<Card.Title>Education</Card.Title>
			<p>
				<Card.Subtitle>
					{education.school}<br />{education.degree}
				</Card.Subtitle>
			</p>
			<p>
				{education.location}<br />
				{education.fromDate} - {education.toDate}
			</p>
			<Card.Subtitle>Courses</Card.Subtitle>
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
