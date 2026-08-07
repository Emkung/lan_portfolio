import React, { Component } from 'react';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import GamesPage from './components/GamesPage';
import EventOrg from './components/EventOrg';
import About from './components/About';
import Other from './components/Other';
import Frogmageddon from './gamesPages/frogPage';
import Npip from './gamesPages/npipPage';
import Fright from './gamesPages/frightPage';
import Rop from './gamesPages/ropPage';
import { Box, Container, createTheme, ThemeProvider } from '@mui/material';
import {Routes, Route} from 'react-router-dom';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
        contained: {
          backgroundColor: "#2A2452"
        }
      },
      defaultProps: {
        disableElevation: true
      }
    }, 
  },
});

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppAppBar/>
        <Box sx={{ height: '100vh', backgroundColor: '#FEFBE2'}}>
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/games" element={<GamesPage />}/>
            <Route path="/event" element={<EventOrg />}/>
            <Route path="/other" element={<Other />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/frogmageddon" element ={<Frogmageddon />}/>
            <Route path="/npip" element ={<Npip />}/>
            <Route path="/fright" element ={<Fright />}/>
            <Route path="/rop" element ={<Rop />}/>
          </Routes>
        </Box>
      </ThemeProvider>
    );
  }
}
export default App;