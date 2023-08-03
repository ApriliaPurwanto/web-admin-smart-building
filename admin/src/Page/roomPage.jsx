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
import { MdDelete, MdEdit } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const RoomPage = () => {
    const navigate = useNavigate();
    const navigateToAddRoom = () => {
        navigate('add-room');
      };
      const navigateToRoomDetail = () => {
        navigate('detail-room');
      };
      const navigateToRoomEdit = () => {
        navigate('edit-room');
      };

      const { isOpen, onOpen, onClose } = useDisclosure()

      const toast = useToast()
    return(
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
                                {/* <Heading
                                    as='h4'
                                    size='md'
                                    fontWeight='medium'>
                                        Room List
                                </Heading> */}
                            <Breadcrumb spacing='8px' separator={<FiChevronRight color='gray.500' />}>
                                <BreadcrumbItem isCurrentPage>
                                    <BreadcrumbLink href='#'>Room List</BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                        </Flex>

                        <Flex
                            height='50px'
                            width='100%'
                            bg='white'
                            marginTop='15px'>
                                <Button onClick={navigateToAddRoom} bg='#2F8286' color='white' _hover={{bg: '#265958'}} size='md'  borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'  boxShadow="base">
                                    <HStack spacing={3}>
                                        <Icon as={FiPlus} color='white'/>
                                        <Text>Add Room</Text>
                                    </HStack>
                                </Button>
                        </Flex>

                            <Card>
                                <CardBody>
                                    <TableContainer>
                                        <Table variant='simple'>
                                            <Thead>
                                            <Tr>
                                                <Th isNumeric>No.</Th>
                                                <Th>Room Name</Th>
                                                <Th>Location</Th>
                                                <Th>Description</Th>
                                                <Th>Action</Th>
                                            </Tr>
                                            </Thead>
                                            <Tbody>
                                            <Tr>
                                                <Td isNumeric>1</Td>
                                                <Td onClick={navigateToRoomDetail} cursor='pointer'>A101</Td>
                                                <Td>Gedung A lt. 1</Td>
                                                <Td>Room is functioned as regular meeting room</Td> 
                                                <Td>
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
export default RoomPage;