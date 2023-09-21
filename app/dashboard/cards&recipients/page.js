import { Box,  Heading, Grid, GridItem, Flex, Button, Image, Link  } from "@chakra-ui/react";
import { Card, Text } from '@chakra-ui/react'
import { AiOutlineWifi } from '@react-icons/all-files/ai/AiOutlineWifi'
import { SiMastercard } from '@react-icons/all-files/si/SiMastercard'
import { MdDeleteForever } from '@react-icons/all-files/md/MdDeleteForever'
import { BsPlusCircleFill } from '@react-icons/all-files/bs/BsPlusCircleFill'
import { FiHome } from '@react-icons/all-files/fi/FiHome'






const CardsAndRecipients = () => {
    return (
        <Box minH='100vh' overflowY='auto' scrollBehavior='smooth' pb='8rem' width='100%' pr='5rem'>
        
            <Grid templateColumns='40% 60%' gap={0} mt='1rem' pt='1rem' pb='2rem' width='100%'>
                <GridItem >
                <Heading as='h3' fontSize='1.2rem' fontWeight='500' mb='2rem'>Saved Cards</Heading>
                    <Flex width='80%' >
                        <Card width='100%' padding='1rem' display='flex' flexDirection='column' gap='2rem' bgColor='#3f9f98' 
                        bgImage='url("https://www.pinterest.com/pin/923026886130453986/")'>
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
                </GridItem>

                <GridItem width='100%'>
                    <Flex justifyContent='space-between'>
                        <Heading as='h3' fontSize='1.2rem' fontWeight='500' mb='2rem'>Saved accounts</Heading>
                        <Button leftIcon={<BsPlusCircleFill fontSize='1rem' color="#3f9f98" />} bg='white'  
                        paddingX='1.2rem' py='1rem' color='#3f9f98' variant='solid' fontSize='.8rem' borderRadius='.5rem'>
                            New card
                        </Button>

                    </Flex>
                    <Flex direction='column' width='100%' bg='white' borderRadius='.5rem' p='2rem' gap='1.2rem'>
                        <Flex gap='1rem' alignItems='top' width='100%' justifyContent='space-between'
                        borderBottom='1px' borderBottomColor='gray.300' pb='1rem'>
                            <Flex >
                                <Flex width='45px' height='45px' borderRadius='full' bgColor='#ecf5f5'
                                 mr='.8rem' justifyContent='center' alignItems='center'>
                                    <FiHome color="#368781" fontSize='1.4rem' />
                                </Flex>
                                <Box justifySelf='flex-start'>
                                    <Text fontSize='.9rem' fontWeight='700'>Chase Bank</Text>
                                    <Text fontSize='.8rem' fontWeight='600'>0334568990</Text>
                                    <Text fontSize='.7rem' fontWeight='500' color='gray.400'>Atasie Esther N</Text>
                                </Box>
                            </Flex>

                            <MdDeleteForever color="red" fontSize='1.5rem' />
                        </Flex>

                        <Flex gap='1rem' alignItems='top' width='100%' justifyContent='space-between'>
                            <Flex >
                                <Flex width='45px' height='45px' borderRadius='full' bgColor='#ecf5f5'
                                    mr='.8rem' justifyContent='center' alignItems='center'>
                                    <FiHome color="#368781" fontSize='1.4rem' />
                                </Flex>
                                <Box justifySelf='flex-start'>
                                    <Text fontSize='.9rem' fontWeight='700'>Citi Bank</Text>
                                    <Text fontSize='.8rem' fontWeight='600'>5555678237</Text>
                                    <Text fontSize='.7rem' fontWeight='500' color='gray.400'>Tamara Latta E</Text>
                                </Box>
                            </Flex>

                            <MdDeleteForever color="red" fontSize='1.5rem' />
                        </Flex>

                    </Flex>
                </GridItem>
            </Grid>

            <Flex as='section' width='100%' gap='1.5rem' mt='3rem' direction='column' marginBottom='3rem'>
                <Flex direction='column'>
                    <Heading as='h3' fontSize='1.2rem' mb='.5rem' fontWeight='500' >Saved recipients</Heading>

                    <Flex justifyContent='space-between'>
                        <Text fontSize='.8rem' fontWeight='500' color='gray.400'>Click on a recipient to send them money</Text>
                        <Text fontSize='.8rem' fontWeight='500' color='gray.400'>10 recipients</Text>
                    </Flex>
                </Flex>
                <Flex width='100%' gap='1rem' bg='gray.200' p='2rem' borderRadius='.5rem'>
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
    );
}
 
export default CardsAndRecipients;