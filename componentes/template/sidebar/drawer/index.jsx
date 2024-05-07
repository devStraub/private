import React from "react";

import {
    Drawer as MuiDrawer,
    styled,
} from '@mui/material';

export const AppDrawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: theme.spacing(35),
            maxHeight: '100vh',
            backgroundColor: 'var(--primary-color)',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            borderRadius: '0 30px 30px 0',
            overflowY: 'auto',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': {
                display: 'none'
            },
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(10),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(12),
                },
            }),
        },
    }),
);

export default {
    AppDrawer,
}