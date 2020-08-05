import React from 'react';
import '../CSS/Project.css';
import Card from './Card';

const Project = (props) => {
	return (
		<div className="content-body">
			<article>
				<img className="proj-img" src={require('../img/visible.jpg')} alt="" />
				<h2>Visible</h2>
				<p>
					An application that caters towards people who are often marginalized. The application allows users
					to upload a txt file or a pdf and is given options to change the output. Changes include: font, font
					size, font weight, font colour, document background colour, underline all hyperlinks and etc. All
					selected changes will be applied and outputted onto the screen. The user can then save the processed
					txt file into their computer. Alternatively, user can upload a txt file, and choose between a female
					or male voice (if unselected the default voice will be female), the text will be automatically read
					by an artificial voice. The entire application will comply to the Web Content Accessibility
					Guidelines (WCAG).
				</p>
				<a
					className="live-button"
					href="http://visible.com.s3-website.ca-central-1.amazonaws.com/"
					class="button"
				>
					Live
				</a>
				<a
					className="git-button"
					href="http://visible.com.s3-website.ca-central-1.amazonaws.com/"
					class="button"
				>
					Github
				</a>
			</article>

			<article>
				<h2>Mozilla Firefox</h2>
				<p>
					Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most
					popular web browser since January, 2018.
				</p>
			</article>

			<article>
				<h2>Microsoft Edge</h2>
				<p>
					Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced
					Internet Explorer.
				</p>
			</article>
		</div>
	);
};

export default Project;
