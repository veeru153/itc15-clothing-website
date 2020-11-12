import React, { Component } from 'react';
import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';

class App extends Component {
  state = {
    type: 'all',
  }

  changeType = (type) => {
    this.setState({ type: type });
  }

  render() {
    return (
      <div className="App">
        <Navbar changeType={this.changeType} />
        <Container type={this.state.type} />
      </div>
    )
  }
}

export default App;
