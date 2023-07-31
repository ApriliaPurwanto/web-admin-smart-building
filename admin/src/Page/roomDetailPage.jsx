import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Card, CardBody, Center, Flex, HStack, Heading, Icon, IconButton, Image, Stack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { MdDelete, MdEdit } from "react-icons/md";
import { VscCircleFilled } from "react-icons/vsc";

const RoomDetailPage = () => {
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
                            <BreadcrumbItem>
                                <BreadcrumbLink href='/admin/room'>Room List</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Detail</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                </Flex>

                <Flex marginTop='20px'>
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