import { Flex, Text, VStack } from "@chakra-ui/react";
import { MdDashboard } from '@react-icons/all-files/md/MdDashboard'
import { BsCurrencyExchange } from 'react-icons/bs'
import { IoWalletSharp } from '@react-icons/all-files/io5/IoWalletSharp'
import { AiOutlineTransaction } from '@react-icons/all-files/ai/AiOutlineTransaction'
import { IoIosCard } from '@react-icons/all-files/io/IoIosCard'
import { IoMdSettings } from '@react-icons/all-files/io/IoMdSettings'
import { BiSolidLogOut } from 'react-icons/bi'

import { Link } from "@chakra-ui/react";
import NextLink from 'next/link'
// import { useRouter } from "next/router";
import { usePathname } from 'next/navigation';
import '../globals.css'





const SideBar = ({ dashId, settId }) => {
    const currentRoute = usePathname();
    console.log(currentRoute)

    // className={currentRoute === "/some-path" 
    //    ? "active-class-name" 
    //    : "non-active-class-name"}
    return (
        <VStack spacing='.5rem' my='3.5rem' width='max-content'>
            <Link as={NextLink} href="/dashboard" width='100%' textDecorationLine='none' 
            _hover={{textDecorationLine:'none'}} className={currentRoute === '/dashboard' ? 'active' : ''}>
                <Flex alignItems='center' w='100%' gap={2} p='1rem' borderRadius='1rem' cursor='pointer'
                 _hover={{bg:'#ecf5f5', color:'#3f9f98', transition: 'all .4s ease-in-out', textDecorationLine: 'none'}} id={dashId} >
                        <MdDashboard color='#67689b' />
                        <Text fontSize='1rem' fontWeight='600' color='#67689b'>Dashboard</Text>
                </Flex>
            </Link>
                <Flex alignItems='center' w='100%' gap={2} p='1rem' borderRadius='1rem' cursor='pointer' 
                _hover={{bg:'#ecf5f5', color:'#3f9f98', transition: 'all .4s ease-in-out'}}>
                    <BsCurrencyExchange color='#67689b' />
                    <Text fontSize='1rem' fontWeight='600' color='#67689b'>Convert Funds</Text>
                </Flex>
                <Flex alignItems='center' w='100%' gap={2} p='1rem' borderRadius='1rem' cursor='pointer' 
                _hover={{bg:'#ecf5f5', color:'#3f9f98', transition: 'all .4s ease-in-out'}}>
                    <IoWalletSharp color='#67689b' />
                    <Text fontSize='1rem' fontWeight='600' color='#67689b'>Wallets</Text>
                </Flex>
                <Flex alignItems='center' w='100%' gap={2} p='1rem' borderRadius='1rem' cursor='pointer' 
                _hover={{bg:'#ecf5f5', color:'#3f9f98', transition: 'all .4s ease-in-out'}}>
                    <AiOutlineTransaction color='#67689b' />
                    <Text fontSize='1rem' fontWeight='600' color='#67689b'>Transactions</Text>
                </Flex>
                <Flex alignItems='center' w='100%' gap={2} p='1rem' borderRadius='1rem' cursor='pointer' 
                _hover={{bg:'#ecf5f5', color:'#3f9f98', transition: 'all .4s ease-in-out'}}>
                    <IoIosCard color='#67689b' />
                    <Text fontSize='1rem' fontWeight='600' color='#67689b'>Cards & Recipients</Text>
                </Flex>

                <Link as={NextLink} href='/dashboard/settings' width='100%' _hover={{textDecorationLine:'none'}}
                className={currentRoute === '/dashboard/settings' ? 'active' : ''}  >
                    <Flex alignItems='center' w='100%' gap={2} p='1rem' borderRadius='1rem' cursor='pointer' 
                    _hover={{bg:'#ecf5f5', color:'#3f9f98', transition: 'all .4s ease-in-out'}} id={settId} >
                        <IoMdSettings color='#67689b' />
                        <Text fontSize='1rem' fontWeight='600' color='#67689b'>Settings</Text>
                    </Flex>
                </Link>

                <Flex alignItems='center' w='100%' gap={2} p='1rem' borderRadius='1rem' cursor='pointer' 
                _hover={{bg:'#ecf5f5', color:'#3f9f98', transition: 'all .4s ease-in-out'}}>
                    <BiSolidLogOut color='#67689b' />
                    <Text fontSize='1rem' fontWeight='600' color='#67689b'>Log out</Text>
                </Flex>
        </VStack>
    );
}
 
export default SideBar;