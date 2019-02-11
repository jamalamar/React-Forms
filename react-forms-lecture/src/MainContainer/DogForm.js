import React, { Component } from 'react';



export default class DogForm extends Component {

	state = {
		dogs: [
			{	
				name: '',
				age: 0,
				breed: ''
			},
		]
	}

	handleSubmit = (event) => {
    // stop page from refreshing
    event.preventDefault();
    this.props.login();

    }

  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <input type='text' name='name' placeholder='Name' value={this.state.dogs[0].name}/>
      <input type='number' name='age' placeholder='Age' value={this.state.dogs[0].age}/>
      <input type='text' name='breed' placeholder='Breed' value={this.state.dogs[0].breed}/>
    </form>
      )
  }
}
