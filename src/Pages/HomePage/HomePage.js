import React from "react";
import { goToLoginPage } from "../../Routes/Coordinator";
import { goToCartPage, goToProfilePage } from "../../Routes/Coordinator";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import RestaurantDetailPage from "../RestaurantDetailPage/RestaurantDetailPage";
import {useNavigate} from "react-router-dom"
import { goToHome } from "../../Routes/Coordinator";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>HOME PAGE</h1>
      <Button
        colorScheme="teal"
        variant="solid"
        onClick={() => goToLoginPage(navigate)}
      >
        Login
      </Button>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => goToCartPage(navigate)}
      >
        Carrinho
      </Button>
      <Button
        colorScheme="teal"
        variant="outline"
        onClick={() => goToProfilePage(navigate)}
      >
        perfil
      </Button>

      <RestaurantDetailPage/>
    </div>
  );
};

    return (
        <div>
            <h1>HOME PAGE</h1>
            <Button colorScheme='teal' variant='solid' onClick={()=> goToLoginPage(navigate)}>Login</Button>
        <Button  colorScheme='teal' variant='outline' onClick={()=> goToCartPage(navigate)}>Carrinho</Button>
        <Button  colorScheme='teal' variant='outline' onClick={()=> goToProfilePage(navigate)}>perfil</Button>
        <Button  colorScheme='teal' variant='outline' onClick={()=> goToHome(navigate)}>feed</Button>
</div>
)

export default HomePage;
