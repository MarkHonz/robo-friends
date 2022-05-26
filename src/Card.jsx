import React from 'react';
import './Card.scss';

const Card = ({ name, email }) => {
	// const { name, email, id } = props;
	return (
		<div className="bg-light-green dib br3 pa3 ma2 tc grow bw2 shadow-5">
			<img src={`https://robohash.org/${name}??200x200`} alt="robo-friend" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
};

export default Card;
