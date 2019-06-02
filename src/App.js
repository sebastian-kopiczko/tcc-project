import React, { Component } from 'react'
import Header from './components/Header'
import './App.css';
import axios from 'axios';
import Autocomplete from 'react-google-autocomplete';

class App extends Component {
  constructor(){
    super();
    this.state = {
      apiUrl: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/055a53f5a6b68703fe86456a74f6da17/'
    };
    this.getWheatherData = this.getWheatherData.bind(this)
  }
  async componentDidMount(){
   
  }

  async getWheatherData(coordinates){
    const { apiUrl } = this.state;
    try {
      console.log(`${apiUrl}${coordinates.lat},${coordinates.lng}`)
      const response = await axios.get(`${apiUrl}${coordinates.lat},${coordinates.lng}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  setCoordinates = (lat, lng) => {
    let coordinates = {lat: Number.parseFloat(lat).toPrecision(6), lng: Number.parseFloat(lng).toPrecision(6)}

    this.setState({lat: coordinates.lat, lng: coordinates.lng});
    this.getWheatherData(coordinates);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Autocomplete
          style={{width: '90%'}}
          onPlaceSelected={place => {
            const {location} = place.geometry;
            this.setCoordinates(location.lat(), location.lng());
          }}
          types={['(regions)']}
          componentRestrictions={{country: "pl"}}
        />
      </div>
    )
  }
}
export default App;
