import React, { useState } from "react";
import { Input, InputGroup, InputLeftElement, Icon, AbsoluteCenter, Center, Stack, Button, Flex, Heading, Image, background, InputRightElement, IconButton } from '@chakra-ui/react'
import { MdPersonOutline, MdLockOutline } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import '../Style/login.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate();
    const navigateToDashboard = () => {
        navigate('/admin');
    };

    const postDataLogin = async () => {
        await axios.post("https://itera-smartbuilding.com/users/signin",
            {
                "email": username,
                "password": password
            }).then((placement) => {
                console.log(placement.data.data)
                localStorage.setItem("Token", placement.data.data.token)
                navigateToDashboard()
                alert("berhasil masuk")
            }).catch(error => {
                alert("salah passwor atau email")
                console.log(error)
            })
    }
    return (
        <Flex className="background">
            <Flex w='100%' h='100vh' justifyContent='center' alignItems='center'>

                <Stack spacing={8} align='center'>
                    <Heading as='h1' color='white' fontWeight='normal' fontFamily='sans-serif'>LOGIN</Heading>
                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={MdPersonOutline} color='black' />
                        </InputLeftElement>
                        <Input type='username' placeholder='Username' width='350px' bg='white' fontFamily='sans-serif' onChange={(e) => setUsername(e.target.value)} />
                    </InputGroup>

                    <InputGroup>
                        <InputLeftElement pointerEvents='none'>
                            <Icon as={MdLockOutline} color='black' />
                        </InputLeftElement>
                        <Input type={show ? 'text' : 'password'} placeholder='Password' width='350px' bg='white' fontFamily='sans-serif' onChange={(e) => setPassword(e.target.value)} />
                        <InputRightElement width='3rem'>
                            {show ?
                                <IconButton
                                    height='35px'
                                    bg='white'
                                    _hover={{ bg: 'white' }}
                                    icon={<HiEyeOff />}
                                    onClick={handleClick} /> :
                                <IconButton
                                    height='35px'
                                    bg='white'
                                    _hover={{ bg: 'white' }}
                                    icon={<HiEye />}
                                    onClick={handleClick} />
                            }
                        </InputRightElement>
                    </InputGroup>

                    <Button onClick={postDataLogin} bg='#083828' color='white' _hover={{ bg: '#0D543B' }} size='md' width='350px' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'>
                        Login
                    </Button>
                </Stack>

            </Flex>
        </Flex>
    )
}

export default Login;