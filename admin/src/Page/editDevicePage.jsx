import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, Card, CardBody, Flex, HStack, Heading, Input, Select, Stack, Text, Textarea, useToast } from "@chakra-ui/react";
import { FiChevronRight } from "react-icons/fi";

const EditDevicePage = () => {
    const toast = useToast()
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
                                <BreadcrumbLink>Device List</BreadcrumbLink>
                            </BreadcrumbItem>

                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href='#'>Edit Device</BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                </Flex>


                <Flex marginTop='20px'>
                    <Card width='1050px'>
                        <CardBody>
                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Name</Text>
                                    <Input variant='outline' placeholder='Device Name' />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Type</Text>
                                        <Select placeholder='Select option'>
                                            <option value='camera'>Camera</option>
                                            <option value='pir'>PIR Sensor</option>
                                        </Select>
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Room Name</Text>
                                        <Select placeholder='Select option'>
                                            <option value='a101'>A101</option>
                                            <option value='a201'>A201</option>
                                        </Select>
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='20px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Model</Text>
                                    <Input variant='outline' placeholder='Device Model' />
                                </Stack>
                            </Flex>

                            <Flex bg='white' width='100%' marginBottom='10px'>
                                <Stack width='100%'>
                                    <Text fontWeight='medium'>Brand</Text>
                                    <Input variant='outline' placeholder='Device Brand' />
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

export default EditDevicePage;