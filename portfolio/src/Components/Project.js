import React from 'react';
import '../CSS/Project.css';
import ProjectCard from './ProjectCard';
import visible from '../img/visible.jpg';
import reactpics from '../img/searchbar.png';
import sqlgenerator from '../img/SQL_Generator.png';

const Project = (props) => {
	return (
		<div className="container">
			<div className="child c1">
				<ProjectCard
					image={visible}
					title="Visible"
					description="			
					An application that caters towards people who are often marginalized. The application allows
					users to upload a txt file or a pdf and is given options to change the output. Changes include:
					font, font size, font weight, font colour, document background colour, underline all hyperlinks
					and etc. "
					website={'http://visible.com.s3-website.ca-central-1.amazonaws.com/'}
					github={'https://github.com/JonathanBajada/JS-AccessibilityApp'}
				/>
			</div>
			<div className="child c2">
				<ProjectCard
					className="child"
					image={sqlgenerator}
					title="SQL Generator (No link: Sensitive Data)"
					description="			
					An application that allows the user to search through the database for existing loan documents and add and update loan documents into the database. "
					website={'http://visible.com.s3-website.ca-central-1.amazonaws.com/'}
					github={'https://github.com/JonathanBajada/JS-AccessibilityApp'}
				/>
			</div>
			<div className="child c3">
				<ProjectCard
					className="child"
					image={reactpics}
					title="React Pics"
					description="			
					Search bar handles API request that renders a list of pictures onto screen from unsplashed
					"
					website={'http://pics-react.s3-website.ca-central-1.amazonaws.com/'}
					github={'https://github.com/JonathanBajada/React-Pics'}
				/>
			</div>
		</div>
	);
};

export default Project;

/*
	An application that caters towards people who are often marginalized. The application allows
	users to upload a txt file or a pdf and is given options to change the output. Changes include:
	font, font size, font weight, font colour, document background colour, underline all hyperlinks
	and etc. All selected changes will be applied and outputted onto the screen. The user can then
	save the processed txt file into their computer. Alternatively, user can upload a txt file, and
	choose between a female or male voice."
*/
