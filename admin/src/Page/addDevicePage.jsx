import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Flex, HStack, Heading, Input, Select, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { routePageName } from "../Redux/action";
import { useEffect, useState } from "react";
import axios from 'axios';


const AddDevicePage = () => {
    const toast = useToast()
    const dispatch = useDispatch();

    const patchRoute = () => {
        dispatch(routePageName('Device'));
    };
    const [idRoom, setIdRoom] = useState('')
    const [name, setName] = useState('')
    const [linkControl, setControl] = useState('')
    const [linkMonitor, setMonitor] = useState('')
    const [satuan, setSatuan] = useState('')


    const onSubmit = () => {
        let token = localStorage.getItem("Token")


        axios.post(
            "https://itera-smartbuilding.com/firebases",
            {
                "room_id": idRoom,
                "name": name,
                "link_controlling": linkControl,
                "link_monitoring": linkMonitor,
                "satuan": satuan
            },
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            }
        ).then((response) => {
            console.log(response)
            alert("Sukses")
        }).catch((e) => {
            alert(`Error : ${e}`)
        })
    }

    useEffect(() => { patchRoute() }, [])


    return (
        <Flex
            bg='white'
            height='100vh'
            width='100%'
            paddingLeft='40px'
            paddingBottom='20px'
        >
            <Stack>
                <Flex
                    height='30px'
                    width='100%'
                    bg='white'
                    alignItems='center'>
                    {/* <Heading
                            as='h4'
                            size='md'
                            fontWeight='medium'>
                                Room List
                        </Heading> */}

                    <Breadcrumb spacing='8px' separator={<FiChevronRight color='gray.500' />}>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>Device List</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>Add Device</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>


                <Flex marginTop='20px'>
                    <Card width='1050px'>
                        <CardBody>
                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>ID Room</Text>
                                    <Input variant='outline' placeholder='Device Name' onChange={(e) => setIdRoom(e.target.value)} />
                                </Stack>
                            </Flex>
                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Name</Text>
                                    <Input variant='outline' placeholder='Device Name' onChange={(e) => setName(e.target.value)} />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Satuan</Text>
                                    <Input variant='outline' placeholder='Device Name' onChange={(e) => setSatuan(e.target.value)} />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Link Controlling</Text>
                                    <Input variant='outline' placeholder='Device Name' onChange={(e) => setControl(e.target.value)} />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Link Monitoring</Text>
                                    <Input variant='outline' placeholder='Device Name' onChange={(e) => setMonitor(e.target.value)} />
                                </Stack>
                            </Flex>


                        </CardBody>
                    </Card>
                </Flex>

                <Flex
                    height='40px'
                    width='100%'
                    bg='white'
                    marginTop='20px'
                    justifyContent='right'
                >
                    <Button
                        bg='#2F8286'
                        color='white'
                        _hover={{ bg: '#265958' }}
                        size='md'
                        width='130px'
                        borderRadius='15px'
                        fontFamily='sans-serif'
                        fontWeight='normal'
                        boxShadow="base"
                        onClick={onSubmit}
                    >
                        Save
                    </Button>
                </Flex>
            </Stack>
        </Flex>
    )
}

export default AddDevicePage;