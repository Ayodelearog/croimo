'use client'
import { Box, Flex, Heading, Image, Link, Text, leftIcon, Button, Input, InputGroup } from "@chakra-ui/react";

import { FaUser } from '@react-icons/all-files/fa/FaUser'
import { AiFillPicture } from '@react-icons/all-files/ai/AiFillPicture'
import { BsFillBellFill } from '@react-icons/all-files/bs/BsFillBellFill'
import { GiPadlock } from '@react-icons/all-files/gi/GiPadlock'
import { RiVerifiedBadgeFill } from 'react-icons/ri'
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";



const Settings = () => {
   
    const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (e) => {
      const selectedFile = e.target.files[0];
      console.log(selectedFile)
      setAvatar(URL.createObjectURL(selectedFile)); // Display the selected image
    };

    return (
        <Box mt='1.2rem' pX='2rem' pb='6rem'>
            <Heading as='h3' fontSize='1.2rem' fontWeight='500' mb='1.5rem'>Account Settings</Heading>

            <Flex w='100%' min-h='100vh' gap={10}>
                <Flex width='25%' h='max-content' direction='column' gap={10} bg='white' pl='1.2rem' py='3rem' borderRadius='.5rem'>

                    <Flex w='100%' alignItems='center' gap={8} color='gray.500' borderRight='4px' borderColor='white'
                    _active={{color: '#3f9f98', textColor: '#3f9f98', borderColor: '#3f9f98'}} cursor='pointer' py='.5rem'>
                        <FaUser color='gray.500' />
                        <Text fontWeight='600' fontSize='1rem' color='gray.500'>Profile Info</Text>
                    </Flex>

                    <Flex w='100%' alignItems='center' gap={8} color='gray.500' borderRight='4px' borderColor='white'
                    _active={{color: '#3f9f98', textColor: '#3f9f98', borderColor: '#3f9f98'}} cursor='pointer' py='.5rem'>
                        <GiPadlock />
                        <Text fontWeight='600' fontSize='1rem' color='gray.500'>Password</Text>
                    </Flex>

                    <Flex w='100%' alignItems='center' gap={8} color='gray.500' borderRight='4px' borderColor='white' 
                    _active={{color: '#3f9f98', textColor: '#3f9f98', borderColor: '#3f9f98'}} cursor='pointer' py='.5rem'>
                        <BsFillBellFill />
                        <Text fontWeight='600' fontSize='1rem' color='gray.500'>Notifications</Text>
                    </Flex>

                    <Flex w='100%' alignItems='center' gap={8} color='gray.500' borderRight='4px' borderColor='white'
                    _active={{color: '#3f9f98', textColor: '#3f9f98', borderColor: '#3f9f98'}} cursor='pointer' py='.5rem'>
                        <RiVerifiedBadgeFill />
                        <Text fontWeight='600' fontSize='1rem' color='gray.500'>Verification</Text>
                    </Flex>
                </Flex>

                <Flex width='65%' paddingX='4rem' paddingY='3rem' bg='white' borderRadius='.5rem' direction='column'>
                    <Flex>
                        <Link fontSize='.9rem' fontWeight='600' color='#3f9f98'
                         _hover={{textDecoration: 'none'}} mr='3rem'>Go back</Link>
                        <Heading as='h3' fontSize='1.2rem' fontWeight='600'>Edit Profile</Heading>
                    </Flex>

                    <Flex mt='3rem' mb='3.5rem' justifyContent='space-between' width='100%'>
                        <Image
                            borderRadius='full'
                            boxSize='80px'
                            src={avatar}
                            alt='Dan Abramov'
                            border='1px'
                            borderColor='black'
                        />

                        <Flex gap={4} width='50%' justifyContent='flex-end' alignItems='center'>
                            <input type="file" name="fileUpload" id=""  onChange={handleAvatarChange} />

                            {/* <Button leftIcon={<AiFillPicture />} bg='white' width='40%' color='#3f9f98' 
                            paddingX='1rem' py='1rem' variant='outline' border='2px' borderColor='gray.400'
                            borderStyle='dotted' fontSize='.8rem' fontWeight='700' borderRadius='.5rem'>
                                Change Photo
                            </Button> */}

                            {/* <Button bg='white' width='40%' color='black' 
                            paddingX='.2rem' py='1rem' variant='ghost' borderStyle='dotted' fontSize='.8rem' 
                            fontWeight='700' borderRadius='.5rem'>
                                Remove
                            </Button> */}
                        </Flex>
                    </Flex>

                    <form action="" width='100%'>
                        <InputGroup size='lg' width='100%'>
                            <Flex direction='column' gap='1rem' width='100%'>
                                <label color='gray.500'>
                                    Full name
                                    <Input paddingX='1.5rem' mt='.5rem' variant='outline' outline='4px' h='4rem' bg='white' type='text' name="full-name" id="fullName" />
                                </label>

                                <label color='gray.500'>
                                    Email
                                    <Input paddingX='1.5rem' mt='.5rem' variant='outline' h='4rem' bg='white' type='email' name="email" id="emailInput" />
                                </label>

                                <label color='gray.500'>
                                    Mobile number
                                    <Input paddingX='1.5rem' mt='.5rem' variant='outline' h='4rem' bg='white' type='tel' name="phone-number" id="phoneNumber" />
                                </label>

                                <Button width='35%' bg='#3f9f98' mt='1.5rem' h='4rem' color='white' isDisabled>Save changes</Button>
                            </Flex>
                        </InputGroup>
                    </form>
                </Flex>
            </Flex>

        </Box>
    );
}
 
export default Settings;