import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Flex, HStack, Heading, IconButton, Input, InputGroup, InputRightElement, Select, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { HiEye, HiEyeOff } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { routePageName } from "../Redux/action";

const EditAccountPage = () => {
    const toast = useToast()

    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    const dispatch = useDispatch();

    const patchRoute = () => {
        dispatch(routePageName('Account'));
    };

    useEffect(() => {patchRoute()},[])
    return(
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
                                <BreadcrumbLink>Account List</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Edit Account</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                </Flex>


                <Flex marginTop='20px'>
                    <Card width='1050px'>
                        <CardBody>
                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Name</Text>
                                    <Input variant='outline' placeholder='Name' />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Username</Text>
                                    <Input variant='outline' placeholder='Username' />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='10px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Password</Text>
                                    <InputGroup>
                                    <Input variant='outline' placeholder='Password' type={show ? 'text' : 'password'}/>
                                    <InputRightElement width='3rem'>
                                        { show ?
                                        <IconButton
                                        height='35px'
                                        bg='white'
                                        _hover={{bg:'white'}}
                                        icon={<HiEyeOff/>}
                                        onClick={handleClick}/> :
                                        <IconButton
                                        height='35px'
                                        bg='white'
                                        _hover={{bg:'white'}}
                                        icon={<HiEye/>}
                                        onClick={handleClick}/>
                                        }
                                    </InputRightElement>
                                    </InputGroup>
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
                                      }
                    >
                        Save
                    </Button>
                </Flex>
            </Stack>
        </Flex>
    )
}

export default EditAccountPage;