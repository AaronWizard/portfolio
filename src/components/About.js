import React from 'react';
import { Card } from 'react-bootstrap';

import Address from './Address';
import ThirdPartyCredits from './ThirdPartyCredits';
import ThirdPartyLink from './ThirdPartyLink';

import * as resume from '../resume';

class About extends React.Component {
	constructor() {
		super();
		this.state = {
			profileText: '',
			contactInfo: null,
			thirdPartyCredits: [],
			githubURL: ''
		};
	}

	contactInfo() {
		let result = null;
		if (this.state.contactInfo) {
			result = <Address contactInfo={this.state.contactInfo} />;
		}
		return result;
	}

	componentDidMount() {
		resume.loadResume().then(r => {
			this.setState({
				profileText: r.profile,
				contactInfo: r.contactInfo,
				thirdPartyCredits: r.thirdPartyTechnologies,
				githubURL: r.github
			});
		});
	}

	render () {
		return (
			<Card>
				<Card.Body>
					<p className="lead">{this.state.profileText}</p>
					{this.contactInfo()}
					<ThirdPartyCredits
						thirdPartyCredits={this.state.thirdPartyCredits} />
					<p>
						The source code is available on <ThirdPartyLink
							url={this.state.githubURL}
							text="Github" />.
					</p>
				</Card.Body>
			</Card>
		);
	}
}

export default About;
