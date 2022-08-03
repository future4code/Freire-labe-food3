import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "../Pages/Loginpage/LoginPage";
import SignUpPage from "../Pages/SignupPage/SignUpPage";
<<<<<<< HEAD
import CartPage from "../Pages/Cartpage/CartPage";
=======
import CartPage from "../Pages/Cartpage/CartPage"
>>>>>>> bb0d9918c4ebd99cedd17b8f52de0f428dee4598
import HomePage from "../Pages/Homepage/HomePage";

import RestaurantDetailPage from "../Pages/RestaurantDetailPage/RestaurantDetailPage";

import MyProfilePage from "../Pages/MyProfilePage/MyProfilePage";
import SignAddressPage  from "../Pages/SignAddressPage/SignAddresPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
<<<<<<< HEAD

        <Route path="/detalhes/:id" element={<RestaurantDetailPage />} />

        <Route path="/myProfile" element={<MyProfilePage />} />
=======
        <Route path="/cadastrarendereco" element={<SignAddressPage />} />
        <Route path="/myProfile" element={<MyProfilePage/>}/>
>>>>>>> bb0d9918c4ebd99cedd17b8f52de0f428dee4598
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
