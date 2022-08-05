export const goToLoginPage = (navigate) => {
  navigate("/login");
};

export const goToSignUpPage = (navigate) => {
  navigate("/signup");
};

export const goToSignAddress = (navigate) => {
  navigate("/insert-address");
};

export const goToHomePage = (navigate) => {
  navigate("/");
};

export const goToRestaurantDetailPage = (navigate, id) => {
  navigate(`/restaurants/details/${id}`);
};

export const goToRestaurantPage = (navigate,id) => {
  navigate(`/restaurants/${id}`);
};
  
  export const goToCartPage = (navigate) => {
    navigate("/cart");
  };
  export const goToProfilePage = (navigate) => {
    navigate("/my-profile");
  };
  
  export const goToLastPage = (navigate) => {
    navigate(-1);
  };

  export const goToEditPage = (navigate) =>{
    navigate("/profile-edit")
  }

  export const goToHome = (navigate) => {
    navigate("/feed");
  };
  
  export const goToSearch = (navigate) => {
    navigate("/search");
  };
  