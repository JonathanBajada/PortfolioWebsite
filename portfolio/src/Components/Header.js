import React from 'react';
import '../CSS/Header.css';
import Nav from './Navigation';
import github from '../img/github.png';
import linkedIN from '../img/linkedIn.png';

const Header = () => {
	return (
		<div className="main-header">
			<Nav />
			<header>
				<h1 className="h1-header">Jonathan Bajada</h1>
			</header>
			<h2 className="h2-header">Software Developer</h2>
			<ul className="about-contact">
				<li>
					<a href="https://github.com/JonathanBajada" target="_blank">
						<img src={github} alt="Github" width="40px" />
					</a>
				</li>
				<li>
					<a href="https://www.linkedin.com/in/jbajada" target="_blank">
						<img src={linkedIN} alt="Github" width="40px" />
					</a>
				</li>
			</ul>
		</div>
	);
};
export default Header;
