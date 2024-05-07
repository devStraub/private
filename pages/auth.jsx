import React from 'react';
import Image from 'next/image';

import {
    Grid,
    Box,
    Avatar,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Link,
    OutlinedInput,
    InputAdornment,
    IconButton,
    FormControl,
    InputLabel,
} from '@mui/material';

import {
    LockOutlined as LockOutlinedIcon,
    Visibility,
    VisibilityOff,
} from '@mui/icons-material';

// resources
import background from '../resources/image/authbackground.jpeg'
import logo from '../resources/image/xplanning.png'

export default function Auth() {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);

    const handleSubmit = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
                height: '100vh',
                color: 'var(--primary-color)',
            }}
        >
            <Grid item xs={12} sm={6}
                sx={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Box
                    sx={{
                        my: 8,
                        mx: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'start',
                        gap: 2,
                    }}
                >
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '10px',
                        }}
                    >
                        <Image
                            src={logo}
                            alt="logo"
                            width={200}
                        />
                    </Box>
                    <Box>
                        <h3 style={{ fontWeight: 'bolder' }}>Entrar</h3>
                    </Box>
                    <Box>
                        <span style={{color: 'var(--text-inactive)', fontWeight: 'bold'}}>
                            Seja bem-vindo, por favor informe seus dados
                            para efetuar o login
                        </span>
                    </Box>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                        <InputLabel htmlFor="email">Email*</InputLabel>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <InputLabel htmlFor="outlined-adornment-password">Senha*</InputLabel>
                        <FormControl fullWidth variant="outlined">
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        <Grid container
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginTop: 1,
                                marginBottom: 1
                            }}
                        >
                            <Grid item xs>
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Me mantenha logado"
                                />
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Esqueceu sua senha?
                                </Link>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                marginTop: 3,
                                marginBottom: 2,
                                backgroundColor: 'var(--secondary-color)',
                                color: 'inherit',
                                padding: '20px',
                                zIndex: 5,
                                '&:hover': {
                                    backgroundColor: 'var(--secondary-hover-color)',
                                },
                            }}
                        >
                            <span>Entrar</span>
                        </Button>
                    </Box>
                </Box>

            </Grid>
            <Grid item xs={false} sm={6}
                sx={{
                    position: 'relative',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <div style={{
                    borderRadius: '40px 0px 0px 40px',
                    overflow: 'hidden',
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%'
                }}>
                    <Image
                        src={background}
                        alt="background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                    <div style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(213.48deg, #2B3674 34.08%, #24F191 141.36%)',
                        backgroundBlendMode: 'multiply',
                        opacity: 0.85,
                    }} />
                </div>
            </Grid>
        </Grid>
    );
};