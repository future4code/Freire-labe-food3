import React,{ useContext, useEffect, useState} from "react";
/* import { goToLoginPage } from "../../Routes/Coordinator";
import { goToCartPage } from "../../Routes/Coordinator"; */
import {useHistory} from "react-router-dom"
import { BASE_URL } from '../../Constants/urls';
import axios from "axios";
import SearchBar from "../../Components/SearchBar/SearchBar"
import FooterMenu from "../../Components/FooterMenu/footerMenu"
import CardRestaurante from "../../Components/CardRestaurante/CardRestaurante"
import GlobalStateContext from "../../Global/GlobalStateContext";
import useRequestData from '../../CustomHooks/useRequestData';
import HomeDiv from "./styles"
import Loading from '../../Components/Loading/index'
import useProtectedPage from '../../CustomHooks/useProtectedPage'

export default function HomePage() {
    useProtectedPage()
    
    const {states, setters, requests} = useContext(GlobalStateContext)
    const [emAndamento, setEmAndamento]  = useState('')
    const history = useHistory();
  
  
   
    useEffect (() =>{
  
      const headers ={
        headers:{
            auth:localStorage.getItem('token')
        }
    }
      axios.get(`${BASE_URL}/active-order`, headers)    
      .then((response) =>{
        if(response.data){      
          setEmAndamento(response.data)
        }
      }) 
      .catch((error) =>{
      }) 
    
     }, [])
  
 
  const listaDeRestaurantes = useRequestData(`${BASE_URL}/restaurants`, {})
  
    if (!listaDeRestaurantes.restaurants) {
      return <HomeDiv><Loading className="loading"/></HomeDiv>
    }
  
    const filteredArray = listaDeRestaurantes.restaurants.filter(e => {
      return e.category === states.filter
    })
  
  
    return (
      <HomeDiv>
      
        <SearchBar />
      
        {states.filter === "" ? listaDeRestaurantes.restaurants.map(e => {
          return <CardRestaurante key={e.id} id={e.id} img={e.logoUrl} nome={e.name} tempoDeEntrega={e.deliveryTime} frete={e.shipping} />
        })
          : filteredArray.map(e => {
            return <CardRestaurante key={e.id} id={e.id} img={e.logoUrl} nome={e.name} tempoDeEntrega={e.deliveryTime} frete={e.shipping} />
          })}

        <FooterMenu page={"home"} />
      </HomeDiv>
    );
  }
  