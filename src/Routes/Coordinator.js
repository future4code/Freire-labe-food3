export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToSignUpPage = (navigate) => {
  navigate("/SignUp");
};

export const goToHomePage = (navigate) => {
  navigate("/");
};

<<<<<<< HEAD
export const goToRestaurantDetailPage = (navigate, id) => {
  navigate(`restaurantes/detalhes/${id}`);
};
export const goToRestaurantPage = (navigate,id) => {
  navigate(`restaurantes/${id}`);
};

export const goToCartPage = (navigate) => {
  navigate("/carrinho");
};
export const goToProfilePage = (navigate) => {
  navigate("/perfil");
};

export const goToLastPage = (navigate) => {
  navigate(-1);
};
=======
  
//   export const goToRestaurantDetailPage = (navigate, id) => {
//     navigate(`/detalhes/${id}`);
//   };
  
  export const goToCartPage = (navigate) => {
    navigate("/carrinho");
  };
  export const goToProfilePage = (navigate) => {
    navigate("/myProfile");
  };
  
  export const goToLastPage = (navigate) => {
    navigate(-1);
  };
  
>>>>>>> b20535d5a7ae25af9a96053304a801415df60670
