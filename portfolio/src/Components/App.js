import React from 'react';
import Header from './Header';
import Card from './Card';
import Nav from './Navigation';
import './Main.css';

import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
	return (
		<div>
			<Nav />
			<br />
			<Header />
			<div className="personal-link">
				<ul>
					<li>
						<a href="https://github.com/JonathanBajada" target="_blank">
							GitHub
						</a>
					</li>
					<li>
						<a href="url" target="_blank">
							LinkedIn
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

const MySkills = () => {
	return (
		<div>
			<Nav />
			<br />
			<Card icon={'./logo192.png'} cardTitle="Front-end">
				<ul className="front-list">
					<li>HTML</li>
					<li>CSS</li>
					<li>React.js</li>
					<li>JavaScript</li>
					<li>Bootstrap</li>
					<li>Redux</li>
					<li>jQuery</li>
				</ul>
			</Card>
			<Card cardTitle="Back-end">
				<ul className="back-list">
					<li>Node.js</li>
					<li>MySQL</li>
					<li>MongoDB</li>
					<li>Spring Boot</li>
					<li>Java</li>
				</ul>
			</Card>
		</div>
	);
};

const MyProjects = () => {
	return (
		<div>
			<Nav />
			<br />
		</div>
	);
};

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Route path="/" exact component={PageOne} />
				<Route path="/myskills" component={MySkills} />
				<Route path="/myprojects" component={MyProjects} />
			</BrowserRouter>
		</div>
	);
};
export default App;
