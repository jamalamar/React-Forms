import React, { Component } from 'react';
import DogForm from './DogForm.js'



class PuppyList extends Component {
	
	render() {
	
	const dogsComposed = this.props.dogs.map((item, index) => {
	return (
			<li key={index}>
				<h5>{item.name}</h5>
				<h5>{item.age}</h5>
				<h5>{item.breed}</h5>
			</li>)
	}
	)
		return (
				<ul>
					{dogsComposed}
				</ul>
		)
	}
}

export default PuppyList;