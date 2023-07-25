import React, { useState, useEffect } from "react";
import {  Button, Card, CardBody, CardHeader, Center, Flex, HStack, Heading, Icon, Image, SimpleGrid, Spacer, Stack, Text, VStack, color, textDecoration } from '@chakra-ui/react'
import {  MdLaptopChromebook, MdLightbulbOutline, MdHome, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
      };
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
                background='white'
                borderRadius='4px'
                paddingLeft='20px'
                py={2}>
                <Icon as={MdLaptopChromebook} color='#2F8286' w={6} h={6}/>
                <Text
                    fontWeight='medium'
                    fontSize={22}
                    color='#2F8286'>Dashboard</Text>
            </HStack>

            <HStack 
                spacing={6}
                w='90%'
                justifyContent='flex-start'
                cursor='pointer'
                background='#2F8286'
                borderRadius='4px'
                paddingLeft='20px'
                py={2}
                _hover={{ bg: '#265958', borderRadius:'5px' }}
                >
                <Icon as={MdHome} color='white' w={6} h={6}/>
                <Text
                    fontWeight='medium'
                    fontSize={22}
                    color='white'>Room</Text>
            </HStack>

            <HStack 
                spacing={6}
                w='90%'
                justifyContent='flex-start'
                cursor='pointer'
                background='#2F8286'
                borderRadius='4px'
                paddingLeft='20px'
                py={2}
                _hover={{ bg: '#265958', borderRadius:'5px' }}
                >
                <Icon as={MdLightbulbOutline} color='white' w={6} h={6}/>
                <Text
                    fontWeight='medium'
                    fontSize={22}
                    color='white'>Device</Text>
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