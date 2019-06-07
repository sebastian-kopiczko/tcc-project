import React, { Component, Fragment } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";

import AppContainer from "./components/AppContainer";
import Autocomplete from "react-google-autocomplete";
import Forecast from "./components/Forecast/Forecast";

import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import loader from "./assets/loader.gif"

class App extends Component {
  constructor() {
    super();
    this.state = {
      isDataReady: false,
      toggleLoader: false,
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
      this.setState({ weatherData: response.data, isDataReady: true, toggleLoader: false });
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

  onPlaceSelected = place => {
    const { formatted_address } = place;
    const { location } = place.geometry;
    this.setState({isDataReady: false, toggleLoader: true},      
    this.setCoordinates(
      location.lat(),
      location.lng(),
      formatted_address,
      this.getWheatherData
      )
    )
  };

  render() {
    const { isDataReady, toggleLoader, weatherData, formattedAddress } = this.state;
    const forecastData = { ...weatherData, formattedAddress };
    return (
      <Fragment>
        <CssBaseline />
        <AppContainer>
          <Autocomplete
            className="app__input"
            types={["(cities)"]}
            onPlaceSelected={place => this.onPlaceSelected(place)}
          />
          {isDataReady && Object.entries(weatherData).length !== 0 ? (
            <Forecast data={forecastData} />
          ) : null}
          {toggleLoader ? (
            <div className="loader">
            <img src={loader} alt="Ładowanie" />
            </div>
          ) : null}
        </AppContainer>
      </Fragment>
    );
  }
}
export default App;
