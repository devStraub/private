import React from "react";

import {
    Box,
    Badge,
    IconButton,
    Popover,
    Card,
    CardHeader,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Checkbox,
    FormControlLabel,
    ListItemButton,
    Divider,
} from "@mui/material";
import {
    Close,
    LightbulbOutlined,
    NotificationsNone,
} from "@mui/icons-material";

export default function Notifications() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const listItemNotification = () => {
        return (
            <ListItem
                alignItems="flex-start"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: 'var(--primary-color)',
                    borderLeft: '2px solid var(--secondary-color)',
                    position: 'relative',
                    '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: '-5px',
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--secondary-color)',
                    },
                }}
            >
                <ListItemText
                    primary="Autor"
                    secondary="01/01/2000 às 00:00"
                    sx={{

                    }}
                />
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <ListItemButton
                        sx={{
                            display: 'flex',
                            alignItems: 'top',
                            justifyContent: 'start',
                            border: 'none',
                            boxShadow: 'none',
                            padding: '0',
                            '&:hover': {
                                backgroundColor: 'transparent',
                            },
                        }}
                    >
                        <LightbulbOutlined
                            variant="contained"
                            sx={{
                                color: 'var(--secondary-color)',
                            }}
                        />
                        <span>Oportunidade 99</span>
                    </ListItemButton>
                    <FormControlLabel
                        control={
                            <Checkbox
                                sx={{
                                    color: 'var(--secondary-color)',
                                    '&.Mui-checked': {
                                        color: 'var(--secondary-color)',
                                    },
                                }}
                            />
                        }
                        label="Lido"
                        sx={{
                            color: 'var(--text-inactive)',
                        }}
                    />
                </Box>
                <ListItemButton
                    sx={{
                        backgroundColor: 'var(--secondary-color)',
                        '&:hover': {
                            backgroundColor: 'var(--secondary-color)',
                        },
                    }}
                >
                    <span>Cotei com outra marca</span>
                </ListItemButton>
            </ListItem>
        )
    }

    return (
        <>
            <IconButton
                onClick={handleClick}
                sx={{

                }}
            >
                <Badge
                    variant="dot"
                    sx={{
                        '& .MuiBadge-badge': {
                            backgroundColor: 'var(--secondary-color)',
                        },
                    }}
                >
                    <NotificationsNone fontSize="large" />
                </Badge>
            </IconButton>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                sx={{
                    zIndex: 9999,
                }}
            >
                <Card
                    sx={{
                        width: '23rem',
                        height: '20rem',
                        display: 'flex',
                        flexDirection: 'column',
                        overflowY: 'auto',
                    }}
                >
                    <CardHeader
                        title="Notificações"
                        titleTypographyProps={{
                            fontWeight: 'bold',
                            fontSize: '1.275rem',
                        }}
                        action={
                            <IconButton
                                onClick={handleClose}
                            >
                                <Close />
                            </IconButton>
                        }
                        sx={{
                            color: 'var(--text-inactive)',
                        }}
                    />
                    <CardContent>
                        <List>
                            {listItemNotification()}
                        </List>
                    </CardContent>
                </Card>
            </Popover>
        </>
    )
}