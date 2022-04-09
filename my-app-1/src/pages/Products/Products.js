import React from "react";
import { Route, Routes } from "react-router-dom";
import OCR from "../Products/OCR";
import ProductsLayout from "../Products/ProductsLayout";
import ApiPage from "./APIPage";
import Installationguide from "./Installationguide";

function Products() {
  return (
    <ProductsLayout>
      <Routes>
        <Route path="/" element={<OCR />} />
        <Route path="/install" element={<Installationguide />} />
        <Route path="/api-document" element={<ApiPage />} />
      </Routes>
    </ProductsLayout>
  );
}

export default Products;
