import React from 'react';
import '../CSS/ProjectCard.css';

const ProjectCard = (props) => {
	return (
		<div className="project-card">
			<img className="project-img" src={props.image} alt="" />
			<div className="container-details">
				<h1>{props.title}</h1>
				<p className="p-description">{props.description}</p>
				<div className="buttons-card">
					<button className="buttons button1" type="button">
						<a href={props.website}>Live</a>
					</button>
					<button className="buttons button2" type="button">
						<a href={props.github}>Github</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
