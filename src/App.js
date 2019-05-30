import React, { Component } from 'react'
import Header from './components/Header'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      apiUrl: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/055a53f5a6b68703fe86456a74f6da17/37.8267,-122.4233'
    };
  }
  async componentDidMount(){
    const { apiUrl } = this.state;
    try {
      const response = await axios.get(apiUrl);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <div>
        <Header></Header>
      </div>
    )
  }
}
export default App;
