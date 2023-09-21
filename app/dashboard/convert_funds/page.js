import { Box, Heading, Flex, Button } from "@chakra-ui/react";
import { Card, Text } from '@chakra-ui/react'
import { MdArrowDropDown } from '@react-icons/all-files/md/MdArrowDropDown'
import { RiExchangeFill } from '@react-icons/all-files/ri/RiExchangeFill'

import '../../globals.css'




const ConvertFunds = () => {
    return (
        <Flex as='section' width='100%' gap='1.5rem' mt='3rem' direction='column' px='2rem'>
            <Heading as='h3' fontSize='1.2rem' fontWeight='500' >Convert Funds</Heading>
            <Card bg='white' width='100%' padding='1rem' py='2rem' minHeight='15rem' px='2rem' display='flex' justifyContent='space-between'>
                <Flex alignItems='center' gap='3rem'>
                    <Box width='50%'>
                        <Flex justifyContent='space-between' mb='.5rem'>
                            <Text fontSize='.8rem' fontWeight='600'>You send</Text>
                            <Text fontSize='.8rem' opacity='.7'>United States Dollar</Text>
                        </Flex>
                        <Flex border='1px' borderColor='gray.200' borderRadius='.5rem' justifyContent='space-between' p='1rem' mb='.5rem'>
                            <Text fontSize='1.2rem' fontWeight='700'></Text>
                            <Box display='flex' alignItems='center' bg='gray.100' padding='.2rem' borderRadius='base' position='relative' className="convertDropdownCont">
                                <Text mr='.5rem' fontSize='.8rem' fontWeight='600'>USD</Text>
                                <MdArrowDropDown />

                                <Flex direction='column' bg='white' w='5rem' h='3rem' className="convertDropdown">
                                    <Box><Text mr='.5rem' fontSize='.8rem' fontWeight='600' color='black'>USD</Text></Box>
                                    <Box><Text mr='.5rem' fontSize='.8rem' fontWeight='600'>CFA</Text></Box>
                                </Flex>
                            </Box>
                        </Flex>
                        
                    </Box>
                    <RiExchangeFill color="#3f9f98" />
                    <Box width='50%'>
                        <Flex justifyContent='space-between' mb='.5rem'>
                            <Text fontSize='.8rem' fontWeight='600'>You receive</Text>
                            <Text fontSize='.8rem' opacity='.7'>French Franc CFA</Text>
                        </Flex>
                        <Flex border='1px' borderColor='gray.200' borderRadius='.5rem' justifyContent='space-between' p='1rem' mb='.5rem'>
                            <Text fontSize='1.2rem' fontWeight='700'></Text>
                            <Box display='flex' alignItems='center' bg='gray.100' padding='.2rem' borderRadius='base'>
                                <Text mr='.5rem' fontSize='.8rem' fontWeight='600'>CFA</Text>
                                <MdArrowDropDown />
                            </Box>
                        </Flex>
                    </Box>
                </Flex>
                <Text fontSize='.8rem' fontWeight='600' >1 USD = 23.45CFA</Text>
                <Button width='20%' 
                paddingX='1rem' py='1.5rem' bg='#3f9f98' color='white' variant='solid' 
                fontSize='1rem' fontWeight='500' borderRadius='.5rem' alignSelf='flex-end' disabled>
                    Convert
                </Button>
            </Card>
        </Flex>
    );
}
 
export default ConvertFunds;