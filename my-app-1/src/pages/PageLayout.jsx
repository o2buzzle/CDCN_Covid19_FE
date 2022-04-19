import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// eslint-disable-next-line react/prop-types
function PageLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PageLayout;
