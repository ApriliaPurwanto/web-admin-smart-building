import React, { useState, useEffect } from "react";
import {  Button, Card, CardBody, CardHeader, Center, Flex, HStack, Heading, Icon, Image, SimpleGrid, Spacer, Stack, Text, VStack, color, textDecoration } from '@chakra-ui/react'
import {  MdLaptopChromebook, MdLightbulbOutline, MdHome } from "react-icons/md";
import { FiLogOut, FiSettings } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routePageName } from "../../Redux/action";
import Dashboard from "../../Page/dashboard";

const Sidebar = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
      };

    const dispatch = useDispatch();

	const patchRoute = (data) => {
		dispatch(routePageName(data));
	};
	const { routeName } = useSelector((state) => state.userReducer);
    return (
        <Flex
        height='100vh'
        width='280px'
        bg='#2F8286'
        flexDir='column'
        justifyContent='space-between'
    >
        <VStack
            spacing={5}
            alignItems='center'
            justifyContent='center'>

            <Text
                color='#fff'
                fontSize={24}
                fontWeight={500}
                marginTop='50px'
                marginBottom='50px'
            >
                Hi, Admin!
            </Text> 

            <HStack 
                spacing={6}
                w='90%'
                justifyContent='flex-start'
                cursor='pointer'
                _hover={routeName=='Dashboard'? { bg: 'white', borderRadius:'5px' } : { bg: '#265958', borderRadius:'5px' }}
                background={routeName=='Dashboard'? 'white':'#2F8286'}
                borderRadius='4px'
                paddingLeft='15px'
                py={2}>
                <Icon as={MdLaptopChromebook} color={routeName=='Dashboard'? '#2F8286':'white'} w={6} h={6}/>
                <Link
                to={'/admin/dashboard'}
                onClick={() => {
                    patchRoute('Dashboard')
                }}
            >
                <Text
                    fontWeight='medium'
                    fontSize={22}
                    color={routeName=='Dashboard'? '#2F8286':'white'}>Dashboard</Text>
                </Link>
            </HStack>

            <HStack 
                spacing={6}
                w='90%'
                justifyContent='flex-start'
                cursor='pointer'
                background={routeName=='Room'? 'white':'#2F8286'}
                borderRadius='4px'
                paddingLeft='15px'
                py={2}
                _hover={routeName=='Room'? { bg: 'white', borderRadius:'5px' } : { bg: '#265958', borderRadius:'5px' }}
                >
                <Icon as={MdHome} color={routeName=='Room'? '#2F8286':'white'} w={6} h={6}/>
                <Link
                to={'/admin/room'}
                onClick={() => {
                    patchRoute('Room')
                }}
            >
                <Text
                    fontWeight='medium'
                    fontSize={22}
                    color={routeName=='Room'? '#2F8286':'white'}>Room</Text>
                </Link>
            </HStack>

            <HStack 
                spacing={6}
                w='90%'
                justifyContent='flex-start'
                cursor='pointer'
                background={routeName=='Device'? 'white':'#2F8286'}
                borderRadius='4px'
                paddingLeft='15px'
                py={2}
                _hover={routeName=='Device'? { bg: 'white', borderRadius:'5px' } : { bg: '#265958', borderRadius:'5px' }}
                >
                <Icon as={MdLightbulbOutline} color={routeName=='Device'? '#2F8286':'white'} w={6} h={6}/>
                <Link
                to={'/admin/device'}
                onClick={() => {
                    patchRoute('Device')
                }}
            >
                <Text
                    fontWeight='medium'
                    fontSize={22}
                    color={routeName=='Device'? '#2F8286':'white'}>Device</Text>
                </Link>  
            </HStack>

            <HStack 
                spacing={6}
                w='90%'
                justifyContent='flex-start'
                cursor='pointer'
                background={routeName=='Management'? 'white':'#2F8286'}
                borderRadius='4px'
                paddingLeft='15px'
                py={2}
                _hover={routeName=='Management'? { bg: 'white', borderRadius:'5px' } : { bg: '#265958', borderRadius:'5px' }}
                >
                <Icon as={FiSettings} color={routeName=='Management'? '#2F8286':'white'} w={5} h={5}/>
                <Link
                to={'/admin/management'}
                onClick={() => {
                    patchRoute('Management')
                }}
            >
                <Text
                    fontWeight='medium'
                    fontSize={22}
                    color={routeName=='Management'? '#2F8286':'white'}>Management</Text>
                </Link>  
            </HStack>           
        </VStack>

        <Flex
            width='100%'
            marginBottom='40px'
            justifyContent='center'
            >
                <Button onClick={navigateToLogin} bg='#AB221D' color='white' _hover={{bg: '#D22B25'}} size='md' width='180px' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'>
                    <HStack>
                        <Text
                            fontWeight='medium'
                        >Logout</Text>
                        <Icon as={FiLogOut}></Icon>
                    </HStack>
                </Button>
            </Flex>
        
    </Flex>
    )
} 
export default Sidebar; 