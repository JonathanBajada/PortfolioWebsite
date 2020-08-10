import React from 'react';
import './Skills.css';
import Tools from '../img/ToolsBoxSkills.jpg';
import Tool2 from '../img/ToolsBox4.jpg';

const frontEnd = [ 'React.js', 'JavaScript', 'HTML', 'CSS', , 'Bootstrap', 'Redux', 'jQuery' ];
const frontEndList = frontEnd.map((frontEnd) => <li>{frontEnd}</li>);
const backEnd = [ 'Spring Boot', 'Node.js', 'MySQL', 'MongoDB', 'Java' ];
const backEndList = backEnd.map((backEnd) => <li>{backEnd}</li>);

const Skills = () => {
	return (
		<div>
			<div className="tool-flex">
				<img className="tools-image" src={Tool2} alt="" />
			</div>

			<ul title="Frontend Skills" className="frontend-list">
				{frontEndList}
			</ul>
			<ul title="Backend Skills" className="backend-list">
				{backEndList}
			</ul>
		</div>
	);
};

export default Skills;
