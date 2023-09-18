import { Box, Container, Heading, Text, Input, InputGroup, Flex, Button, Link } from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'


const SignIn = () => {
    return (
        <Container w='50%' bg='#ecf5f5' mx='auto' my='6rem' py='2.5rem' centerContent borderRadius='1rem'>
            <Flex direction='column' align='center' w='80%'>
                <Box bg='white' borderRadius='50%' p='.2rem' alignSelf='flex-end' mb='2rem' cursor='pointer'>
                    < MdClose bg='black' />
                </Box>

                
                <Heading as='h4' fontSize='2xl' fontWeight='600' pb='3rem'>Sign in</Heading>
                <form action="" width='100%'>
                    <InputGroup size='lg' width='100%'>
                        <Flex direction='column' gap='2rem' >
                            <label>
                                Email
                                <Input variant='filled' bg='white' type='email' name="email" id="emailInput" />
                            </label>

                            <label>
                                Password
                                <Input variant='filled' bg='white' type='password' name="user-password" id="passwordInput" />
                            </label>

                            <Link href='#' fontSize='.8rem' alignSelf='flex-end' mt='-1.5rem' textDecoration='underline' fontWeight='600'>Forgot password?</Link>

                            <Button bg='#3f9f98' color='white'>Sign in</Button>
                        </Flex>
                    </InputGroup>
                </form>

                <Text mt='1rem' mb='1rem' fontSize='1rem'>New to Croimo? <Link href='/signup' color='#3f9f98' fontWeight='700'>Create an account</Link></Text>
            </Flex>
        </Container>
    );
}
 
export default SignIn;