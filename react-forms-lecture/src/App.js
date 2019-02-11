import React, { Component } from 'react';
import Login from './Login';

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
        <Login login={this.login}/>
      </div>
    );
  }
}

export default App;
