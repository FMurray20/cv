// At the top of your App.js or in your Footer.js if you create a separate component file
import React from 'react';
import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GetAppIcon from '@mui/icons-material/GetApp';

// Define the Footer component
const Footer = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 2, borderTop: '1px solid #ccc', mt: 2 }}>
            <IconButton href="https://www.linkedin.com/in/finlay-murray-3864b9208/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
            </IconButton>
            <IconButton href="mailto:finlay.murray20@virginmedia.com">
                <EmailIcon />
            </IconButton>
            <IconButton href="/path-to-your-cv/your-cv.pdf" download>
                <GetAppIcon />
            </IconButton>
        </Box>
    );
};

// Then, add the Footer component at the bottom of your main content in App.js
function App() {
    return (
        <>
            {/* Your existing content */}
            <Footer /> {/* Place the Footer component here */}
        </>
    );
}

export default App;