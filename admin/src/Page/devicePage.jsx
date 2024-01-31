import {
    Button,
    Card,
    CardBody,
    Flex,
    HStack,
    Icon,
    Stack,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    IconButton,
    BreadcrumbItem,
    Breadcrumb,
    BreadcrumbLink,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { FiChevronRight, FiPlus } from "react-icons/fi";
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const DevicePage = () => {
    const navigate = useNavigate();
    const navigateToAddDevice = () => {
        navigate('add-device');
    };

    const navigateToEditDevice = () => {
        navigate('edit-device');
    };

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(true)

    const { isOpen, onOpen, onClose } = useDisclosure()

    const deleteData = (id) => {
        console.log(id)
        let token = localStorage.getItem("Token")

        axios.delete(
            'https://itera-smartbuilding.com/firebases/' + id,
            {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
            }
        ).then((response) => {
            console.log(response.data.data)
            alert("Sukses")
            window.location.reload()
            
        }).catch((e) => {
            alert("Error :" + e)
        }
        )
    }

    useEffect(() => {
        const getData = () => {

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
                console.log(response.data.data)
                setData(response.data.data)
            }).catch((e) => {
                alert("Error :" + e)
            }).finally(() => setLoading(false))
        }

        getData()
    }, [])

    if (isLoading) {
        return <h1>Loading</h1>
    }

    return (
        <Flex
            bg='white'
            height='100vh'
            width='100%'
            paddingLeft='40px'>
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
                                Device List
                        </Heading> */}
                    <Breadcrumb spacing='8px' separator={<FiChevronRight color='gray.500' />}>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink href='#'>Device List</BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                </Flex>

                <Flex
                    height='50px'
                    width='100%'
                    bg='white'
                    marginTop='15px'>
                    <Button onClick={navigateToAddDevice} bg='#2F8286' color='white' _hover={{ bg: '#265958' }} size='md' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal' boxShadow="base">
                        <HStack spacing={3}>
                            <Icon as={FiPlus} color='white' />
                            <Text>Add Device</Text>
                        </HStack>
                    </Button>
                </Flex>

                <Card>
                    <CardBody>
                        <TableContainer>
                            <Table variant='simple'>
                                <Thead>
                                    <Tr>
                                        <Th>No.</Th>
                                        <Th>Device Name</Th>
                                        <Th>Link Monitoring</Th>
                                        <Th>Link Controlling</Th>
                                        <Th>Satuan</Th>
                                        <Th>Action</Th>
                                    </Tr>
                                </Thead>
                                {
                                    data.map((value, index) => {
                                        return (
                                            <Tbody>
                                                <Tr>
                                                    <Td isNumeric>{index + 1}</Td>
                                                    <Td>{value.name}</Td>
                                                    <Td>{value.link_monitoring}</Td>
                                                    <Td>{value.link_controlling}</Td>
                                                    <Td>{value.satuan}</Td>
                                                    <Td>
                                                        <HStack>
                                                            {/* <IconButton onClick={navigateToEditDevice}
                                                                variant='ghost'
                                                                colorScheme='teal'
                                                                fontSize='20px'
                                                                icon={<MdEdit />}
                                                            /> */}
                                                            <IconButton onClick={onOpen}
                                                                variant='ghost'
                                                                colorScheme='red'
                                                                fontSize='20px'
                                                                icon={<MdDelete />}
                                                            />
                                                            <Modal isOpen={isOpen} onClose={onClose}>
                                                                <ModalOverlay />
                                                                <ModalContent>
                                                                    <ModalHeader>Delete Room</ModalHeader>
                                                                    <ModalCloseButton />
                                                                    <ModalBody>
                                                                        <Text>Are you sure? You can’t undo this action afterwards.</Text>
                                                                    </ModalBody>

                                                                    <ModalFooter>
                                                                        <Button variant='ghost' mr={3} onClick={onClose}>
                                                                            Cancel
                                                                        </Button>
                                                                        <Button
                                                                            colorScheme='red'

                                                                            onClick={() => deleteData(value.id)}
                                                                        >Delete</Button>
                                                                    </ModalFooter>
                                                                </ModalContent>
                                                            </Modal>
                                                        </HStack>
                                                    </Td>
                                                </Tr>
                                            </Tbody>
                                        )
                                    })
                                }

                            </Table>
                        </TableContainer>
                    </CardBody>
                </Card>
            </Stack>
        </Flex>
    )
}
export default DevicePage;