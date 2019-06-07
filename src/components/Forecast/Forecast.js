import React, { Component, Fragment } from "react";
import CurrentForecast from "./Current/CurrentForecast";
import DailyForecast from "./Daily/DailyForecast";

class Forecast extends Component {
  render() {
    const { currently, daily, formattedAddress, flags } = this.props.data;
    const dailyData = daily.data;
    const units = flags.units;

    return (
      <Fragment>
        <CurrentForecast data={{ ...currently, formattedAddress, units }} />
        <DailyForecast data={dailyData} units={units} />
      </Fragment>
    );
  }
}
export default Forecast;
