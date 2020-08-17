import React from 'react';
import Nav from 'react-bootstrap/nav';
import BootStrapNavBar from 'react-bootstrap/Navbar';
//import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = () => {
	return (
		<BootStrapNavBar bg="primary" variant="dark">
			<Nav>
				<Nav.Item>
					<LinkContainer exact to="/">
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer exact to="/employment">
						<Nav.Link>Employment</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer exact to="/education">
						<Nav.Link>Education</Nav.Link>
					</LinkContainer>
				</Nav.Item>
				<Nav.Item>
					<LinkContainer exact to="/activities">
						<Nav.Link>Activities</Nav.Link>
					</LinkContainer>
				</Nav.Item>
			</Nav>
		</BootStrapNavBar>
	);
};

export default NavBar;
