import React from "react";

// MUI
import {
    Box,
    Divider,
} from '@mui/material';
import {
    AccountCircle,
    NotificationsOutlined,
} from "@mui/icons-material";

// Components
import UserMenu from "./userMenu";
import Notifications from "./notification";


export default function PageHeader() {

    return (
        <Box
            component="header"
            sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                minHeight: '12%',
                borderBottom: '1px solid lightgray',
                flexWrap: 'wrap',
                paddingLeft: '5rem',
                paddingY: '0.5rem',
            }}>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                    }}
                >
                    <h3 style={{ fontWeight: 'bold', color: 'var(--secondary-color)' }}>X</h3>
                    <h3>Conecta</h3>
                </Box>
                <Divider orientation="vertical" flexItem sx={{ margin: '0.5rem' }} />
                <Box
                    sx={{
                        display: 'flex',
                        gap: '0.2rem',
                        flexWrap: 'wrap',
                        height: '100%',
                    }}
                >
                    <h4 style={{ color: 'var(--text-inactive)' }}>Bem vindo,</h4>
                    <h4 style={{ fontWeight: 'bold', color: 'var(--text-inactive)' }}>Fulano</h4>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >                
                <Notifications />
                <UserMenu />
            </Box>
        </Box>
    )
}