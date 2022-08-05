import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import { goToSignUpPage } from "../../Routes/Coordinator"
import { Button, Stack } from '@chakra-ui/react'
import RedLogo from "../../assets/RedLogo.png"
import { PageContainer } from "./LoginStyles"
import SplashScreen from "../../Components/SplashScreen/SplashScreen";

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  return (
    <PageContainer>
      <Stack direction='column' spacing={-4} align='center'>
      {loading ? (<SplashScreen setLoading={setLoading} />
      ) : (
        <>
      <img src={RedLogo} alt='logomarca - ifuture vermelha'/>
      <h3>Entrar</h3>
      <LoginForm />
      <button
        onClick={() => goToSignUpPage(navigate)}
      >Não possui conta? Cadastre-se
      </button>
      </>
      )}
      <Button colorScheme='black' variant='ghost'
      onClick={() => goToSignUpPage(navigate)}
      > Não Possui cadastro? Clique aqui.
      </Button>
      </Stack>
    </PageContainer>

  );
}

export default LoginPage;
