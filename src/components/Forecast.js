import React, { Component, Fragment } from "react";
import CurrentForecast from "./Forecast/CurrentForecast";
import DailyForecast from "./Forecast/DailyForecast";

class Forecast extends Component {
  render() {
    const { data } = this.props;
    const { currently, daily, formattedAddress } = data;
    return (
      <Fragment>
        <CurrentForecast data={{ ...currently, formattedAddress }} />
        <DailyForecast data={daily.data} />
      </Fragment>
    );
  }
}
export default Forecast;
