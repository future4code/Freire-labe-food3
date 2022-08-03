import React from 'react'
import GlobalStateContext from "../Global/GlobalStateContext";
import {useState, useEffect} from 'react'

export default function GlobalState(props) {
   
    const [restaurante, setRestaurante] = useState({})
    const [listaRestaurantes, setListaRestaurantes] = useState([])
    const [searchInput, setSearchInput] = useState("")
   
    const states = {restaurante, listaRestaurantes, searchInput }
    const setters = {setRestaurante, setListaRestaurantes, setSearchInput }
    const requests = {}

    return (
        <GlobalStateContext.Provider value={{states, setters, requests}}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}
