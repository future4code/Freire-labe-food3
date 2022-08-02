import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/Loginpage/LoginPage";
import SignUpPage from "../Pages/SignupPage/SignUpPage";
import CartPage from "../Pages/Cartpage/CartPage";
import HomePage from "../Pages/Homepage/HomePage";
import RestaurantDetailPage from "../Pages/RestaurantDetailPage/RestaurantDetailPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/detalhes/:id" element={<RestaurantDetailPage/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
