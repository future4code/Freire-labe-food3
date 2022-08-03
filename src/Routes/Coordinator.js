export const goToLoginPage = (navigate) => {
  navigate("/login");
};

<<<<<<< HEAD
export const goToSignUpPage = (navigate) => {
  navigate("/SignUp");
};
=======
  export const goToSignUpPage = (navigate) => {
    navigate("/SignUp");
  };
  
  export const goToSignAddress = (navigate) => {
    navigate("/cadastrarendereco")
}

  export const goToHomePage = (navigate) => {
    navigate("/");
  };
>>>>>>> bb0d9918c4ebd99cedd17b8f52de0f428dee4598

export const goToHomePage = (navigate) => {
  navigate("/");
};

// export const goToRestaurantDetailPage = (navigate, id) => {
//   navigate(`restaurantes/detalhes/${id}`);
// };
// export const goToRestaurantPage = (navigate,id) => {
//   navigate(`restaurantes/${id}`);
// };

// export const goToCartPage = (navigate) => {
//   navigate("/carrinho");
// };
// export const goToProfilePage = (navigate) => {
//   navigate("/perfil");
// };

// export const goToLastPage = (navigate) => {
//   navigate(-1);
// };

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
