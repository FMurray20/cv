// At the top of your App.js or in your Footer.js if you create a separate component file
import React from 'react';
import { Box, Button, IconButton, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

// Define the Footer component
const Footer = () => {
    return (
        <Box sx={{
            maxWidth: '100%',
            width: '100%', // Ensure the width does not exceed the viewport
            margin: 'auto',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            borderTop: '1px solid #ccc',
            mt: 2,
            backgroundColor: '#2E3B55',
            boxSizing: 'border-box', // Include padding and border in the element's total width and height
        }}>
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center',
                mb: { xs: 2, sm: 0 },
                width: { sm: 'auto' }, // Adjust width for alignment
                px: 1, // Add horizontal padding to prevent content from touching the edges
                boxSizing: 'border-box', // Include padding and border in the element's total width and height
            }}>
                <Link href="https://www.linkedin.com/in/finlay-murray-3864b9208/" target="_blank" rel="noopener noreferrer" color="inherit" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    mb: { xs: 1, sm: 0 },
                    boxSizing: 'border-box', // Include padding and border in the element's total width and height
                }}>
                    <IconButton color="inherit" sx={{ color: '#fff' }}>
                        <LinkedInIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ ml: 1, color: '#fff', fontSize: { xs: '0.75rem', sm: '1rem' } }}>Finlay Murray</Typography>
                </Link>
                <Link href="mailto:finlay.murray20@virginmedia.com" color="inherit" sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                    ml: { xs: 0, sm: 2 },
                    boxSizing: 'border-box', // Include padding and border in the element's total width and height
                }}>
                    <IconButton color="inherit" sx={{ color: '#fff' }}>
                        <EmailIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ ml: 1, color: '#fff', fontSize: { xs: '0.75rem', sm: '1rem' } }}>finlay.murray20@virginmedia.com</Typography>
                </Link>
            </Box>
            <Box sx={{
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'flex-end' }, // Center align in mobile view, right align in larger views
                width: { xs: '100%', sm: 'auto' }, // Adjust width for alignment
                mt: { xs: 2, sm: 0 }, // Adjust margin for better spacing on mobile
            }}>
                <Button
                    href={`${process.env.PUBLIC_URL}/Finlay Murray CV.pdf`}
                    download
                    variant="contained"
                    sx={{
                        backgroundColor: '#D8A31A',
                        px: { xs: 2, sm: 3 },
                        py: 1,
                        fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                    }}
                >
                    Download CV
                </Button>
            </Box>
        </Box>
    );
};

function App() {
    return (
        <>
            <Footer />
        </>
    );
}

export default App;