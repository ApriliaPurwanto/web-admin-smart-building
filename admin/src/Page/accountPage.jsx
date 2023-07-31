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
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
} from '@chakra-ui/react'
import { VscCircleFilled } from "react-icons/vsc";
import { MdAddCircleOutline, MdDelete, MdEdit } from 'react-icons/md';
import { FiChevronRight, FiPlus } from "react-icons/fi";

const AccountPage = () => {
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
                                Account List
                        </Heading> */}
                        <Breadcrumb spacing='8px' separator={<FiChevronRight color='gray.500' />}>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Account List</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                </Flex>

                <Flex
                    height='50px'
                    width='100%'
                    bg='white'
                    marginTop='15px'>
                        <Button bg='#2F8286' color='white' _hover={{bg: '#265958'}} size='md'  borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'  boxShadow="base">
                            <HStack spacing={3}>
                                <Icon as={FiPlus} color='white'/>
                                <Text>Add Account</Text>
                            </HStack>
                        </Button>
                </Flex>

                    <Card width='650px'>
                        <CardBody>
                            <TableContainer>
                                <Table variant='simple'>
                                    <Thead>
                                    <Tr>
                                        <Th isNumeric>No.</Th>
                                        <Th>Name</Th>
                                        <Th>Username</Th>
                                        <Th>Action</Th>
                                    </Tr>
                                    </Thead>
                                    <Tbody>
                                    <Tr>
                                        <Td isNumeric>1</Td>
                                        <Td>Admin1</Td>
                                        <Td>admin1@gmail.com</Td>
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
        // <Flex
        //     bg='white'
        //     height='100vh'
        //     width='100%'
        //     paddingLeft='40px'
        // >
        //     <Stack>
        //         <Flex
        //             height='50px'
        //             width='100%'
        //             bg='white'
        //             alignItems='center'>
        //                 <Heading
        //                     as='h4'
        //                     size='md'
        //                     fontWeight='regular'>
        //                         Operation
        //                 </Heading>
        //         </Flex>

        //         <Flex>
        //             <Select width='200px' placeholder='Select option'>
        //                 <option value='add'>Add</option>
        //                 <option value='delete'>Delete</option>
        //             </Select>
        //         </Flex>

        //         <Flex marginTop='20px'>
        //             <Card width='1050px'>
        //                 <CardBody>
        //                     <Flex bg='white' width='100%' marginBottom='20px'>
        //                         <Stack width='100%'>
        //                             <Text fontWeight='medium'>Delete Room Type</Text>
        //                             <HStack bg='white' justifyContent='space-between'> 
        //                                 <Select placeholder='Select option'>
        //                                     <option value='add'>Meeting Room</option>
        //                                     <option value='delete'>Classroom</option>
        //                                 </Select>
        //                                 <Button bg='#AB221D' color='white' _hover={{bg: '#D22B25'}} size='md' width='100px' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'  boxShadow="base">
        //                                     Delete
        //                                 </Button>
        //                             </HStack>
        //                         </Stack>
        //                     </Flex>

        //                     <Flex bg='white' width='100%' marginBottom='20px'>
        //                         <Stack width='100%'>
        //                             <Text fontWeight='medium'>Delete Room Location</Text>
        //                             <HStack bg='white' justifyContent='space-between'> 
        //                                 <Select placeholder='Select option'>
        //                                     <option value='add'>Gedung A lt. 1</option>
        //                                     <option value='delete'>Gedung A lt. 2</option>
        //                                 </Select>
        //                                 <Button bg='#AB221D' color='white' _hover={{bg: '#D22B25'}} size='md' width='100px' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'  boxShadow="base">
        //                                     Delete
        //                                 </Button>
        //                             </HStack>
        //                         </Stack>
        //                     </Flex>

        //                     <Flex bg='white' width='100%' marginBottom='20px'>
        //                         <Stack width='100%'>
        //                             <Text fontWeight='medium'>Delete Device Type</Text>
        //                             <HStack bg='white' justifyContent='space-between'> 
        //                                 <Select placeholder='Select option'>
        //                                     <option value='add'>Camera</option>
        //                                     <option value='delete'>PIR Sensor</option>
        //                                 </Select>
        //                                 <Button bg='#AB221D' color='white' _hover={{bg: '#D22B25'}} size='md' width='100px' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'  boxShadow="base">
        //                                     Delete
        //                                 </Button>
        //                             </HStack>
        //                         </Stack>
        //                     </Flex>

        //                     <Flex bg='white' width='100%' marginBottom='20px'>
        //                         <Stack width='100%'>
        //                             <Text fontWeight='medium'>Delete Device Unit Value</Text>
        //                             <HStack bg='white' justifyContent='space-between'> 
        //                                 <Select placeholder='Select option'>
        //                                     <option value='add'>Celcius Degree</option>
        //                                     <option value='delete'>Person</option>
        //                                 </Select>
        //                                 <Button bg='#AB221D' color='white' _hover={{bg: '#D22B25'}} size='md' width='100px' borderRadius='15px' fontFamily='sans-serif' fontWeight='normal'  boxShadow="base">
        //                                     Delete
        //                                 </Button>
        //                             </HStack>
        //                         </Stack>
        //                     </Flex>
        //                 </CardBody>
        //             </Card>
        //         </Flex>
        //     </Stack>
        // </Flex>
    )
}
export default AccountPage;