import React, { Component } from 'react';
import DogForm from './DogForm.js'
import PuppyList from './PuppyList.js'



export default class MainContainer extends Component {

	state = {
		dogs: []
	}

	addDog = (dog) => {
		let newDogs = this.state.dogs
		newDogs.push(dog)
		this.setState({
			dogs: newDogs
		})
	}

  render(){

    return (
    <div>
      <h1>Hello {this.props.username}</h1>
      <p>Add a new Dog!</p>
      <DogForm addDog={this.addDog}/>
      <div className="list-wrapper">      
	   <PuppyList dogs={this.state.dogs}/>	    
      </div> 
    </div>
      )
  }
}