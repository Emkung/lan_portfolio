import * as React from 'react';
import { Toolbar, 
  AppBar,
   Typography,
    Button, 
    Box, 
    Container,  
    alpha, 
    styled,
    createTheme, 
    ThemeProvider} from '@mui/material';
    import {Link} from 'react-router-dom';

export default function AppAppBar() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{
        boxShadow: 0,
        height: '100px',
        bgcolor: '#E1BD78',
        backgroundImage: 'none',
      }}
    >
      <Box sx={{ display: 'flex', width: '100%', height:'100%', gap:'20px', alignItems: 'center', justifyContent: 'center' }}>
            <Button variant="contained" size="large" component={Link} to={'/'} style={{ marginLeft: "auto" }}>
              Home
            </Button>
            <Button variant="contained" size="large" component={Link} to={'/games'}>
              Games
            </Button>
            <Button variant="contained" size="large" component={Link} to={'/event'}>
              Events
            </Button>
            {/* <Button variant="contained" size="large" component={Link} to={'/other'}>
              Other
            </Button> */}
            {/* <Button variant="contained" size="large" component={Link} to={'/about'}>
              About
            </Button> */}
            <Box
              sx={{
                width:'25px',
              }}
            >
            </Box>
          </Box>
    </AppBar>
  );
}