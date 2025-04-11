import { AppBar, Box, Button, List, ListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{backgroundColor:'#ce0c0c'}}>
                    <Box>
                            <Typography variant="h6" component="div" sx={{fontSize:'30px',fontStyle:'italic',fontFamily: "Rock Salt",color:'black',fontWeight:'bolder'}}>
                                Modern News
                            </Typography>
                        </Box>
                        <Box sx={{marginLeft:'auto',fontSize:'18px'}}>
                            <List sx={{ display:'flex'}}>
                            <ListItem>Business</ListItem>
                            <ListItem>Entertainment</ListItem>
                            <ListItem>General</ListItem>
                            <ListItem>Health</ListItem>
                            <ListItem>Science</ListItem>
                            <ListItem>Sports</ListItem>
                            <ListItem>Technology</ListItem>
                            </List>
                        </Box>
                        <Box>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar