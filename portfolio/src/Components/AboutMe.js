import React from 'react';
import '../CSS/AboutMe.css';
import github from '../img/github.png';
import linkedIN from '../img/linkedIn.png';

const AboutMe = (props) => {
	return (
		<div className="about-me">
			<div className="profile-image">
				<img className="profilePic" src={require('../img/profile.png')} alt="" />
			</div>

			<h2 className="h2-about">About Me</h2>
			<hr className="lets" />
			<div className="p-about">
				<p>
					I am a recent graduate from the Ryerson University Computer Science program. I have a background in
					Full Stack Development, using React.js + Spring Boot in my internship at Moneykey. In my spare time
					I produce music and a song I produced in 2019 went #1 trending in North America and Europe.
				</p>
			</div>
			<h2 className="h2-about">Education</h2>
			<hr className="lets" />
			<div className="p-about">
				<h3>Ryerson University</h3>
				<p>BSc Computer Science 2016-2020</p>
				<p>Dean's List 2019-2020</p>
			</div>

			<ul className="about-contact">
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
		</div>
	);
};

export default AboutMe;
