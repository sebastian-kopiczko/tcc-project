import React from "react";
import Box from "@material-ui/core/Box";
import Skycons from "react-skycons";
import Typography from "@material-ui/core/Typography";

import getDayName from "../../../scripts/getDayName";
import getIconName from "../../../scripts/getIconName";
import Temperature from "../../Layout/Temperature";

const DailyForecastItem = props => {
  const { units } = props;
  const { icon, temperatureMin, temperatureMax, time } = props.data;

  return (
    <Box display="flex" flexGrow={1} flexDirection="column" alignItems="center">
      <Typography variant="overline" display="block">
        {getDayName(time, "PL-pl")}
      </Typography>
      <Box display="flex" flexDirection="row">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Temperature
            value={temperatureMin}
            component="p"
            showUnits={false}
            isDecimal={false}
          />
          <Temperature
            value={temperatureMax}
            showUnits={false}
            component="p"
            isDecimal={false}
          />
        </Box>
        <Skycons
          width="50%"
          height="40%"
          color="black"
          icon={getIconName(icon)}
          autoplay={true}
        />
      </Box>
    </Box>
  );
};
export default DailyForecastItem;
