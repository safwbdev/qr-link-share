import React from 'react'
import { Box } from '@mui/material';

const QRBox = ({ qrImage, type }) => {
    return (
        <Box
            sx={{
                width: '100%',
                borderRadius: 1,
                bgcolor: 'primary.main',
                '&:hover': {
                    bgcolor: 'primary.dark',
                },
            }}
        >
            <img src={qrImage} alt={type} style={{ width: '100%' }} />
        </Box>
    )
}

export default QRBox