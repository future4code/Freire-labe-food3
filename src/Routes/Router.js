import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/Loginpage/LoginPage";
import SignUpPage from "../Pages/SignupPage/SignUpPage";
import CartPage from "../Pages/CartPage/CartPage";
import HomePage from "../Pages/Homepage/HomePage";

import RestaurantDetailPage from "../Pages/RestaurantDetailPage/RestaurantDetailPage";

import MyProfilePage from "../Pages/MyProfilePage/MyProfilePage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/detalhes/:id" element={<RestaurantDetailPage />} />

        <Route path="/myProfile" element={<MyProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
