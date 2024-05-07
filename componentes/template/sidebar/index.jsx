import React from 'react';
import Image from 'next/image';

// MUI
import {
    CssBaseline,
    Box,
    Toolbar,
    IconButton,
    List,
    Divider,
    Button,
    Avatar,
} from '@mui/material';

import {
    ChevronLeft as ChevronLeftIcon,
    KeyboardDoubleArrowLeft,
    KeyboardDoubleArrowRight,
} from '@mui/icons-material';

// Redux
import { useSelector, useDispatch } from 'react-redux';
import { setDrawerOpen } from '../../../redux/reducers/component/template/dashboard/menu/';

// Components
import { AppDrawer } from './drawer';
import Menu from './menu';

// Resources
import logo from '../../../resources/image/logo.png';

export default function Sidebar() {

    const dispatch = useDispatch();
    const drawerOpen = useSelector(state => state.menu.drawerOpen);

    React.useEffect(() => {

    }, []);

    return (
        <Box
            sx={{
                display: 'flex',
                minHeight: '100vh',
                position: 'absolute',
                zIndex: 9999,
                overflow: 'hidden',
            }}>
            <AppDrawer
                variant="permanent"
                open={drawerOpen}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        padding: '1rem',
                        height: '13%',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '1rem',
                        }}
                    >
                        <Image src={logo} width={70} height={70} style={{ borderRadius: '50%' }} />
                        {drawerOpen &&
                            <Box
                                sx={{
                                    color: 'white',
                                }}
                            >
                                <strong>BMA Advogados</strong>
                                <p>Usuário</p>
                            </Box>
                        }
                    </Box>
                    <Divider
                        sx={{
                            marginLeft: '10%',
                            backgroundColor: 'var(--secondary-color)'
                        }}
                    />
                    <IconButton
                        variant='contained'
                        disableElevation
                        sx={{
                            display: 'flex',
                            width: '2rem',
                            paddingLeft: '1.5rem',
                            backgroundColor: 'transparent',
                        }}
                        onClick={() => {
                            dispatch(setDrawerOpen(!drawerOpen))
                        }}>
                        {drawerOpen ? <KeyboardDoubleArrowLeft sx={{ color: 'var(--secondary-color)' }} /> : <KeyboardDoubleArrowRight sx={{ color: 'var(--gray-color)' }} />}
                    </IconButton>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'start',
                            flexDirection: 'column',
                            gap: '1rem',
                        }}
                    >
                        <Menu />
                    </Box>
                </Box>
            </AppDrawer>
        </Box>
    );
}