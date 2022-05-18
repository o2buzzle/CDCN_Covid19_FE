import { Navigate, Route, Routes } from "react-router-dom";
import ProductDrawer from "../../components/ProductDrawer";
import ApiPage from "./APIPage";
import FileOner from "./FileOner";
import Tutorial from "./Tutorial";

function Products() {
  return (
    <>
      <ProductDrawer />
      <Routes>
        <Route path="" element={<FileOner />} />
        <Route path="tutorial" element={<Tutorial />} />
        <Route path="api-document" element={<ApiPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default Products;
