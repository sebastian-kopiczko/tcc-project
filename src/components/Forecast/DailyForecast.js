import React from "react";
import DailyForecastItem from "./DailyForecastItem";
import Box from "@material-ui/core/Box";

const DailyForecast = props => {
  const { data } = props;
  return (
    <Box display="flex" flexDirection="row">
      {data.map((dataElement, index) => (
        <DailyForecastItem key={index} data={dataElement} />
      ))}
    </Box>
  );
};
export default DailyForecast;
