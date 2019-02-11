import React, { Component } from 'react';


export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }



    handleSubmit = (event) => {
    // stop page from refreshing
    event.preventDefault();

    this.props.login();

  }

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
        <input type='text' name='username' placeholder='Username' value={this.state.userName} onChange={this.handleChange}/>
        <input type='password' name='password' placeholder='Password' value={this.state.password} onChange={this.handleChange}/>
        <input type='submit' value='Submit'/>
    </form>
    );
  }
};

