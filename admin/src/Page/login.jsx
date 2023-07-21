import React from "react";
import { Input, InputGroup, InputLeftElement, Icon, AbsoluteCenter, Center, Stack, Button, Flex, Heading, Image, background } from '@chakra-ui/react'
import { MdPersonOutline, MdLockOutline } from "react-icons/md";
import '../Style/login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate('/dashboard');
      };
    return(
        <Flex className="background">
            <Flex w='100%' h='100vh' justifyContent='center' alignItems='center'>
            
            <Stack spacing={8} align='center'>
            <Heading as='h1' color='white' fontWeight='normal' fontFamily='sans-serif'>LOGIN</Heading>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <Icon as ={MdPersonOutline} color='black' />
                </InputLeftElement>
                <Input type='username' placeholder='Username' width='350px' bg='white' fontFamily='sans-serif'/>
            </InputGroup>

            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <Icon as ={MdLockOutline} color='black' />
                </InputLeftElement>
                <Input type='password' placeholder='Password' width='350px' bg='white' fontFamily='sans-serif'/>
            </InputGroup>

            <Button onClick={navigateToDashboard} bg='#083828' color='white' _hover={{bg: '#0D543B'}} size='md' width='350px' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'>
                Login
            </Button>
            </Stack>
            
            </Flex>
            </Flex>
    )
}

export default Login;