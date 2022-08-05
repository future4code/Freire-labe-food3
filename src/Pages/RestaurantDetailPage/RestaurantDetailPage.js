import { React, useEffect, useState, useContext, useDisclosure } from "react";
import { goToLastPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
// import useProtectedPage from "../../hooks/useProtectedPage";
import GlobalContext from "../../Global/GlobalContext";
import SearchBar from "../../Components/SearchBar/SearchBar";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select
} from "@chakra-ui/react";


const RestaurantDetailPage = () => {
  const navigate = useNavigate();
  // useProtectedPage();
  const params = useParams();
  const { states, requests, setTers } = useContext(GlobalContext);

  const { cart } = states;
  const { setCart } = setters;
  const [selectedProduct, setSelectedProduct] = useState({});
  const [valor, setValor] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const categorias = [];

  const getCategories = () => {
    states.details.products &&
      states.details.products.map((categorias) => {
        categorias.push(categorias.categor);
      });
  };
  getCategories();

  const categorieUnrepeat = [...new Set(categorias)];

  const onClickCart = (produto) => {
    const newCart = [...cart];
    let onTheCart = false;
    for (let item of newCart) {
      if (item.id === produto.id) {
        item.quantity += valor;
        onTheCart = true;
      }
    }
    if (onTheCart === false) {
      newCart.push({ ...produto, quantity: valor });
    }
    setCart(newCart);
    onClose();
  };
  const removeFromCart = (item) => {
    if (item.quantity > 1) {
      const newCart = [...cart];
      for (let produto of newCart) {
        if (produto.id === item.id) {
          produto.quantity -= 1;
        }
        setCart(newCart);
      }
    } else {
      const newCart = cart.filter((produto) => {
        return produto.id !== item.id;
      });
      setCart(newCart);
    }
  };
  const productId = [];

  const getId = () => {
    states.cart &&
      states.cart.map((item) => {
        productId.push(item.id);
      });
  };
  getId();

  const onChangevalue = (event) => {
    setValor(event.target.value);
  };

  const onAddProduct = (produto) => {
    setSelectedProduct(produto);
    onOpen();
  };

  useEffect(() => {
    Request.getDetails(params.id);
  }, [states.cart]);

  return (
    <div>
    <Header titulo="Restaurante"/>

<Flex
  direction='column'
  align='center'
  width='100vw'
  padding='16px'
  marginBottom='50px'
  fontFamily={"'Roboto', sans-serif"}
/>
  <Box
    width='100%'
    maxW='328px'
    height='120px'
    borderRadius='8px 8px 0 0'
    marginBottom='12px'
    backgroundSize={'cover'}
    backgroundPosition='center'
    backgroundImage={states.detalhes.logoUrl}
  />
  <Box width='100%' maxW='328px' color='#b8b8b8'>
    <Box fontWeight='semibold' as='h3' color='#5CB646'>{states.detalhes.name}</Box>
    <Box marginBottom='16px'>
      <p>{states.detalhes.category}</p>
      <Box display='flex' gap='16px'>
        <p>{states.detalhes.deliveryTime} min</p>
        <p>Frete: R$ {states.detalhes.shipping},00</p>
      </Box>
      <p>{states.detalhes.address}</p>
    </Box>
  </Box>
  </div>
  );
};

export default RestaurantDetailPage
