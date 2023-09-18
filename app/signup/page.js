import { Box, Container, Heading, Text, Input, InputGroup, Flex, Button, Link } from '@chakra-ui/react'
import { MdClose } from 'react-icons/md'


const SignUp = () => {
    return (
        <Container w='50%' bg='#ecf5f5' mx='auto' my='6rem' py='2.5rem' centerContent borderRadius='1rem'>
            <Flex direction='column' align='center' w='80%'>
                <Box bg='white' borderRadius='50%' p='.2rem' alignSelf='flex-end' mb='2rem' cursor='pointer'>
                    < MdClose bg='black' />
                </Box>

                
                <Heading as='h4' fontSize='2xl' fontWeight='600' pb='3rem'>Create account</Heading>
                <form action="" width='100%'>
                    <InputGroup size='lg' width='100%'>
                        <Flex direction='column' gap='2rem' >
                            <label>
                                Full Name
                                <Input  variant='filled' bg='white' type='text' name="full-name" id="fullName" />
                            </label>

                            <label>
                                Email
                                <Input variant='filled' bg='white' type='email' name="email" id="emailInput" />
                            </label>

                            <label>
                                Mobile Number
                                <Input variant='filled' bg='white' type='tel' name="phone-number" id="phoneNumber" />
                            </label>

                            <label>
                                Password
                                <Input variant='filled' bg='white' type='password' name="user-password" id="passwordInput" />
                            </label>

                            <Button bg='#3f9f98' color='white'>Create Your Account</Button>
                        </Flex>
                    </InputGroup>
                </form>

                <Text pt='1rem' fontSize='1rem'>Already have an account? <Link href='/signin' color='#3f9f98' fontWeight='700'>Sign In</Link></Text>
            </Flex>
        </Container>
    );
}
 
export default SignUp;