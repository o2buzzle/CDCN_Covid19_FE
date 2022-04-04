import * as React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageLayout from "./pages/PageLayout";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products/Products";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/price" element={<Pricing />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
