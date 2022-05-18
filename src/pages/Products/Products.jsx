import { Navigate, Route, Routes } from "react-router-dom";
import ProductDrawer from "../../components/ProductDrawer";
import ApiPage from "./APIPage";
import FileOner from "./FileOner";
import Installationguide from "./Installationguide";

function Products() {
  return (
    <>
      <ProductDrawer />
      <Routes>
        <Route path="" element={<FileOner />} />
        <Route path="install" element={<Installationguide />} />
        <Route path="api-document" element={<ApiPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default Products;
