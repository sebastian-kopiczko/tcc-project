import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Temperature from '../../Layout/Temperature'

const CurrentForecast = props => {
  console.log(props)
  const { formattedAddress, temperature, apparentTemperature, summary, units, pressure, humidity } = props.data;
  const tempSign = units && units === "si" ? "°C" : "℉";
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      // align-items
    >
        <Typography 
          className="summary" 
          variant="h4"
          gutterBottom={true}
          component="h3">
          {summary}
        </Typography>
        <Temperature 
          value={temperature}
          units={units}
          variant="h1"
          component="h2"
          showUnits={true}
          isDecimal={false}
          />
          <Typography component="p">Temperatura odcz.: {apparentTemperature}{tempSign}</Typography>
        <Typography component="p">Ciśnienie: {pressure} hPa</Typography>
        <Typography component="p">Wilgotność: {humidity*100}%</Typography>
    {/* <Typography component="p">{formattedAddress}</Typography> */}
    </Box>
  );
};
export default CurrentForecast;
