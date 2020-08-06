import React from 'react';
import './Skills.css';

const frontEnd = [ 'HTML', 'CSS', 'React.js', 'JavaScript', 'Bootstrap', 'Redux', 'jQuery' ];
const frontEndList = frontEnd.map((frontEnd) => <li>{frontEnd}</li>);
const backEnd = [ 'Node.js', 'Spring Boot', 'MySQL', 'MongoDB', 'Java', 'Python' ];
const backEndList = backEnd.map((backEnd) => <li>{backEnd}</li>);

const Skills = () => {
	return (
		<div>
			<h1 className="h-skills">Tool Box</h1>
			<div>
				<ul title="Frontend Skills" className="frontend-list">
					{frontEndList}
				</ul>
				<ul title="Backend Skills" className="backend-list">
					{backEndList}
				</ul>
			</div>
		</div>
	);
};

export default Skills;
