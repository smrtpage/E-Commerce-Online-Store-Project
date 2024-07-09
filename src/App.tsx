import React from "react";
import { Routes, Route } from "react-router-dom";
import NavbarLayout from "./layouts/NavbarLayout";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/auth/LoginPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NavbarLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
