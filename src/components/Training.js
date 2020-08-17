import React from 'react';
import PropTypes from 'prop-types';
import { Card, Table } from 'react-bootstrap';

const Training = ( { courses } ) => {
	return (
		<div>
			<Card.Title>Professional Development</Card.Title>
			<Table responsive="sm" bordered={true} striped={true}>
				<thead>
					<tr>
						<th>Course Name</th>
						<th>Institution</th>
						<th>Date</th>
					</tr>
				</thead>
				<tbody>
					{courses.map((course, index) =>
						<tr key={index}>
							<td>{course.name}</td>
							<td>{course.institution}</td>
							<td>{course.date}</td>
						</tr>
					)}
				</tbody>
			</Table>
		</div>
	);
};

Training.propTypes = {
	courses: PropTypes.array.isRequired
};

export default Training;
