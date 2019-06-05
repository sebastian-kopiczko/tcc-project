import React, { Component } from "react";
import axios from "axios";

import AppContainer from "./components/AppContainer";
import Autocomplete from "react-google-autocomplete";
import Forecast from "./components/Forecast";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDataReady: false,
      units: "si",
      language: "pl",
      apiUrl:
        "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/055a53f5a6b68703fe86456a74f6da17/"
    };
  }

  getWheatherData = async () => {
    const { apiUrl, units, language, lat, lng } = this.state;
    try {
      const response = await axios.get(
        `${apiUrl}${lat},${lng}?units=${units}&lang=${language}`
      );
      this.setState({ weatherData: response.data, isDataReady: true });
    } catch (error) {
      console.error(error);
    }
  };

  setCoordinates = (lat, lng, address, apiCallback) => {
    this.setState(
      {
        lat: Number.parseFloat(lat).toPrecision(6),
        lng: Number.parseFloat(lng).toPrecision(6),
        formattedAddress: address
      },
      () => apiCallback()
    );
  };

  render() {
    const { isDataReady, weatherData, formattedAddress } = this.state;
    const forecastData = { ...weatherData, formattedAddress };
    return (
      <div className="app">
        <AppContainer>
          <Autocomplete
            style={{ width: "90%" }}
            types={["(cities)"]}
            onPlaceSelected={place => {
              console.log(place);
              const { formatted_address } = place;
              const { location } = place.geometry;
              this.setCoordinates(
                location.lat(),
                location.lng(),
                formatted_address,
                this.getWheatherData
              );
            }}
          />
          {isDataReady && Object.entries(weatherData).length !== 0 ? (
            <Forecast data={forecastData} />
          ) : null}
        </AppContainer>
      </div>
    );
  }
}
export default App;
