import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Flex, HStack, Heading, Input, Select, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { routePageName } from "../Redux/action";
import { useEffect, useState } from "react";
import axios from 'axios';

const AddRoomPage = () => {
    const toast = useToast()

    const dispatch = useDispatch();

    const [name, setName] = useState('')
    const [desc, setDesc] = useState('')
    const [image, setImage] = useState('')
    const [status, setStatus] = useState('')
    const [peopleCount, setPeopleCount] = useState('')


    const onSubmit = () => {

        let token = localStorage.getItem("Token")


        axios.post(
            "https://itera-smartbuilding.com/rooms/",
            {
                "name": name,
                "description": desc,
                "image": image,
                "status": status,
                "people_count": peopleCount
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


    useEffect(() => {
        const patchRoute = () => {
            dispatch(routePageName('Room'));
        };

        patchRoute()
    }, [])

    return (
        <Flex
            bg='white'
            height='100vh'
            width='100%'
            paddingLeft='40px'
        >
            <Stack>
                <Flex
                    height='30px'
                    width='100%'
                    bg='white'
                    alignItems='center'>

                    <Breadcrumb spacing='8px' separator={<FiChevronRight color='gray.500' />}>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>Room</BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink>Add Room</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>

                <Flex marginTop='20px'>
                    <Card width='1050px'>
                        <CardBody>
                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Name</Text>
                                    <Input variant='outline' placeholder='Room Name' onChange={(e) => setName(e.target.value)} />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Link Image</Text>
                                    <Input variant='outline' placeholder='Link Image' onChange={(e) => setImage(e.target.value)} />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Description</Text>
                                    <Textarea placeholder='Here is a sample Description' onChange={(e) => setDesc(e.target.value)} />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Link Status</Text>
                                    <Input variant='outline' placeholder='Link Status' onChange={(e) => setStatus(e.target.value)} />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Link People</Text>
                                    <Input variant='outline' placeholder='Link People' onChange={(e) => setPeopleCount(e.target.value)} />
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

export default AddRoomPage;