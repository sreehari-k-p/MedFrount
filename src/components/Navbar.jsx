import React from 'react';
import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
    <Box
    style={{
      backgroundColor: 'black',
      backgroundPosition: 'center',
      flexDirection: 'column',
      position: 'fixed',
      top :0,
      zIndex: 100,
    }}
    >
      <AppBar style={{ backgroundColor:'rgba(0,0,0,0.8)', boxShadow: 'none', backdropFilter:'blur(10px)' }}>
        <Toolbar >
          <IconButton
            variant="success"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            {/* Add your menu icon here if needed */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left'>
            MEDONMA LIFE CARE
          </Typography>
          <Button color="inherit" onClick={() => window.location.href = '/home'}>
            Home
          </Button>
          <Button color="inherit" onClick={() => window.location.href = '/about'}>
            About
          </Button>
          <Button color="inherit" onClick={() => window.location.href = '/contact'}>
            Contact
          </Button>
          <Button color="inherit" onClick={() => window.location.href = '/login'}>
            Login
          </Button>
          <Button color="inherit" onClick={() => window.location.href = '/signup'}>
            Signup
          </Button>
        </Toolbar>
      </AppBar>
      
    </Box>
    
  </>
  );
}

export default Navbar;
