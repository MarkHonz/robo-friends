import React, { useState, useEffect } from 'react';
import './App.scss';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';

const App = () => {
	const [robots, setRobots] = useState([]);
	const [searchfield, setSearchfield] = useState('');
	let [count, setCount] = useState(0);

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => {
				return response.json();
			})
			.then((users) => {
				setRobots(users);
			});
		console.log(count);
	}, [count]);

	useEffect(() => {
		console.log(robots);
	}, [robots]);

	const onSearchChange = (event) => {
		setSearchfield(event.target.value);
	};

	const filteredRobots = robots.filter((robot) => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase());
	});
	if (!robots.length) {
		return <h1 className="tc">Loading</h1>;
	} else {
		return (
			<div className="tc">
				<h1>Robo-Friends</h1>
				<button onClick={() => setCount(count++)}>Click Me!</button>
				<p>{count}</p>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
};

export default App;
