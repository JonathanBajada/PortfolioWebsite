import React from 'react';
import Header from './Header';
import Card from './Card';
import Nav from './Navigation';
import Project from './Project';
import './Main.css';
import github from './github.png';
import linkedIN from '../IMG/LI-In-Bug.png';
import linkedBanner from '../IMG/LI-Logo.png';

import { BrowserRouter, Route } from 'react-router-dom';

//MySkills List
//Map function calls on every element  in the array
const frontEnd = [ 'HTML', 'CSS', 'React.js', 'JavaScript', 'Bootstrap', 'Redux', 'jQuery' ];
const frontEndList = frontEnd.map((frontEnd) => <li>{frontEnd}</li>);
const backEnd = [ 'Node.js', 'Spring Boot', 'MySQL', 'MongoDB', 'Java', 'Python' ];
const backEndList = backEnd.map((backEnd) => <li>{backEnd}</li>);

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
		</div>
	);
};

const MySkills = () => {
	return (
		<div>
			<Nav />
			<br />
			<ul className="frontend-list">{frontEndList}</ul>
			<ul className="backend-list">{backEndList}</ul>
		</div>
	);
};

const MyProjects = () => {
	return (
		<div>
			<Nav />
			<br />
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
