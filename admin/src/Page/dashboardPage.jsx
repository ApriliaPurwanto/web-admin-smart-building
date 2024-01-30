import React, { useState, useEffect } from "react";
import { Button, Card, CardBody, Center, Flex, HStack, Icon, Image, SimpleGrid, Stack, Text, } from '@chakra-ui/react'
import { MdArrowUpward, MdArrowDownward } from "react-icons/md";
import { PieChart } from 'react-minimal-pie-chart';
import axios from 'axios';

const DashboardPage = () => {
    const [isSecond, changeImage] = useState(false)
    const [device, setDevice] = useState(0)
    const [room, setRoom] = useState(0)

    useEffect(() => {
        const getDevice = () => {

            let token = localStorage.getItem("Token")
            axios.get(
                'https://itera-smartbuilding.com/firebases',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                }
            ).then((response) => {
                console.log(response.data.data.length)
                setDevice(response.data.data.length)
            }).catch((e) => {
                alert("Error :" + e)
            })
        }

        const getRoom = async () => {

            let token = localStorage.getItem("Token")
            await axios.get(
                'https://itera-smartbuilding.com/rooms',
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                }
            ).then((placement) => {
                console.log(placement.data.data.length)
                setRoom(placement.data.data.length)
            }).catch(e => alert(e))
        }
        getRoom()
        getDevice()
    }, [])

    useEffect(() => { }, [isSecond, room, device])

    // const navigateToRoom = () => {
    //     navigate('/room');
    //   };
    return (
        <Stack>
            <SimpleGrid spacing={16} templateColumns='repeat(3, minmax(10px, 307px))' marginTop='20px'>

                

                <Card color='#2F8286'>
                    <CardBody>
                        <Center>
                            <Text fontWeight='semibold' fontSize='80px'>{room}</Text>
                        </Center>

                        <Center>
                            <Text fontWeight='semibold' fontSize='30px'>Room</Text>
                        </Center>

                    </CardBody>
                </Card>

                <Card color='#2F8286' >
                    <CardBody justifyContent={"center"} alignItems={"center"} display={"flex"} flexDirection={"column"}>
                        <Center>
                            <Text fontWeight='semibold' fontSize='30px'>Welcome to</Text>
                        </Center>

                        <Center>
                            <Text fontWeight='semibold' fontSize='30px'>Smart building</Text>
                        </Center>

                    </CardBody>
                </Card>

                <Card color='#2F8286'>
                    <CardBody>
                        <Center>
                            <Text fontWeight='semibold' fontSize='80px'>{device}</Text>
                        </Center>

                        <Center>
                            <Text fontWeight='semibold' fontSize='30px'>Device</Text>
                        </Center>
                    </CardBody>
                </Card>

                {/* <Card color='#2F8286'>
                    <CardBody>
                        <Center>
                            <PieChart
                                label={(props) => { return props.dataEntry.value; }}
                                style={{ width: '120px', height: '120px' }}
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
                </Card> */}
            </SimpleGrid>

            <Flex marginTop='30px' marginBottom='30px'>
                <Card width='1050px'>
                    <Flex justifyContent='right'>
                        <Button
                            onClick={() => changeImage(!isSecond)}
                            bg='white'
                            color='#2D777A'
                            _hover={{ bg: 'white' }}
                            size='md'
                            width='180px'
                            borderRadius='15px'
                            fontFamily='sans-serif'
                            fontWeight='normal'
                            margin='20px'
                            boxShadow="base"
                            p="6">

                            {isSecond ?
                                <HStack spacing={6}>
                                    <Icon as={MdArrowUpward} color='#2D777A' w={6} h={6} />
                                    <Text>2nd Floor</Text>
                                </HStack> :
                                <HStack spacing={6}>
                                    <Icon as={MdArrowDownward} color='#2D777A' w={6} h={6} />
                                    <Text>1st Floor</Text>
                                </HStack>
                            }
                        </Button>
                    </Flex>

                    <CardBody>
                        {
                            isSecond ?
                                <div style={{ width: '100%', height: '500px', display: 'table' }}>
                                    <Flex
                                        position='absolute'
                                        height="125px"
                                        width='14.3%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >Ruang Rapat Kecil</p>
                                    </Flex>
                                    <Flex
                                        left='16%'
                                        position='absolute'
                                        height="125px"
                                        width='25%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >WR 1</p>
                                    </Flex>
                                    <Flex
                                        left='55%'
                                        position='absolute'
                                        height="125px"
                                        width='25%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >WR 2</p>
                                    </Flex>

                                    <Flex
                                        left='80%'
                                        position='absolute'
                                        height="125px"
                                        width='18%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >Ruang Sekretariat</p>
                                    </Flex>
                                    <Flex
                                        top='37%'
                                        left='80%'
                                        position='absolute'
                                        height="230px"
                                        width='18%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >Ruang Rektor</p>
                                    </Flex>
                                    <Flex
                                        top='53.5%'
                                        // left= '0%'
                                        position='absolute'
                                        height="270px"
                                        width='14.4%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >Ruang Rapat Besar</p>
                                    </Flex>

                                    <Image
                                        src='https://res.cloudinary.com/dteondhij/image/upload/v1692254126/Denah_Gedung_A-Page-2.drawio_2_smut9z.png'
                                        alt='Chakra UI'
                                        width='100%'
                                        height='500px'
                                    />

                                </div> :
                                <div style={{ width: '100%', height: '500px', display: 'table' }}>
                                    <Flex
                                        position='absolute'
                                        height="259px"
                                        width='14.4%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >Ruang Hukum Tata Laksana</p>
                                    </Flex>
                                    <Flex
                                        top='365px'
                                        position='absolute'
                                        height="220px"
                                        width='14.4%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >Ruang Transit Tamu</p>
                                    </Flex>
                                    <Flex
                                        left='170px'
                                        position='absolute'
                                        height="160px"
                                        width='24.9%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >International Office</p>
                                    </Flex>
                                    <Flex
                                        left='580px'
                                        position='absolute'
                                        height="160px"
                                        width='14.5%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >Humas</p>
                                    </Flex>
                                    <Flex
                                        left='730px'
                                        position='absolute'
                                        height="160px"
                                        width='13.3%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >Gudang</p>
                                    </Flex>
                                    <Flex
                                        left='869px'
                                        position='absolute'
                                        height="160px"
                                        width='10.75%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >WC Perempuan</p>
                                    </Flex>
                                    <Flex
                                        top='267px'
                                        left='869px'
                                        position='absolute'
                                        height="200px"
                                        width='10.75%'
                                        // backgroundColor = 'red'
                                        justifyContent='center'
                                        alignItems='center'
                                        _hover={{ bg: 'red' }}
                                        border='2px'
                                        borderColor='black'
                                    >
                                        <p style={{ textAlign: 'center' }} >WC Laki-Laki</p>
                                    </Flex>
                                    <Image
                                        src='https://res.cloudinary.com/dteondhij/image/upload/v1692253916/Denah_Gedung_A-Page-1.drawio_1_sggvvr.png'
                                        alt='Chakra UI'
                                        width='100%'
                                        height='500px'
                                    />
                                </div>
                        }
                    </CardBody>
                </Card>
            </Flex>
        </Stack>
    )
}
export default DashboardPage;