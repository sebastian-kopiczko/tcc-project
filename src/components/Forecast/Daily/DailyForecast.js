import React, { Component } from "react";
import DailyForecastItem from "./DailyForecastItem";
import Box from "@material-ui/core/Box";

class DailyForecast extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      forecastArray: this.props.data.slice(1),
      units: this.props.units
    });
  }
  render() {
    const { forecastArray, units } = this.state;

    return (
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
        className="forecast__daily"
      >
        {forecastArray && forecastArray.length > 0 ? (
          forecastArray.map((elem, index) => (
            <DailyForecastItem key={index} data={elem} units={units} />
          ))
        ) : (
          <span>Ładowanie</span>
        )}
      </Box>
    );
  }
}
export default DailyForecast;
