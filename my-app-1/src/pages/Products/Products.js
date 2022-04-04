import React from "react";
import { Route, Routes } from "react-router-dom";
import OCR from "../Products/OCR";
import ProductsLayout from "../Products/ProductsLayout";
import Installationguide from "./Installationguide";

function Products() {
  return (
    <ProductsLayout>
      <Routes>
        <Route path="/" element={<OCR />} />
        <Route path="/guide" element={<Installationguide />} />
      </Routes>
    </ProductsLayout>
  );
}

export default Products;
