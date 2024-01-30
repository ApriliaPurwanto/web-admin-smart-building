import { Flex, Heading} from '@chakra-ui/react'
import Sidebar from "./sidebar";
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

const Navigation = () =>{
    const { routeName } = useSelector((state) => state.userReducer);
    return(
        <Flex
            height='100vh'
            width='100%'
            bg='green'
        >
            <Sidebar/>

            <Flex
                height='100vh'
                width='100%'
                bg='white'
                flexDir='column'
            >
                <Flex
                    width='100%'
                    height='50px'
                    bg='white'
                    alignItems='center'
                >
                    <Heading
                        as='h5'
                        size='lg'
                        fontWeight='semibold'
                        paddingLeft='40px'
                        >
                        {routeName}
                    </Heading>
                </Flex>

                <Flex
                    width='100%'
                    height='calc(100vh - 50px)'
                    bg='white'
                    overflowY={'scroll'}
                    flexDir='column'
                    alignItems='center'
                >
                    <Outlet/> 
                </Flex>
            </Flex>
        </Flex>
    )
}
export default Navigation;