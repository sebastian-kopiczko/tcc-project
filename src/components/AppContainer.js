import React from "react";
import Box from "@material-ui/core/Box";

const AppContainer = props => {
  return (
    <div className="app__container">
        <Box
          display="flex"
          p={1}
          flexDirection="column"
          justifyContent="flex-start">
          {props.children}
        </Box>
    </div>
  );
};
export default AppContainer;
