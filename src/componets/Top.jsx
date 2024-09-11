import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Top = () => {
    return (
        <Box sx={{ flexGrow: 1, position: 'absolute', width: '100%', top: 0, }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} textAlign={'center'}>
                        Offer Share
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Top