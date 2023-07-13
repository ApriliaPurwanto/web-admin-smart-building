import React from "react";
import {  Flex, HStack, Icon, Text, VStack } from '@chakra-ui/react'
import {  MdLaptopChromebook, MdLightbulbOutline, MdHome } from "react-icons/md";

const Dashboard = () => {
    return(
        <Flex
            w='250px'
            h='100vh'
            bg='#2F8286'
            flexDir='column'
        >

            <VStack m='40px auto'>
                <Text
                    color='#fff'
                    fontSize={24}
                    fontWeight={500}
                >
                    Hi, Admin!
                </Text>
            </VStack>

            <VStack
                m='50px auto'
                spacing={12}
                alignItems='start'>

                <HStack spacing={6}>
                    <Icon as={MdLaptopChromebook} color='#fff' w={7} h={7}/>
                    <Text
                        fontSize={24}
                        color='#fff'>Dashboard</Text>
                </HStack>

                <HStack spacing={6}>
                    <Icon as={MdHome} color='#fff' w={7} h={7}/>
                    <Text
                        fontSize={24}
                        color='#fff'>Room</Text>
                </HStack>

                <HStack spacing={6}>
                    <Icon as={MdLightbulbOutline} color='#fff' w={7} h={7}/>
                    <Text
                        fontSize={24}
                        color='#fff'>Device</Text>
                </HStack>

            </VStack>

        </Flex>
    )
}

export default Dashboard;