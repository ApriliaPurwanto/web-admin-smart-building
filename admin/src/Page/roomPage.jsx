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
} from '@chakra-ui/react'
import { FiPlus } from "react-icons/fi";
import { MdDelete, MdEdit } from 'react-icons/md';

const RoomPage = () => {
    return(
            <Flex
                height='100vh'
                width='1030px'
                bg='white'>
                    <Stack>
                        <Flex
                            height='30px'
                            width='100%'
                            bg='white'
                            alignItems='center'>
                                <Heading
                                    as='h4'
                                    size='md'
                                    fontWeight='medium'>
                                        Room List
                                </Heading>
                        </Flex>

                        <Flex
                            height='50px'
                            width='100%'
                            bg='white'
                            marginTop='15px'>
                                <Button bg='#2F8286' color='white' _hover={{bg: '#265958'}} size='md'  borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'  boxShadow="base">
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
                                                <Th>Type</Th>
                                                <Th>Location</Th>
                                                <Th>Description</Th>
                                                <Th>Action</Th>
                                            </Tr>
                                            </Thead>
                                            <Tbody>
                                            <Tr>
                                                <Td isNumeric>1</Td>
                                                <Td>A101</Td>
                                                <Td>Meeting Room</Td>
                                                <Td>Gedung A lt. 1</Td>
                                                <Td>Room is functioned as regular meeting room</Td> 
                                                <Td>
                                                    <HStack>
                                                        <IconButton
                                                            variant='ghost'
                                                            colorScheme='teal'
                                                            fontSize='20px'
                                                            icon={<MdEdit />}
                                                            />
                                                        <IconButton
                                                            variant='ghost'
                                                            colorScheme='red'
                                                            fontSize='20px'
                                                            icon={<MdDelete/>}
                                                            />
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