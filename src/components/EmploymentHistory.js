import React from 'react';
import { Card, Accordion } from 'react-bootstrap';

import Employer from './Employer';

import * as resume from '../resume';

class EmploymentHistory extends React.Component {
	constructor() {
		super();
		this.state = {
			employers: []
		};
	}

	componentDidMount() {
		resume.loadResume().then(r => {
			this.setState({
				employers: r.employers
			});
		});
	}

	render() {
		return (
			<Card>
				<Card.Body>
					<Accordion defaultActiveKey={0}>
						{this.state.employers.map((employer, index) =>
							<Employer key={index} employer={employer}
								index={index} />
						)}
					</Accordion>
				</Card.Body>
			</Card>
		);
	}
}

export default EmploymentHistory;
