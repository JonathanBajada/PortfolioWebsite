import React from 'react';
import './NavCSS.css';

const Nav = () => {
	return (
		<div className="navigate">
			<ul>
				<li>
					<a href="default.asp">About Me</a>
				</li>
				<li>
					<a href="skills.asp">My Skills</a>
				</li>
				<li>
					<a href="projects.asp">Projects</a>
				</li>
			</ul>
		</div>
	);
};

export default Nav;
