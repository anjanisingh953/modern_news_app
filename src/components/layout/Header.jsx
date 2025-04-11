import { Search } from '@mui/icons-material'
import { AppBar, Box, Button, List, ListItem, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
const Header = () => {
  return (
    <>
              <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ backgroundColor: '#ce0c0c', display: 'flex', justifyContent: 'space-around' }}>
                        <Box>
                            <Typography variant="h6" component="div" sx={{ fontSize: '30px', fontStyle: 'italic', fontFamily: "Rock Salt", color: 'black', fontWeight: 'bolder' }}>
                                Modern News
                            </Typography>
                        </Box>
                        <Box sx={{ fontSize: '20px' }}>
                            <List sx={{ display: 'flex' }}>
                                <ListItem>Business</ListItem>
                                <ListItem>Entertainment</ListItem>
                                <ListItem>General</ListItem>
                                <ListItem>Health</ListItem>
                                <ListItem>Science</ListItem>
                                <ListItem>Sports</ListItem>
                                <ListItem>Technology</ListItem>
                            </List>
                        </Box>
                        <Box >
                            <TextField id="search_box" sx={{ background: '#fff', borderBottom: 'none !important' }} variant='standard' placeholder='Search...' />
                            <Button variant='contained' sx={{ height: '32px', color: '#fff', background: '#000', marginLeft: '0px' }} >Search</Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
    </>
  )
}

export default Header