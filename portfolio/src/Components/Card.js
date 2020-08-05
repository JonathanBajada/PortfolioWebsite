import React from 'react';
import '../CSS/Card.css';

const Card = (props) => {
	return (
		<div className="card-css">
			<div className="ui card">
				<div className="card-icon" />
				<div className="card-title">
					<h1>{props.cardTitle}</h1>
				</div>
				<div className="content">{props.children}</div>
				<div className="text">{props.script}</div>
			</div>
		</div>
	);
};

export default Card;
