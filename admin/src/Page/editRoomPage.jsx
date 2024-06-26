import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Flex, HStack, Heading, Input, Select, Stack, Text, Textarea, useToast, Box } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routePageName } from "../Redux/action";
import { useEffect } from "react";

const EditRoomPage = () => {
    const navigate = useNavigate();
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
                                <BreadcrumbLink>Room</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink>Edit Room</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                </Flex>

                <Flex marginTop='20px'>
                    <Card width='1050px'>
                        <CardBody>
                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Name</Text>
                                    <Input variant='outline' placeholder='Room Name' />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Location</Text>
                                        <Select placeholder='Select option'>
                                            <option value='lt1'>Gedung A Lt. 1</option>
                                            <option value='lt2'>Gedung A Lt. 2</option>
                                        </Select>
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Description</Text>
                                    <Textarea placeholder='Here is a sample placeholder' />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='10px'>
                                <Stack>
                                    <Text fontWeight='medium'>Photo</Text>
                                    <HStack>
                                        <Button
                                            bg='#D0D0D0'
                                        >
                                            Choose File
                                        </Button>

                                        <Text>No file chosen</Text>
                                    </HStack>
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
                    _hover={{bg: '#265958'}}
                    size='md'
                    width='130px'
                    borderRadius='15px'
                    fontFamily='sans-serif'
                    fontWeight='normal'
                    boxShadow="base"
                    onClick={() =>
                        toast({
                          position: 'bottom-left',
                          render: () => (
                            <Box color='white' p={3} bg='green'>
                              Saved successfully
                            </Box>
                                      ),
                                    })
                                  }>
                        Save
                    </Button>
                </Flex>

            </Stack>
        </Flex>
    )
}

export default EditRoomPage;