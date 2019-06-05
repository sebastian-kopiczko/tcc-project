import React, { Component } from 'react'
import Header from './components/Header'
import './App.css';
import axios from 'axios';
import Autocomplete from 'react-google-autocomplete';

class App extends Component {
  constructor(){
    super();
    this.state = {
      units: 'si',
      language: 'pl',
      apiUrl: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/055a53f5a6b68703fe86456a74f6da17/'
    };
  }

  getWheatherData = async () => {
    const { apiUrl, units, language, lat, lng } = this.state;
    try {
      const response = await axios.get(`${apiUrl}${lat},${lng}?units=${units}&lang=${language}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  setCoordinates = (lat, lng, apiCallback) => {
    this.setState({
      lat: Number.parseFloat(lat).toPrecision(6), 
      lng: Number.parseFloat(lng).toPrecision(6)
    }, () => apiCallback());
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Autocomplete
          style={{width: '90%'}}
          onPlaceSelected={place => {
            const {location} = place.geometry;
            this.setCoordinates(location.lat(), location.lng(), this.getWheatherData);
          }}
          types={['(regions)']}
          componentRestrictions={{country: "pl"}}
        />
      </div>
    )
  }
}
export default App;
