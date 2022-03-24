import React from "react";
import GlobalStyles from "@mui/material/GlobalStyles";
import { CssBaseline } from "@mui/material";
function Homepage() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <div>Hello</div>
    </React.Fragment>
  );
}

export default Homepage;
