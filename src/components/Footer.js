import React from 'react';
import { Card } from 'react-bootstrap';

import ThirdPartyLink from './ThirdPartyLink';

import * as resume from '../resume';

const YEAR = 2020;

class Footer extends React.Component {
	constructor() {
		super();
		this.state = {
			linkedInURL: '',
			githubURL: ''
		};
	}

	componentDidMount() {
		resume.loadResume().then(r => {
			this.setState({
				linkedInURL: r.contactInfo.linkedInURL,
				githubURL: r.github
			});
		});
	}

	render () {
		return (
			<footer className="fixed-bottom">
				<Card>
					<Card.Body>
						&#169; {YEAR} Aaron MacDonald
						&nbsp;|&nbsp;
						<ThirdPartyLink url={this.state.linkedInURL}
							text="LinkedIn" />
						&nbsp;|&nbsp;
						<ThirdPartyLink url={this.state.githubURL}
							text="Github" />
					</Card.Body>
				</Card>
			</footer>
		);
	}
}

export default Footer;
