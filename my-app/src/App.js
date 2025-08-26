import React, { Component } from 'react';
import AppAppBar from './components/AppAppBar';
import MainContent from './components/MainContent';
import { Container } from '@mui/material';


class App extends Component {
  render() {
    return (
      <div>
        <AppAppBar/>
        <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}>
          <MainContent/>
      </Container>
          
        
      </div>
    );
  }
}
export default App;