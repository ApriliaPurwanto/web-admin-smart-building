import React, { useState, useEffect } from "react";
import {  Button, Card, CardBody, CardHeader, Center, Flex, HStack, Heading, Icon, Image, SimpleGrid, Spacer, Stack, Text, VStack, color, textDecoration } from '@chakra-ui/react'
import {  MdLaptopChromebook, MdLightbulbOutline, MdHome, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { PieChart } from 'react-minimal-pie-chart';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [ isSecond, changeImage ] = useState(false)
    useEffect(() => {},[isSecond])

    const navigate = useNavigate();
    const navigateToLogin = () => {
        navigate('/login');
      };

    const navigateToRoom = () => {
        navigate('/room');
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

                    <HStack 
                        spacing={6}
                        w='120%'
                        justifyContent='center'
                        // _hover={{ bg: '#265958', borderRadius:'5px' }}
                        cursor='pointer'
                        background='white'
                        borderRadius='4px'
                        py={2}>
                        <Icon as={MdLaptopChromebook} color='#2F8286' w={6} h={6}/>
                        <Text
                            fontWeight='medium'
                            fontSize={22}
                            color='#2F8286'>Dashboard</Text>
                    </HStack>

                    <HStack onClick={navigateToRoom}
                        spacing={6}
                        w='120%'
                        // justifyContent='left'
                        _hover={{ bg: '#265958', borderRadius:'5px' }}
                        paddingLeft='30px'
                        cursor='pointer'
                        py={2}>
                        <Icon as={MdHome} color='#fff' w={6} h={6}/>
                        <Text
                            fontWeight='regular'
                            fontSize={22}
                            color='#fff'>Room</Text>
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
                        Dashboard
                    </Heading>
                </Flex>

                <Flex marginTop='30px'>
                    
                    <SimpleGrid spacing={16} templateColumns='repeat(3, minmax(10px, 300px))'>
                    
                        <Card color='#2F8286'>
                            <CardBody>
                                <Center>
                                    <Text fontWeight='semibold' fontSize='80px'>05</Text>
                                </Center>
                                <Center>
                                    <Text fontWeight='semibold' fontSize='30px'>Room</Text>
                                </Center>
                            </CardBody>
                        </Card>
                        <Card color='#2F8286'>
                            <CardBody>
                                <Center>
                                    <Text fontWeight='semibold' fontSize='80px'>05</Text>
                                </Center>
                                <Center>
                                    <Text fontWeight='semibold' fontSize='30px'>Device</Text>
                                </Center>
                            </CardBody>
                        </Card>

                        <Card color='#2F8286'>
                            <CardBody>
                                <Center>
                                    <PieChart
                                    label={(props) => { return props.dataEntry.value;}}
                                    style={{width: '120px', height: '120px'}}
                                        data={[
                                            { title: 'Offline', value: 10, color: '#EB4D4D' },
                                            { title: 'Online', value: 15, color: '#27CBA2' },
                                            // { title: 'Three', value: 20, color: '#6A2135' },
                                        ]}
                                        />
                                </Center>
                                <Center>
                                    <Text fontWeight='semibold' fontSize='30px'>Active Device</Text>
                                </Center>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Flex>

                <Flex marginTop='30px'>

                        <Card>
                            <Flex justifyContent='right'>
                        <Button onClick={()=>changeImage(!isSecond)} bg='white' color='#2D777A' _hover={{bg: 'white'}} size='md' width='180px' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal' margin='20px' boxShadow="base" p="6">
                            { isSecond ?
                            <HStack spacing={6}>
                                <Icon as={MdArrowUpward} color='#2D777A' w={6} h={6}/>
                                <Text>2nd Floor</Text>
                            </HStack> :
                            <HStack spacing={6}>
                                <Icon as={MdArrowDownward} color='#2D777A' w={6} h={6}/>
                                <Text>1st Floor</Text>
                            </HStack>
                            }
                            
                        </Button>

                        </Flex>
                            <CardBody>
                            {
                                isSecond ?
                            <Image
                                objectFit='cover'
                                src='https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                                alt='Chakra UI'
                                width='1000px'
                                height='500px'
                            /> :
                            <Image
                                objectFit='cover'
                                src='https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/28064854/12.-Tips-Merawat-Anak-Kucing-Munchkin.jpg.webp'
                                alt='Chakra UI'
                                width='1000px'
                                height='500px'
                            />
                            }
                            </CardBody>
                        </Card>
                    </Flex>
            </Stack>
        </Flex>
    )
}

export default Dashboard;