import React, { Component } from 'react';
import './App.scss';
import { robots } from './robots';
import CardList from './CardList';
import SearchBox from './SearchBox';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: '',
		};
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	};

	render() {
		const filteredRobots = this.state.robots.filter((robot) => {
			return robot.name
				.toLowerCase()
				.includes(this.state.searchfield.toLowerCase());
		});
		return (
			<div className="tc">
				<h1>Robo-Friends</h1>
				<SearchBox searchChange={this.onSearchChange} />
				<br />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
