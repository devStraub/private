import React from "react";

// mui
import {
    Box,
    Button,
    Avatar,
} from '@mui/material';
import {
    KeyboardArrowDown,
    Person,
    Lock,
    PowerSettingsNew,
    KeyboardArrowUp,
} from '@mui/icons-material';


export default function UserMenu() {

    const [menuOpen, setMenuOpen] = React.useState(false);
    const [isHovered, setIsHovered] = React.useState({
        trocarSenha: false,
        sair: false,
    });

    function handleHover(item) {
        setIsHovered({
            trocarSenha: item === 'trocarSenha',
            sair: item === 'sair',
        });
    }

    return (
        <Box
            sx={{ position: 'relative', display: 'inline-block' }}
            onMouseLeave={() => handleHover(null)}
        >   
            
            <Button
                onClick={() => setMenuOpen(!menuOpen)}
                variant="contained"
                style={{             
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                    background: 'var(--header-button-color)',
                    gap: '1rem',
                    position: 'relative',
                    zIndex: '1',
                }}
            >
                <Box
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                    }}
                >
                    <Avatar
                        sx={{
                            bgcolor: 'var(--secondary-color)',
                        }}>
                        <Person />
                    </Avatar>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            color: 'var(--primary-color)',
                        }}
                    >
                        <span style={{ fontWeight: 'bold' }}>Fulano Beltrano</span>
                        <span>Perfil</span>
                    </Box>
                    <Box
                        sx={{
                            color: 'var(--primary-color)'
                        }}
                    >
                        {menuOpen ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </Box>
                </Box>
                {menuOpen &&
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '95%',
                            left: '0',
                            width: '100%',                            
                            zIndex: '2',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',        
                            justifyContent: 'center',                 
                            boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',                            
                            background: 'var(--header-button-color)',
                            color: 'var(--text-inactive)',
                        }}
                    >
                        <Button
                            onMouseEnter={() => handleHover('trocarSenha')}
                            onMouseLeave={() => handleHover(null)}
                            onClick={() => { console.log('trocar senha') }}
                            style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'start',
                                paddingLeft: '1rem',
                                paddingY: '0.5rem',
                                gap: '0.5rem',
                                color: 'inherit',
                            }}
                        >
                            <Lock style={{ color: isHovered.trocarSenha ? 'var(--secondary-color)' : 'inherit' }} />
                            <span>Trocar Senha</span>
                        </Button>
                        <Button
                            onMouseEnter={() => handleHover('sair')}
                            onMouseLeave={() => handleHover(null)}
                            onClick={() => { console.log('sair') }}
                            style={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'start',
                                paddingLeft: '1rem',
                                paddingY: '0.5rem',
                                gap: '0.5rem',
                                color: 'inherit',
                            }}
                        >
                            <PowerSettingsNew style={{ color: isHovered.sair ? 'var(--secondary-color)' : 'inherit' }} />
                            <span>Sair</span>
                        </Button>
                    </Box>
                }
            </Button>
            
        </Box>
    )
}