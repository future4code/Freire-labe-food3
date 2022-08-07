import React from "react";
import Router from "./Routes/Router";
import { ChakraProvider, Flex } from '@chakra-ui/react'
import GlobalState from "./Global/GlobalState";

function App() {
  return (
    <ChakraProvider >
      <Flex m={'5'} h='800px' w="500px" border='10px solid black'  borderRadius={'25'} overflowY={"700px"} flexDirection={'column'}>
      <GlobalState> 
      
      <Router>
      </Router>
      
      </GlobalState>
      </Flex>
    </ChakraProvider>);
}
export default App;
