import React from 'react';
import './AboutMe.css';
import github from '../img/github.png';

const AboutMe = (props) => {
	return (
		<div>
			<h2>About Me!</h2>
			<div className="profile-image">
				<img className="profilePic" src={require('../img/profile.png')} alt="" />
			</div>
			<br />
			<h2 className="h2-about">About Me</h2>
			<hr className="lets" />
			<div className="p-about">
				<p>
					I am a Software Developer located in Toronto with a background in industrial automation and robotics
					looking to make the change to into the tech industry.
				</p>
			</div>
			<h2 className="h2-about">Education</h2>
			<hr className="lets" />
			<div className="p-about">
				<h3>Ryerson University</h3>
				<p>BSc Computer Science 2016-2020</p>
			</div>

			<ul className="about-contact">
				<li>
					<a href="https://github.com/JonathanBajada" target="_blank">
						<img src={github} alt="Github" width="40px" />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default AboutMe;

/*
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
			*/
