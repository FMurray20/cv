import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const drawerWidth = 240;
const navItems = ['About', 'Education', 'Experience', 'Projects', 'Skills',];

function Navbar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [activeNavItem, setActiveNavItem] = React.useState(props.view); // Add this line

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleNavItemClick = (item) => {
        setActiveNavItem(item); // Update the active nav item
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <div style={{ padding: '10px', background: '#2E3B55' }}>
                <img src={`${process.env.PUBLIC_URL}/FM.png`} alt="Finlay Murray Logo" style={{ width: '50%', padding: '10px' }} />
            </div>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                console.log('Clicked', item);
                                handleNavItemClick(item); // This should now also update `view` in App.js
                                props.onNavItemClick(item); // Assuming this function is passed from App.js
                            }}
                            disabled={props.view === item} // Use the `view` prop to determine the active item
                            sx={{
                                backgroundColor: props.view === item ? 'primary.main' : 'inherit',
                                color: props.view === item ? 'primary.contrastText' : 'inherit',
                                '&:hover': {
                                    backgroundColor: props.view === item ? 'primary.main' : 'inherit',
                                },
                            }}
                        >
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar style={{ background: '#2E3B55' }} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={`${process.env.PUBLIC_URL}/FM.png`} alt="Finlay Murray Logo" style={{ height: '50px', padding: '10px' }} />
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                disabled={activeNavItem === item}
                                sx={{
                                    color: '#fff',
                                    // Conditional styling: if item matches current view, apply additional styles
                                    backgroundColor: activeNavItem === item ? '#4A5A70' : 'transparent',
                                    '&:hover': {
                                        // Ensure the hover style for non-active items is explicitly set
                                        backgroundColor: activeNavItem === item ? '#4A5A70' : '#rgba(255, 255, 255, 0.08)', // Adjust the hover color as needed
                                    },
                                    '&.Mui-disabled': {
                                        color: '#fff', // Keeps text color white even when disabled
                                    }
                                }}
                                onClick={() => {
                                    setActiveNavItem(item); // Update the active nav item
                                    props.onNavItemClick(item); // Use the same function to handle click
                                }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    );
}

Navbar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default Navbar;