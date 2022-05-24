import * as React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import HomePage from "./pages/HomePage";
import PageLayout from "./pages/PageLayout";
import Products from "./pages/Products/Products";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/*" element={<Products />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="team" element={<Team />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
