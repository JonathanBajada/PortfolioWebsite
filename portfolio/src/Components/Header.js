import React from 'react';
import './Header.css';
import Nav from './Navigation';

const Header = () => {
	return (
		<div className="main-header">
			<Nav />
			<header>
				<h1 className="h1-header">Jonathan Bajada</h1>
			</header>
			<h2 className="h2-header">Software Developer</h2>
		</div>
	);
};
export default Header;
