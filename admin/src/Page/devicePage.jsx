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
import { FiChevronRight, FiPlus } from "react-icons/fi";
import { VscCircleFilled } from "react-icons/vsc";
import { MdAddCircleOutline, MdDelete, MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const DevicePage = () => {
    const navigate = useNavigate();
    const navigateToAddDevice = () => {
        navigate('add-device');
      };

    const navigateToEditDevice = () => {
        navigate('edit-device');
    };

    const { isOpen, onOpen, onClose } = useDisclosure()
    return(
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
                        <Button onClick={navigateToAddDevice} bg='#2F8286' color='white' _hover={{bg: '#265958'}} size='md'  borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'  boxShadow="base">
                            <HStack spacing={3}>
                                <Icon as={FiPlus} color='white'/>
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
                                        <Th>Type</Th>
                                        <Th>Room Name</Th>
                                        <Th>Model</Th>
                                        <Th>Brand</Th>
                                        <Th>Value</Th>
                                        <Th>Device Status</Th>
                                        <Th>Action</Th>
                                    </Tr>
                                    </Thead>
                                    <Tbody>
                                    <Tr>
                                        <Td isNumeric>1</Td>
                                        <Td>C01</Td>
                                        <Td>Camera</Td>
                                        <Td>A101</Td>
                                        <Td>Model</Td> 
                                        <Td>Brand</Td> 
                                        <Td>Value</Td> 
                                        <Td>
                                            <HStack spacing={1}>
                                            <Text>Online</Text>
                                            <Icon as={VscCircleFilled} color='green' w={5} h={5}/>
                                            </HStack>
                                            </Td> 
                                        <Td>
                                            <HStack>
                                                <IconButton onClick={navigateToEditDevice}
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
                                        </Td>
                                    </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </CardBody>
                    </Card>
            </Stack>
    </Flex>
    )
}
export default DevicePage;