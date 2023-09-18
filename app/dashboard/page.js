'use client'
import { Box,  Heading, Grid, GridItem, Flex, Button, Image, Link  } from "@chakra-ui/react";
import { Card, Text } from '@chakra-ui/react'
import { IoIosArrowDropdown } from '@react-icons/all-files/io/IoIosArrowDropdown'
import { FaPaperPlane } from '@react-icons/all-files/fa/FaPaperPlane'
import { BsPlusCircleFill } from '@react-icons/all-files/bs/BsPlusCircleFill'
import { MdArrowDropDown } from '@react-icons/all-files/md/MdArrowDropDown'
import { RiExchangeFill } from '@react-icons/all-files/ri/RiExchangeFill'
import { AiOutlineWifi } from '@react-icons/all-files/ai/AiOutlineWifi'
import { SiMastercard } from '@react-icons/all-files/si/SiMastercard'

import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";




const Dashboard = () => {
    const dashboardCompId = uuidv4();
    const settingsCompId = uuidv4();
    const [view, setView] = useState(false);

    // const handleRouting = (id) => {
    //     e.preventDefault;
    //     console.log(e)
    // }


    return (
        <Grid templateColumns='60% 38%' gap={6} minH='100vh' mt='1rem' pt='1rem' pb='8rem' >
                    {/* Grid item left */}
                    <GridItem bg='gray.100' as='article'>
                        <Heading as='h3' fontSize='1.2rem' fontWeight='500' mb='1.2rem'>Welcome back, Omah</Heading>
                        <Box >
                            {/* Cards */}
                            <Flex width='100%' gap='1.5rem' as='section'>
                                <Card bg='#0d0f61' width='50%' padding='1rem'>
                                    <Flex gap={8} justifyContent='space-between' alignItems='top'>
                                        <Box>
                                            <Text color='white' opacity='.7' fontSize='.8rem' mb='1rem' >
                                                USD Wallet balance
                                            </Text>
                                            <Text color='white' fontSize='2rem' mb='1.5rem' fontWeight='600'>
                                                $ 31, 627.80
                                            </Text>
                                        </Box>
                                        <Box justifySelf='flex-end'>
                                            <IoIosArrowDropdown  color="white"/>
                                        </Box>
                                    </Flex>
                                </Card>

                                <Card bg='#3f9f98' width='50%' padding='1rem'>
                                    <Flex gap={8} justifyContent='space-between' alignItems='top'>
                                        <Box>
                                            <Text color='white' opacity='.7' fontSize='.8rem' mb='1rem'>
                                                XOF Wallet balance
                                            </Text>
                                            <Text color='white' fontSize='2rem' mb='1.5rem' fontWeight='600'>
                                                $ 150.30
                                            </Text>
                                        </Box>
                                        <Box justifySelf='flex-end'>
                                            <IoIosArrowDropdown color="white" />
                                        </Box>
                                    </Flex>
                                </Card>
                            </Flex>

                            {/* Buttons */}
                            <Flex as='section' width='100%' gap='1.5rem' mt='3rem' direction='column'>
                                <Heading as='h3' fontSize='1.2rem' fontWeight='500' >Quick Actions</Heading>
                                <Flex width='100%' gap='2rem'>
                                    <Button leftIcon={<FaPaperPlane />} bg='white' width='50%' 
                                    paddingX='2.5rem' py='2rem' color='#0d0f61' variant='solid' fontSize='1.2rem' borderRadius='.5rem'>
                                        Send Money
                                    </Button>
                                    <Button leftIcon={<BsPlusCircleFill />} bg='white' width='50%' 
                                    paddingX='2.5rem' py='2rem' color='#3f9f98' variant='solid' fontSize='1.2rem' borderRadius='.5rem'>
                                        Add Money
                                    </Button>
                                </Flex>
                            </Flex>

                            {/* convert funds section */}
                            <Flex as='section' width='100%' gap='1.5rem' mt='3rem' direction='column'>
                                <Heading as='h3' fontSize='1.2rem' fontWeight='500' >Convert Funds</Heading>
                                <Card bg='white' width='100%' padding='1rem' py='2rem' display='flex' justifyContent='space-between'>
                                    <Flex alignItems='center' gap='1rem'>
                                        <Box width='50%'>
                                            <Flex justifyContent='space-between' mb='.5rem'>
                                                <Text fontSize='.8rem' fontWeight='600'>You send</Text>
                                                <Text fontSize='.8rem' opacity='.7'>United States Dollar</Text>
                                            </Flex>
                                            <Flex border='1px' borderColor='gray.200' borderRadius='.5rem' justifyContent='space-between' p='1rem' mb='.5rem'>
                                                <Text fontSize='1.2rem' fontWeight='700'>3400</Text>
                                                <Box display='flex' alignItems='center' bg='gray.100' padding='.2rem' borderRadius='base'>
                                                    <Text mr='.5rem' fontSize='.8rem' fontWeight='600'>USD</Text>
                                                    <MdArrowDropDown />
                                                </Box>
                                            </Flex>
                                            
                                        </Box>
                                        <RiExchangeFill color="#3f9f98" />
                                        <Box width='50%'>
                                            <Flex justifyContent='space-between' mb='.5rem'>
                                                <Text fontSize='.8rem' fontWeight='600'>Recipient receives</Text>
                                                <Text fontSize='.8rem' opacity='.7'>French Franc CFA</Text>
                                            </Flex>
                                            <Flex border='1px' borderColor='gray.200' borderRadius='.5rem' justifyContent='space-between' p='1rem' mb='.5rem'>
                                                <Text fontSize='1.2rem' fontWeight='700'>389</Text>
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
                                    fontSize='1rem' fontWeight='500' borderRadius='.5rem' alignSelf='flex-end'>
                                        Continue
                                    </Button>
                                </Card>
                            </Flex>

                            {/* Saved recepients section */}
                            <Flex as='section' width='100%' gap='1.5rem' mt='3rem' direction='column'>
                                <Heading as='h3' fontSize='1.2rem' fontWeight='500' >Saved recipients</Heading>
                                <Flex width='100%' gap='1rem'>
                                    <Box  width='110px' bg='#3f9f98' borderRadius='2rem' 
                                    display='flex' flexDirection='column'  padding='1rem' py='1.5rem'
                                    alignItems='center' justifyContent='center' mr='1rem' >
                                        <BsPlusCircleFill color="white"  />
                                        <Text fontSize='1rem' fontWeight='600' mb='.5rem' textAlign='center' color='white' mt='1.5rem' lineHeight='5' >
                                            New Recipients
                                        </Text>
                                    </Box>
                                    <Box  width='110px' bg='white' borderRadius='2rem' 
                                    display='flex' flexDirection='column'  padding='1rem' py='1.5rem' alignItems='center'>
                                        <Image src="https://bit.ly/dan-abramov" borderRadius='full' width='50px' height='50px' mb='.5rem' />
                                        <Text fontSize='1rem' fontWeight='600' mb='.5rem'>
                                            Scarlett
                                        </Text>
                                        <Text fontSize='.8rem' fontWeight='600' color='gray.500' >
                                            $Cro tag
                                        </Text>
                                    </Box>
                                    <Box  width='110px' bg='white' borderRadius='2rem' 
                                    display='flex' flexDirection='column'  padding='1rem' py='1.5rem' alignItems='center'>
                                        <Image src="https://bit.ly/dan-abramov" borderRadius='full' width='50px' height='50px' mb='.5rem' />
                                        <Text fontSize='1rem' fontWeight='600' mb='.5rem'>
                                            Nariya
                                        </Text>
                                        <Text fontSize='.8rem' fontWeight='600' color='gray.500' >
                                            $Cro tag
                                        </Text>
                                    </Box>
                                    <Box  width='110px' bg='white' borderRadius='2rem' 
                                    display='flex' flexDirection='column'  padding='1rem' py='1.5rem' alignItems='center'>
                                        <Image src="https://bit.ly/dan-abramov" borderRadius='full' width='50px' height='50px' mb='.5rem' />
                                        <Text fontSize='1rem' fontWeight='600' mb='.5rem'>
                                            Riya
                                        </Text>
                                        <Text fontSize='.8rem' fontWeight='600' color='gray.500' >
                                            $Cro tag
                                        </Text>
                                    </Box>
                                    <Box  width='110px' bg='white' borderRadius='2rem' 
                                    display='flex' flexDirection='column'  padding='1rem' py='1.5rem' alignItems='center'>
                                        <Image src="https://bit.ly/dan-abramov" borderRadius='full' width='50px' height='50px' mb='.5rem' />
                                        <Text fontSize='1rem' fontWeight='600' mb='.5rem'>
                                            Tassy O
                                        </Text>
                                        <Text fontSize='.8rem' fontWeight='600' color='gray.500' >
                                            $Cro tag
                                        </Text>
                                    </Box>
                                </Flex>
                            </Flex>
                        </Box>
                    </GridItem>

                    {/* Grid Item right */}
                    <GridItem min-height='100vh' pt='2rem' as='aside'>
                        <Flex width='100%' >
                            <Card width='100%' padding='1rem' display='flex' flexDirection='column' gap='2rem' bgColor='#3f9f98' bgImage='url("https://www.pinterest.com/pin/923026886130453986/")'>
                                <Flex justifyContent='space-between'>
                                    <Text fontSize='.8rem' fontWeight='400' color='white'>Virtual card</Text>
                                    <AiOutlineWifi color='white' />
                                </Flex>
                                <Text mb='1rem' fontSize='1.2rem' fontWeight='500' color='white'>
                                    4562 1122 4594 7852
                                </Text>
                                <Flex justifyContent='space-between' alignItems='center'>
                                    <Flex direction='column'>
                                        <Text fontSize='.8rem' fontWeight='400' opacity='.7' color='white'>Card holder</Text>
                                        <Text fontSize='1rem' fontWeight='500' color='white'>Jack Peterson</Text>
                                    </Flex>
                                    <Flex direction='column'>
                                        <Text fontSize='.8rem' fontWeight='400' opacity='.7' color='white'>Expires</Text>
                                        <Text fontSize='1rem' fontWeight='500' color='white'>11/22</Text>
                                    </Flex>
                                    <SiMastercard color='white' />
                                </Flex>
                            </Card>
                        </Flex>
                        <Flex width='100%' mt='2rem' direction='column'>
                            <Flex justifyContent='space-between' width='100%'>
                                <Heading as='h3' fontSize='1.2rem' fontWeight='500' >Recent transactions</Heading>
                                <Link fontSize='1rem' fontWeight='600' color='#3f9f98' _hover={{textDecoration: 'none'}}>View all</Link>
                            </Flex>
                            <Flex direction='column' bg='white' padding='1rem' py='1.2rem' mt='1rem' gap={6} borderRadius='.5rem'>
                                <Flex direction='row' justifyContent='space-between' alignItems='center'>
                                    <Box display='flex'>
                                        <Box width='45px' height='45px' borderRadius='full' bgColor='gray.200' mr='.8rem'>
                                        </Box>
                                        <Flex direction='column'>
                                            <Text fontSize='.9rem' fontWeight='600'>Exchanged USD to CFA</Text>
                                            <Text fontSize='.8rem' fontWeight='500' color='gray.400'>2:30 pm, today</Text>
                                        </Flex>
                                    </Box>
                                    <Flex direction='column' justifySelf='flex-end'>
                                        <Text fontSize='.9rem' fontWeight='600'>$2100</Text>
                                        <Text fontSize='.8rem' fontWeight='500' color='orange'>pending</Text>
                                    </Flex>
                                </Flex>
                                <Flex direction='row' justifyContent='space-between'>
                                    <Box display='flex'>
                                        <Box width='45px' height='45px' borderRadius='full' bgColor='gray.200' mr='.8rem'>
                                        </Box>
                                        <Flex direction='column'>
                                            <Text fontSize='.9rem' fontWeight='600'>Sent to $Crotag!</Text>
                                            <Text fontSize='.8rem' fontWeight='500' color='gray.400'>2:30 pm, today</Text>
                                        </Flex>
                                    </Box>
                                    <Flex direction='column' justifySelf='flex-end'>
                                        <Text fontSize='.9rem' fontWeight='600'>$1500.99</Text>
                                        <Text fontSize='.8rem' fontWeight='500' color='red'>cancelled</Text>
                                    </Flex>
                                </Flex>
                                <Flex direction='row' justifyContent='space-between'>
                                    <Box display='flex'>
                                        <Box width='45px' height='45px' borderRadius='full' bgColor='gray.200' mr='.8rem'>
                                        </Box>
                                        <Flex direction='column'>
                                            <Text fontSize='.9rem' fontWeight='600'>Funded wallet</Text>
                                            <Text fontSize='.8rem' fontWeight='500' color='gray.400'>2:30 pm, today</Text>
                                        </Flex>
                                    </Box>
                                    <Flex direction='column' justifySelf='flex-end'>
                                        <Text fontSize='.9rem' fontWeight='600'>-$130</Text>
                                        <Text fontSize='.8rem' fontWeight='500' color='green'>successful</Text>
                                    </Flex>
                                </Flex>
                                <Flex direction='row' justifyContent='space-between'>
                                    <Box display='flex'>
                                        <Box width='45px' height='45px' borderRadius='full' bgColor='gray.200' mr='.8rem'>
                                        </Box>
                                        <Flex direction='column'>
                                            <Text fontSize='.9rem' fontWeight='600'>Exchanged CFA to USD</Text>
                                            <Text fontSize='.8rem' fontWeight='500' color='gray.400'>5:06 am, today</Text>
                                        </Flex>
                                    </Box>
                                    <Flex direction='column' justifySelf='flex-end'>
                                        <Text fontSize='.9rem' fontWeight='600'>+$3270.80</Text>
                                        <Text fontSize='.8rem' fontWeight='500' color='red'>cancelled</Text>
                                    </Flex>
                                </Flex>
                                <Flex direction='row' justifyContent='space-between'>
                                    <Box display='flex'>
                                        <Box width='45px' height='45px' borderRadius='full' bgColor='gray.200' mr='.8rem'>
                                        </Box>
                                        <Flex direction='column'>
                                            <Text fontSize='.9rem' fontWeight='600'>Received from $Crotag!</Text>
                                            <Text fontSize='.8rem' fontWeight='500' color='gray.400'>2:30 pm, today</Text>
                                        </Flex>
                                    </Box>
                                    <Flex direction='column' justifySelf='flex-end'>
                                        <Text fontSize='.9rem' fontWeight='600'>+$3270.80</Text>
                                        <Text fontSize='.8rem' fontWeight='500' color='green'>successful</Text>
                                    </Flex>
                                </Flex>
                                <Flex direction='row' justifyContent='space-between'>
                                    <Box display='flex'>
                                        <Box width='45px' height='45px' borderRadius='full' bgColor='gray.200' mr='.8rem'>
                                        </Box>
                                        <Flex direction='column'>
                                            <Text fontSize='.9rem' fontWeight='600'>Withdrawal</Text>
                                            <Text fontSize='.8rem' fontWeight='500' color='gray.400'>2:30 pm, today</Text>
                                        </Flex>
                                    </Box>
                                    <Flex direction='column' justifySelf='flex-end'>
                                        <Text fontSize='.9rem' fontWeight='600'>$1500.99</Text>
                                        <Text fontSize='.8rem' fontWeight='500' color='green'>successful</Text>
                                    </Flex>
                                </Flex>
                                <Flex direction='row' justifyContent='space-between'>
                                    <Box display='flex'>
                                        <Box width='45px' height='45px' borderRadius='full' bgColor='gray.200' mr='.8rem'>
                                        </Box>
                                        <Flex direction='column'>
                                            <Text fontSize='.9rem' fontWeight='600'>Withdrawal</Text>
                                            <Text fontSize='.8rem' fontWeight='500' color='gray.400'>2:30 pm, today</Text>
                                        </Flex>
                                    </Box>
                                    <Flex direction='column' justifySelf='flex-end'>
                                        <Text fontSize='.9rem' fontWeight='600'>$1500.99</Text>
                                        <Text fontSize='.8rem' fontWeight='500' color='green'>successful</Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                    </GridItem>
        </Grid>
    );
}
export default Dashboard;