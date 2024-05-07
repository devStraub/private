import React from "react";

// MUI
import {
    Box,
} from '@mui/material';

// components
import Sidebar from "../sidebar/";
import Overlays from "../overlays";
import MainBody from "./main/";
import PageHeader from "../header/";

export default function Dashboard({ children }) {

    return (
        <Box
            sx={{
                minHeight: '100vh',
                minWidth: '100vw',
                display: 'flex',
            }}>
            <Sidebar />
            <Box
                sx={{
                    minWidth: '100%',
                    minHeight: '100%',
                }}
            >
                <PageHeader />
                <MainBody>
                    {children}
                </MainBody>
            </Box>
            <Overlays />
        </Box>
    )
}