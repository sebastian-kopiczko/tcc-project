import React from 'react'
import Typography from "@material-ui/core/Typography";

const Temperature = props => {
  const { value, units, variant, color, component, isDecimal, showUnits } = props;
  
  let tempSign = units && units === "si" ? "°C" : "°F";
  
  return (
    <Typography 
      color={color} 
      variant={variant} 
      component={component}>
      {!isDecimal ? (
        parseInt(value, 10)
      ) : (
        value
      )}
      {showUnits ? (tempSign) : null}
    </Typography>
  )
}
export default Temperature;