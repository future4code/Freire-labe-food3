export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToSignUpPage = (navigate) => {
  navigate("/SignUp");
};

export const goToHomePage = (navigate) => {
  navigate("/");
};

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
