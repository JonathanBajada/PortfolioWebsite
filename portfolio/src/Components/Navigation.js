import React from 'react';
import './Navigation.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const Nav = () => {
	return (
		<div className="navigate">
			<ul>
				<li>
					<Link to="/">
						<img className="home-button" src={require('../img/homeButton.png')} alt="" />
					</Link>
				</li>
				<li>
					<Link to="/about">About Me</Link>
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
