import React from 'react';

import resume from '../resume';

class App extends React.Component {
	render() {
		return (
			<div>
				<p>{resume.profile}</p>
				<p>{resume.contactInfo.street1}</p>
				<p>{resume.contactInfo.city}</p>
			</div>
		);
	}
}

export default App;
