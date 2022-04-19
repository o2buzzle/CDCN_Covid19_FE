import { Route, Routes } from "react-router-dom";
import ProductDrawer from "../../components/ProductDrawer";
import ApiPage from "./APIPage";
import Installationguide from "./Installationguide";
import OCR from "./OCR";

function Products() {
  return (
    <>
      <ProductDrawer />
      <Routes>
        <Route path="/" element={<OCR />} />
        <Route path="/install" element={<Installationguide />} />
        <Route path="/api-document" element={<ApiPage />} />
      </Routes>
    </>
  );
}

export default Products;
