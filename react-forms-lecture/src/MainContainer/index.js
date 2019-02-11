import React, { Component } from 'react';
import DogForm from './DogForm.js'



export default class MainContainer extends Component {
  render(){
    return (
    <div>
      <h1>Hello {this.props.username}</h1>
      <p>Add a new Dog!</p>
      <DogForm />
    </div>
      )
  }
}