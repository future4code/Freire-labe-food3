import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from '../Pages/Loginpage/LoginPage'
import SignUpPage from "../Pages/SignupPage/SignUpPage";
import CartPage from "../Pages/CartPage/CartPage";
import HomePage from "../Pages/HomePage/HomePage";
import RestaurantDetailPage from "../Pages/RestaurantDetailPage/RestaurantDetailPage";
import MyProfilePage from "../Pages/MyProfilePage/MyProfilePage";
import ProfileEditPage  from "../Pages/ProfileEditPage/ProfileEditPage";
import SignAddressPage  from "../Pages/SignAddressPage/SignAddresPage";
import RestaurantSearchPage from "../Pages/RestaurantSearchPage/RestaurantSearchPage";
import PageHome from "../Pages/PageHome/PageHome";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/restaurant/detail/:id" element={<RestaurantDetailPage />} />
        <Route path="/insert-address" element={<SignAddressPage />} />
        <Route path="/my-profile" element={<MyProfilePage/>}/>
        <Route path="/profile-edit" element={<ProfileEditPage/>}/>
        <Route path="/feed" element={<PageHome />} />
        <Route path="/search" element={<RestaurantSearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
