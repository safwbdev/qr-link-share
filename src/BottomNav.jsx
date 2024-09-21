import React from 'react'

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DownloadIcon from '@mui/icons-material/Download';
const BottomNav = ({ value, setValue }) => {
    return (
        <Box sx={{ width: '100%', bottom: 0, position: 'absolute' }}>
            <BottomNavigation
                showLabels
                value={value}
                style={{
                    background: 'lightGrey'
                }}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
                <BottomNavigationAction label="Portfolio" icon={<SlideshowIcon />} />
                <BottomNavigationAction label="CV" icon={<DownloadIcon />} />
                <BottomNavigationAction label="#" icon={<DownloadIcon />} />
            </BottomNavigation>
        </Box >
    )
}

export default BottomNav