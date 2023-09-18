import { Box, Flex, Text, Link, Input, InputLeftElement, InputGroup, Image, HStack  } from "@chakra-ui/react";
import { AiOutlineSearch } from 'react-icons/ai'
import { HiChatAlt2 } from 'react-icons/hi'
import { BsFillBellFill } from 'react-icons/bs'
import { RiArrowDropDownLine } from 'react-icons/ri'

import { useParams } from "react-router-dom";


const Header = () => {
    const routeParams = useParams();
    
    return (
        <Box width='100%' display='flex' justifyContent='center' pb='1rem'>
                    <Flex  justifyContent='space-between' alignItems='flex-start' width='100%'>
                        <Link href="#" fontSize='.8rem' _hover={{textDecoration: 'none'}}>Pages / Dashboard</Link>
                        <InputGroup width='16rem' display='flex' justifyContent='center'>
                            <InputLeftElement pointerEvents='none' mr='1rem'>
                                <AiOutlineSearch />
                            </InputLeftElement>
                            <Input variant='filled' bg='white' type='search' name="search" id="" 
                            placeholder='Type here...' size='sm' width='100%' px='1rem' pl='3rem' py='1rem'
                            _placeholder={{ opacity: .6, color: 'gray.600' }}
                            />
                        </InputGroup>
                        <HStack spacing='2rem'>
                            <Flex alignItems='center'>
                                <HiChatAlt2 />
                                <Link href="#" ml='.2rem' fontSize='.8rem'> Need help?</Link>
                            </Flex>
                            <BsFillBellFill />
                            <Flex alignItems='center' gap='1rem'>
                                <Image
                                    borderRadius='full'
                                    boxSize='40px'
                                    src='https://bit.ly/dan-abramov'
                                    alt='Dan Abramov'
                                    />
                                <Flex alignItems='top'>
                                    <Text>Tassy Omah</Text>
                                    <RiArrowDropDownLine />
                                </Flex>
                            </Flex>
                        </HStack>
                    </Flex>
                </Box>
    );
}
 
export default Header;