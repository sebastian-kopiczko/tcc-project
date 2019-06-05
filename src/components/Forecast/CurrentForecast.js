import React, { Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const CurrentForecast = props => {
  const { formattedAddress, temperature, summary } = props.data;
  return (
    <Fragment>
      <Paper>
        <Typography variant="h4" component="h3">
          {summary}
        </Typography>
        <Typography component="p">{formattedAddress}</Typography>
        <Typography variant="h1" component="h2">
          {parseInt(temperature, 10)}°C
        </Typography>
      </Paper>
    </Fragment>
  );
};
export default CurrentForecast;
