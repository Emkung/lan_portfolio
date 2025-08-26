import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button, Stack} from '@mui/material'
import AppAppBar from './components/AppAppBar';


class App extends Component {
  render() {
    return (
      <div>
        {/* <AppBar position="static">
          <Toolbar color = 'black'>
            <Typography variant="title" color="inherit">
           </Typography>
           <Stack spacing={2} direction="row-reverse">
            <Button variant='outlined' color='white'>Games</Button>
            <Button variant='outlined' color='white'>Event Organization</Button>
            <Button variant='outlined' color='white'>Illustration</Button>
            <Button variant='outlined' color='white'>About</Button>
           </Stack>
          </Toolbar>
        </AppBar> */}
        <AppAppBar></AppAppBar>
      </div>
    );
  }
}
export default App;