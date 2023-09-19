'use client'
import { Box,  Heading, Grid, GridItem, Flex, Button, Image, Link  } from "@chakra-ui/react";

import SideBar from "../components/sideBar";
import Header from "../components/header";
// import Settings from "../components/settings";
import Settings from "./settings/page";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';




const DashboardLayout = ({ children }) => {

    const [avatar, setAvatar] = useState(null);

    const handleAvatarChange = (e) => {
      const selectedFile = e.target.files[0];
      console.log(selectedFile)
      setAvatar(URL.createObjectURL(selectedFile)); 
    };

    return (
            <Grid templateColumns='16% 84%' gap={4} h='100vh' >
                <GridItem py='3rem' px='1rem' pr='2rem' bg='white' as='aside'>
                    <Box><Heading as='h3' fontSize='1.5rem'>Croimo Logo</Heading></Box>
                    <SideBar  />
                </GridItem>

                <GridItem bg='gray.100' px='2rem' pt='1rem' >
                    <Header avatar={avatar} setAvatar={setAvatar} />

                    <Box overflowY='auto' height='100vh' scrollbar-width='none' as='article'>
                        {children}
                    </Box>
                </GridItem>
            </Grid>
    );
}
export default DashboardLayout;