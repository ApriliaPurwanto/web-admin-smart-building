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
    Tfoot,
    Center,
    Image,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    IconButton,
    Box,
    Heading,
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
    useToast,
} from '@chakra-ui/react'
import { FiChevronRight } from "react-icons/fi";
import { MdDelete, MdEdit } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { routePageName } from '../Redux/action';
import { useEffect } from 'react';

const RoomDetailPage = () => {
    const navigate = useNavigate();
    const navigateToRoomEdit = () => {
        navigate('/admin/room/edit-room');
      };

    const { isOpen, onOpen, onClose } = useDisclosure()

    const toast = useToast()

    const dispatch = useDispatch();

    const patchRoute = () => {
        dispatch(routePageName('Room'));
    };

    useEffect(() => {patchRoute()},[])
    return(
        <Flex
        bg='white'
        height='100vh'
        width='100%'
        paddingLeft='40px'
        marginBottom='30px'
        >
            <Stack>
                <Flex
                    height='30px'
                    width='100%'
                    bg='white'
                    alignItems='center'
                    // marginBottom='15px'
                    >
                        {/* <Heading
                            as='h4'
                            size='md'
                            fontWeight='medium'>
                                Room List
                        </Heading> */}

                        <Breadcrumb spacing='8px' separator={<FiChevronRight color='gray.500' />}>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink>Room List</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Detail</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                </Flex>

                <Flex>
                    <Card width='1050px'>
                        <CardBody>
                            <Flex bg='white' width='100%' height='30px' marginBottom='10px' justifyContent='space-between'>
                                <Heading
                                    as='h5'
                                    size='lg'
                                    fontWeight='semibold'>
                                    Room A101
                                </Heading>

                                <HStack>
                                    <IconButton onClick={navigateToRoomEdit}
                                        variant='ghost'
                                        colorScheme='teal'
                                        fontSize='20px'
                                        icon={<MdEdit />}
                                    />
                                    <IconButton onClick={onOpen}
                                        variant='ghost'
                                        colorScheme='red'
                                        fontSize='20px'
                                        icon={<MdDelete/>}
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
                                                                onClick={onClose}
                                                            >Delete</Button>
                                                        </ModalFooter>
                                            </ModalContent>
                                    </Modal>
                                </HStack>
                            </Flex>

                            <Flex bg='white' width='100%' height='30px' marginBottom='20px' alignItems='center'>
                                <Text>
                                    Gedung A Lt. 1
                                </Text>
                            </Flex>

                            <Center>
                            <Image
                                objectFit='cover'
                                src='https://p1.pxfuel.com/preview/176/155/652/cat-landscape-animals-cute-cat-eyes.jpg'
                                alt='Chakra UI'
                                width='40%'
                                height='250px'
                                borderRadius='15px'
                                marginBottom='20px'
                            />
                            </Center>

                            <Text fontWeight='bold'>Description</Text>
                            <Text marginBottom='20px'>Room is functioned as a regular meeting room.</Text>

                            <Text fontWeight='bold'>Devices</Text>

                            <TableContainer marginBottom='20px'>
                                <Table variant='simple'>
                                    <Thead>
                                        <Tr>
                                            <Th>No.</Th>
                                            <Th>Type</Th>
                                            <Th>Name</Th>
                                            <Th>Value</Th>
                                            <Th>Status</Th>
                                        </Tr>
                                    </Thead>

                                    <Tbody>
                                        <Tr>
                                            <Td>1</Td>
                                            <Td>Camera</Td>
                                            <Td>C01</Td>
                                            <Td>23 Person</Td>
                                            <Td>                                            
                                                <HStack spacing={1}>
                                                <Text>Online</Text>
                                                <Icon as={VscCircleFilled} color='green' w={5} h={5}/>
                                                </HStack>
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody>
                    </Card>
                </Flex>
            </Stack>
        </Flex>
    )
}
export default RoomDetailPage;