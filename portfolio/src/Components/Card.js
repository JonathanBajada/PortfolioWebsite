import React from 'react';
import '../CSS/Card.css';

const Card = (props) => {
	return (
		<div>
			<img src={props} alt="" />
		</div>
	);
};

export default Card;
