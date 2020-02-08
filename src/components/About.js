import React from 'react';
import ThirdPartyLink from './ThirdPartyLink';

import resume from '../resume';

class About extends React.Component {
	render () {
		return (
			<div>
				<p className="lead">{resume.profile}</p>

				<address>
					{resume.contactInfo.street1},&nbsp;
					{resume.contactInfo.street2}<br />
					{resume.contactInfo.city},&nbsp;
					{resume.contactInfo.province},&nbsp;
					{resume.contactInfo.postalCode}<br />
					Home Phone: <a
						href={`tel:${resume.contactInfo.homePhone}`}>
						{resume.contactInfo.homePhone}
					</a><br />
					Mobile Phone: <a
						href={`tel:${resume.contactInfo.mobilePhone}`}>
						{resume.contactInfo.mobilePhone}
					</a><br />
					<a href={`mailto:${resume.contactInfo.email}`}>
						{resume.contactInfo.email}
					</a><br />
					<ThirdPartyLink url={resume.contactInfo.linkedInURL}
						text={resume.contactInfo.linkedInURL}/>
				</address>

				<p>
					This site was built using the following technologies:
					<ul>
						<li>
							<ThirdPartyLink url="https://reactjs.org/"
								text="React" />
						</li>
						<li>
							<ThirdPartyLink
								url="https://reacttraining.com/react-router/"
								text="React Router" />
						</li>
						<li>
							<ThirdPartyLink url="https://getbootstrap.com/"
								text="Bootstrap" />
							&nbsp;and&nbsp;
							<ThirdPartyLink
								url="https://react-bootstrap.github.io/"
								text="React Bootstrap" />
						</li>
						<li>
							<ThirdPartyLink
								url="https://babeljs.io/"
								text="Babel" />
						</li>
						<li>
							<ThirdPartyLink
								url="https://webpack.js.org/"
								text="Webpack" />
						</li>
					</ul>

					The source code is available at <ThirdPartyLink
						url="https://github.com/AaronWizard/portfolio"
						text="hosted on Github" />.
				</p>
			</div>
		);
	}
}

export default About;
