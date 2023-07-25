import React, { useState, useEffect } from "react";
import {
    Button,
    Card,
    CardBody,
    Flex,
    HStack,
    Heading,
    Icon,
    Stack,
    Text,
    VStack,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import {  MdLaptopChromebook, MdLightbulbOutline, MdHome, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { FiLogOut, FiPlus } from "react-icons/fi";
import { PieChart } from 'react-minimal-pie-chart';
import { useNavigate } from "react-router-dom";

const Room = () => {
    // const [ isSecond, changeImage ] = useState(false)
    // useEffect(() => {},[isSecond])

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
      };

    const navigateToDashboard = () => {
    navigate('/dashboard');
      };
    return(
        <Flex>
            <Flex
                w='250px'
                h='155vh'
                bg='#2F8286'
                flexDir='column'
            >

                <VStack>
                    <Text
                        color='#fff'
                        fontSize={24}
                        fontWeight={500}
                        marginTop='50px'
                    >
                        Hi, Admin!
                    </Text>
                </VStack>

                <VStack
                    m='50px auto'
                    spacing={5}
                    alignItems='center'
                    justifyContent='center'>

                    <HStack onClick={navigateToDashboard}
                        spacing={6}
                        w='120%'
                        justifyContent='center'
                        _hover={{ bg: '#265958', borderRadius:'5px' }}
                        cursor='pointer'
                        // background='white'
                        // borderRadius='4px'
                        py={2}>
                        <Icon as={MdLaptopChromebook} color='#fff' w={6} h={6}/>
                        <Text
                            fontWeight='regular'
                            fontSize={22}
                            color='#fff'>Dashboard</Text>
                    </HStack>

                    <HStack
                        spacing={6}
                        w='120%'
                        // justifyContent='left'
                        // _hover={{ bg: '#265958', borderRadius:'5px' }}
                        paddingLeft='30px'
                        cursor='pointer'
                        background='white'
                        borderRadius='4px'
                        py={2}>
                        <Icon as={MdHome} color='#2F8286' w={6} h={6}/>
                        <Text
                            fontWeight='medium'
                            fontSize={22}
                            color='#2F8286' >Room</Text>
                    </HStack>

                    <HStack
                        spacing={6}
                        w='120%'
                        // justifyContent='center'
                        _hover={{ bg: '#265958', borderRadius:'5px' }}
                        paddingLeft='30px'
                        cursor='pointer'
                        py={2}>
                        <Icon as={MdLightbulbOutline} color='#fff' w={6} h={6}/>
                        <Text
                            fontWeight='regular'
                            fontSize={22}
                            color='#fff'>Device</Text>
                    </HStack>

                    <HStack
                    marginTop='550px'>
                        <Button onClick={navigateToLogin} bg='#AB221D' color='white' _hover={{bg: '#D22B25'}} size='md' width='180px' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'>
                            <HStack>
                                <Text
                                    fontWeight='medium'
                                >Logout</Text>
                                <Icon as={FiLogOut}></Icon>
                            </HStack>
                        </Button>
                    </HStack>

                </VStack>
            </Flex>

            <Stack margin='30px' marginLeft='45px'>
                <Flex>
                    <Heading as='h5' size='lg' fontWeight='semibold'>
                        Room
                    </Heading>
                </Flex>

                <Flex marginTop='30px'>
                    <Button bg='#2F8286' color='white' _hover={{bg: '#265958'}} size='md' width='150px' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'  boxShadow="base" p="6">
                        <HStack spacing={3}>
                            <Icon as={FiPlus} color='white'/>
                                <Text>Add Room</Text>
                        </HStack>
                    </Button>
                </Flex>

            <Flex marginTop='30px'>
                <Card>
                    <CardBody>
                        <TableContainer>
                            <Table variant='simple'>
                                <TableCaption>Imperial to metric conversion factors</TableCaption>
                                <Thead>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                                </Thead>
                                <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4</Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48</Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444</Td>
                                </Tr>
                                </Tbody>
                                <Tfoot>
                                <Tr>
                                    <Th>To convert</Th>
                                    <Th>into</Th>
                                    <Th isNumeric>multiply by</Th>
                                </Tr>
                                </Tfoot>
                            </Table>
                        </TableContainer>
                    </CardBody>
                </Card>
                </Flex>
            </Stack>
        </Flex>
    )
}
export default Room;