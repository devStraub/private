import React from 'react';

import {
    Box,
    Paper,
} from '@mui/material';

// Components
import MainHeader from './header';

export default function MainBody({ children }) {

    return (
        <Box
            bgcolor={'var(--back-color)'}
            sx={{
                minHeight: '88%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingLeft: '5rem',
                paddingTop: '2rem',
                gap: '1rem',
            }}
        >
            <Box
                sx={{
                    minWidth: '90%',
                }}
            >
                <MainHeader />
            </Box>
            <Paper
                elevation={6}
                style={{
                    minWidth: '90%',
                    borderRadius: '1rem',
                }}
            >
                {children}
            </Paper>
        </Box>
    )
}