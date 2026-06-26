import React, { Component } from 'react';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import GamesPage from './components/GamesPage';
import EventOrg from './components/EventOrg';
import About from './components/About';
import Other from './components/Other';
import Frogmageddon from './gamesPages/frogPage'
import { Container } from '@mui/material';
import {Routes, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <AppAppBar/>
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4, width: '100%' }}>
          <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/games" element={<GamesPage />}/>
          <Route path="/event" element={<EventOrg />}/>
          <Route path="/other" element={<Other />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/frogmageddon" element ={<Frogmageddon />}/>
        </Routes>
        </Container>
        
      </div>
    );
  }
}
export default App;