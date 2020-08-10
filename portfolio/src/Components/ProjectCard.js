import React from 'react';
import '../CSS/Card.css';
import './ProjectCard.css';

const ProjectCard = (props) => {
	return (
		<div className="project-card">
			<img className="project-img" src={props.image} alt="" />
			<div className="container-details">
				<h1>{props.title}</h1>
				<p>{props.description}</p>
				<button>Live</button>
				<button>GitHub</button>
			</div>
		</div>
	);
};

export default ProjectCard;
