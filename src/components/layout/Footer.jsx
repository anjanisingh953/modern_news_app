import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
                 <Box id="footer" sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar sx={{ backgroundColor: '#ce0c0c', display: 'flex', justifyContent: 'space-around' }}>
                        <Box>
                            <Typography variant="h6" component="div" sx={{ fontSize: '20px', fontStyle: 'italic', color: 'black', fontWeight: 'bolder' }}>
                            Modern News. All rights reserved &copy; 2025
                            </Typography>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
    </>
  )
}

export default Footer