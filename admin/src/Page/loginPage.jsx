import React from "react";
import { Input, InputGroup, InputLeftElement, Icon, AbsoluteCenter, Center, Stack, Button, Flex, Heading, Image, background, InputRightElement, IconButton } from '@chakra-ui/react'
import { MdPersonOutline, MdLockOutline } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import '../Style/login.css';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate('/admin');
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
                <Input type={show ? 'text' : 'password'} placeholder='Password' width='350px' bg='white' fontFamily='sans-serif'/>
                <InputRightElement width='3rem'>
                    { show ?
                    <IconButton
                        height='35px'
                        bg='white'
                        _hover={{bg:'white'}}
                        icon={<HiEyeOff/>}
                        onClick={handleClick}/> :
                        <IconButton
                        height='35px'
                        bg='white'
                        _hover={{bg:'white'}}
                        icon={<HiEye/>}
                        onClick={handleClick}/>
                    }
                </InputRightElement>
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