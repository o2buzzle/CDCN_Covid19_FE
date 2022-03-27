import * as React from "react";
import Product from "././pages/Product";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/price" element={<Pricing />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
