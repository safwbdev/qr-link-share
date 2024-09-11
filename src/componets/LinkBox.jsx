import React from 'react'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import {
    FormControl, IconButton,
    OutlinedInput,
    InputLabel,
    InputAdornment,
} from '@mui/material';

const LinkBox = ({ url, type }) => {
    return (
        <FormControl
            onClick={() => navigator.clipboard.writeText(url)} sx={{ width: '100%', mt: 3 }} variant="outlined"
        > <InputLabel htmlFor="outlined-adornment-password">{type}</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={'text'}
                value={url}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                        >
                            <ContentCopyIcon />
                        </IconButton>
                    </InputAdornment>
                }
                label={type}
            />
        </FormControl >
    )
}

export default LinkBox