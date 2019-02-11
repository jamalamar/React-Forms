
import React, { Component } from 'react';
import './App.css';
import Login from './Login';
import MainContainer from './MainContainer'
import DogForm from './MainContainer/DogForm.js'
import PuppyList from './MainContainer/PuppyList.js'

class App extends Component {

    state = {
        logged: false,
        username: ''
    }

    login = (username) => {
      this.setState({
        logged: true,
        username: username
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.logged ? <MainContainer username={this.state.username}/> : <Login login={this.login}/>}
      </div>
    );
  }
}

export default App;
