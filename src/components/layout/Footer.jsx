import React from 'react';
import { Box, Typography, Link } from '@mui/material';

export const Footer = () => {
    return (
        <Box
            sx={{
                width: '100%',
                py: 3,
                px: 2,
                backgroundColor: 'primary.dark',
                color: 'white',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" sx={{ mb: 1 }}>
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
                <Link href="/about" color="inherit" underline="hover">
                    About
                </Link>
                <Link href="/privacy" color="inherit" underline="hover">
                    Privacy Policy
                </Link>
                <Link href="/contact" color="inherit" underline="hover">
                    Contact
                </Link>
            </Box>
        </Box>
    );
};
