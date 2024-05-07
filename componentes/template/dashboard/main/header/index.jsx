import React from 'react';
import { useRouter } from 'next/router';

// Mui
import {
    Box,
    Button,
} from '@mui/material';
import { Replay } from '@mui/icons-material';

// Redux
import { useSelector, useDispatch } from 'react-redux';


// Components

export default function MainHeader() {

    const router = useRouter();
    const breadcrumbs = useSelector(state => state.mainHeader.breadcrumbs);
    const pageTitle = useSelector(state => state.mainHeader.pageTitle);
    const breadcrumbsLine = useSelector(state => state.mainHeader.breadcrumbsLine);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
            }}
        >
            {breadcrumbsLine &&
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        color: 'gray',
                    }}
                >
                    <Button style={{ backgroundColor: '#E0E5F2', color: 'var(--text-blue)' }} variant="contained" startIcon={<Replay />}>
                        <span>Voltar</span>
                    </Button>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '0.2rem',
                        }}
                    >
                        <span style={{ color: 'var(--inactive-test)' }}>{breadcrumbs}</span>
                    </Box>
                </Box>
            }
            <h3 style={{ color: 'var(--blue-text)' }}>
                {pageTitle}
            </h3>
        </Box>
    )
}