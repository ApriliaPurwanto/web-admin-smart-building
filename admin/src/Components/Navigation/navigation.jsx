import React, { useState, useEffect } from "react";
import {  Button, Card, CardBody, CardHeader, Center, Flex, HStack, Heading, Icon, Image, SimpleGrid, Spacer, Stack, Text, VStack, color, textDecoration } from '@chakra-ui/react'
import {  MdLaptopChromebook, MdLightbulbOutline, MdHome, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import Sidebar from "./sidebar";
import DashboardPage from "../../Page/dashboardPage";

const Navigation = () =>{
    return(
        <Flex
            height='100vh'
            width='100%'
            bg='green'
        >
            <Sidebar/>

            <Flex
                height='100vh'
                width='100%'
                bg='white'
                flexDir='column'
            >
                <Flex
                    width='100%'
                    height='50px'
                    bg='white'
                    alignItems='center'
                >
                    <Heading
                        as='h5'
                        size='lg'
                        fontWeight='semibold'
                        paddingLeft='40px'
                        >
                        Dashboard
                    </Heading>
                </Flex>

                <Flex
                    width='100%'
                    height='calc(100vh - 50px)'
                    bg='white'
                    overflowY={'scroll'}
                    flexDir='column'
                    alignItems='center'
                >
                    <DashboardPage/>
                    
                </Flex>
            </Flex>
        </Flex>
    )
}
export default Navigation;