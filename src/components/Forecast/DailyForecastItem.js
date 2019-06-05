import React from "react";
import Box from "@material-ui/core/Box";
import getDayName from "../../scripts/timestampToDayName";

const DailyForecastItem = props => {
  const { icon, temperatureMin, temperatureMax, time } = props.data;
  return (
    <Box display="flex" p={1} flexDirection="column">
      {icon} {temperatureMin} {temperatureMax} {getDayName(time)}
    </Box>
  );
};
export default DailyForecastItem;
