import React from 'react';
import './NavCSS.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="navigate">
			<ul>
				<li>
					<Link to="/">About Me</Link>
				</li>
				<li>
					<Link to="/myskills">My Skills</Link>{' '}
				</li>
				<li>
					<Link to="/myprojects">My Projects</Link>{' '}
				</li>
			</ul>
		</div>
	);
};

export default Nav;
