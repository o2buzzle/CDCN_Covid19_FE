import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// eslint-disable-next-line react/prop-types
function PageLayout({ children }) {
  return (
    <div>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />
      <CssBaseline />
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
