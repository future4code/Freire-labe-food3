import React from "react";
import { goToLastPage } from "../../Routes/Coordinator";
import { useNavigate } from "react-router-dom";
import { Button,Flex } from '@chakra-ui/react'
 

function ProfilePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>PERFIL DO USUÁRIO</h1>
      <Button colorScheme='teal' variant='solid' onClick={() => goToLastPage(navigate)}>Voltar</Button>



    <Flex>
      
      <input 
      placeholder='e-mail'
        type='email'
      />
      <input 
        placeholder='name'
      />
      <input 
      placeholder='CPF'

      />
      </Flex>



    </div>
  );
}

export default ProfilePage;