import React from 'react';
import Nav from './Navigation';
import Header from './Header';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Project from './Project';
import '../CSS/Main.css';

import { BrowserRouter, Route } from 'react-router-dom';

//MySkills List
//Map function calls on every element  in the array
const frontEnd = [ 'HTML', 'CSS', 'React.js', 'JavaScript', 'Bootstrap', 'Redux', 'jQuery' ];
const frontEndList = frontEnd.map((frontEnd) => <li>{frontEnd}</li>);
const backEnd = [ 'Node.js', 'Spring Boot', 'MySQL', 'MongoDB', 'Java', 'Python' ];
const backEndList = backEnd.map((backEnd) => <li>{backEnd}</li>);

const Home = () => {
	return (
		<div>
			<Header />
			<div className="personal-link" />
		</div>
	);
};

/*

*/

const AboutPage = () => {
	return (
		<div>
			<Nav />
			<br />
			<AboutMe />
		</div>
	);
};

const MySkills = () => {
	return (
		<div>
			<Nav />
			<Skills />
		</div>
	);
};

const MyProjects = () => {
	return (
		<div>
			<Nav />
			<br />
			<Project />
		</div>
	);
};

const App = () => {
	return (
		<div className="main-div">
			<BrowserRouter>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={AboutPage} />
				<Route path="/myskills" component={MySkills} />
				<Route path="/myprojects" component={MyProjects} />
			</BrowserRouter>
		</div>
	);
};
export default App;
