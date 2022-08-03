import React from "react";
import { Switch, Routes, BrowserRouter } from "react-router-dom";
// import LoginPage from "../Pages/Loginpage/LoginPage";
// import SignUpPage from "../Pages/SignupPage/SignUpPage";
// import CartPage from "../Pages/Cartpage/CartPage";
import HomePage from "../Pages/Homepage/HomePage";
import SearchPage from "../Pages/SearchPage";

const Router = () => {
  return (
    <BrowserRouter>

      {/* <Routes>
        <Route index element={<HomePage />} />
        <Route path="/cadastro" element={<SignUpPage />} />
        <Route path="/carrinho" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes> */}

      <Switch>
        <Routes exact path="/feed">
          <HomePage />
        </Routes>
        
        <Routes exact path="/search">
          <SearchPage />
        </Routes>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
