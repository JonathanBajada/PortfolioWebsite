import React from 'react';
import './Project.css';
import Card from './Card';

const Project = (props) => {
	return (
		<div className="content-body">
			<article>
				<h2>Visible</h2>
				<p>
					Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most
					popular web browser today!
				</p>
				<a href="http://visible.com.s3-website.ca-central-1.amazonaws.com/" class="button">
					Click Here
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
