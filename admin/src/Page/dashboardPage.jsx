import React, { useState, useEffect } from "react";
import {  Button, Card, CardBody, CardHeader, Center, Flex, HStack, Heading, Icon, Image, SimpleGrid, Spacer, Stack, Text, VStack, color, textDecoration } from '@chakra-ui/react'
import {  MdLaptopChromebook, MdLightbulbOutline, MdHome, MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { PieChart } from 'react-minimal-pie-chart';
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const [ isSecond, changeImage ] = useState(false)
    useEffect(() => {},[isSecond])

    // const navigateToRoom = () => {
    //     navigate('/room');
    //   };
    return(
        <Stack>
            <SimpleGrid spacing={16} templateColumns='repeat(3, minmax(10px, 300px))' marginTop='20px'>
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
                                ]}
                            />
                        </Center>

                        <Center>
                            <Text fontWeight='semibold' fontSize='30px'>Active Device</Text>
                        </Center>
                    </CardBody>
                </Card>
            </SimpleGrid>

            <Flex marginTop='30px' marginBottom='30px'>
                <Card>
                    <Flex justifyContent='right'>
                        <Button
                            onClick={()=>changeImage(!isSecond)}
                            bg='white'
                            color='#2D777A'
                            _hover={{bg: 'white'}}
                            size='md'
                            width='180px'
                            borderRadius='15px'
                            fontFamily='sans-serif'
                            fontWeight='normal'
                            margin='20px'
                            boxShadow="base"
                            p="6">
                                
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
                                src='https://p1.pxfuel.com/preview/176/155/652/cat-landscape-animals-cute-cat-eyes.jpg'
                                alt='Chakra UI'
                                width='990px'
                                height='500px'
                            /> :
                            <Image
                                objectFit='cover'
                                src='https://media.istockphoto.com/id/1316920139/photo/white-angora-cat.jpg?s=612x612&w=0&k=20&c=4BjzdORizEkeSmTquuYyylKxe_C2qbbiOv4GmtJhlIk='
                                alt='Chakra UI'
                                width='990px'
                                height='500px'
                            />
                        }
                    </CardBody>
                </Card>
            </Flex> 
        </Stack>        
    )
}
export default DashboardPage;