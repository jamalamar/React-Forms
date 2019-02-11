import React, { Component } from 'react';

export default class DogForm extends Component {

	state = {
		name: '',
		age: '',
		breed: ''
	}

	handleSubmit = (event) => {
	
		let dog = {
			name: this.state.name, 
			age: this.state.age, 
			breed: this.state.breed
		}
		event.preventDefault();
		
		this.props.addDog(dog)
	}

	handleChange = (event) => {
		this.setState({
        [event.currentTarget.name]: event.currentTarget.value
      })
	}


  render(){
    return (
    <form onSubmit={this.handleSubmit}>
      <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange}/>
      <input type='text' name='age' placeholder='Age' value={this.state.age} onChange={this.handleChange}/>
      <input type='text' name='breed' placeholder='Breed'value={this.state.breed} onChange={this.handleChange}/>
       <input type='submit' value='Submit'/>
    </form>
      )
  }
}
