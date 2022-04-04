import React from "react";
import ProductDrawer from "./ProductDrawer";

function Layout({ children }) {
  return (
    <div>
      <ProductDrawer />
      {children}
    </div>
  );
}

export default Layout;
