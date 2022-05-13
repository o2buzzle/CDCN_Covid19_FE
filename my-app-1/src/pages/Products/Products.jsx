import { Route, Routes } from "react-router-dom";
import ProductDrawer from "../../components/ProductDrawer";
import ApiPage from "./APIPage";
import FileOner from "./FileOner";
import Installationguide from "./Installationguide";
import OCR from "./OCR";

function Products() {
  return (
    <>
      <ProductDrawer />
      <Routes>
        <Route path="/" element={<FileOner />} />
        <Route path="install" element={<Installationguide />} />
        <Route path="api-document" element={<ApiPage />} />
        <Route path="test" element={<OCR />} />
      </Routes>
    </>
  );
}

export default Products;
