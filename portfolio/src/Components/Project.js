import React from 'react';
import '../CSS/Project.css';
import ProjectCard from './ProjectCard';
import visible from '../img/visible.jpg';

const Project = (props) => {
	return (
		<div className="container">
			<div className="child">
				<ProjectCard
					image={visible}
					title="Visible"
					description="			
	An application that caters towards people who are often marginalized. The application allows
	users to upload a txt file or a pdf and is given options to change the output. Changes include:
	font, font size, font weight, font colour, document background colour, underline all hyperlinks
	and etc. All selected changes will be applied and outputted onto the screen. The user can then
	save the processed txt file into their computer. Alternatively, user can upload a txt file, and
	choose between a female or male voice."
				/>
			</div>
			<div className="child i5">
				<ProjectCard
					className="child"
					image={visible}
					title="SQL Generator"
					description="			
	An application that caters towards people who are often marginalized. The application allows
	users to upload a txt file or a pdf and is given options to change the output. Changes include:
	font, font size, font weight, font colour, document background colour, underline all hyperlinks
	and etc. All selected changes will be applied and outputted onto the screen. The user can then
	save the processed txt file into their computer. Alternatively, user can upload a txt file, and
	choose between a female or male voice."
				/>
			</div>

			<div className="child">
				<ProjectCard
					className="child"
					image={visible}
					title="Customer Database Search"
					description="			
	An application that caters towards people who are often marginalized. The application allows
	users to upload a txt file or a pdf and is given options to change the output. Changes include:
	font, font size, font weight, font colour, document background colour, underline all hyperlinks
	and etc. All selected changes will be applied and outputted onto the screen. The user can then
	save the processed txt file into their computer. Alternatively, user can upload a txt file, and
	choose between a female or male voice."
				/>
			</div>

			<div className="child">
				<ProjectCard
					className="child"
					image={visible}
					title="React Pics"
					description="			
	An application that caters towards people who are often marginalized. The application allows
	users to upload a txt file or a pdf and is given options to change the output. Changes include:
	font, font size, font weight, font colour, document background colour, underline all hyperlinks
	and etc. All selected changes will be applied and outputted onto the screen. The user can then
	save the processed txt file into their computer. Alternatively, user can upload a txt file, and
	choose between a female or male voice."
				/>
			</div>
		</div>
	);
};

export default Project;
