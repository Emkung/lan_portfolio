import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, Grid, Typography, Box, styled, Container} from '@mui/material';
import menu from '../image/game asset img/npip/assets/asset1.png';
import screen1 from '../image/game asset img/gpop/screenshots/screen1.png';
import screen2 from '../image/game asset img/gpop/screenshots/screen2.png';
import screen3 from '../image/game asset img/gpop/screenshots/screen3.png';
import screen4 from '../image/game asset img/gpop/screenshots/screen4.png';

import {StyledCard, StyledCardContent, StyledCardMedia, StyledTypography} from '../styles/styles';
import YouTube from 'react-youtube';

const PageData = 
    {
        title: "Duchess Grizabella Nightfire99 in: Prom Panic at Bubblegum Island!",
        teamData: "6 people",
        role: "2D Artist", 
        tools: "Clip Studio Paint",
        timeline: "2 days",
        blurb: "",
        myWork: "Directed visual aesthetic of the game. Addiontally, also created concepts for the player character and boss and rendered it.",
        assets:[],
        promo:[],
        screenshots:[screen1, screen2, screen3, screen4],
        showcase:"Frog Con (charity bundle) 2025 \n PlayNYC 2025 \n PAX East 2025 \n Game Developers Conference (GDC) 2025 \n Boston Festival of Indie Games (BFIG) 2024",
    }
const StyledImgLst = styled(ImageList)(({ theme }) => ({
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  }))

const StyledDiv = styled('div')(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden'
  }))

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  }; 

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', backgroundColor: '#FEFBE2' }}>
      <Container
              maxWidth="xl"
              component="main"
              sx={{ display: 'flex', flexDirection: 'column', my: 16, width: '100%', height: '100%' }}>
      <Typography style={{fontFamily:"DM Serif Display"}} variant='h1' color='#090823'>{PageData.title}</Typography>
      <Box sx={{ height: '50px' }} ></Box>
      <Grid container>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant='h5'>My Role</Typography>
          <Typography variant='h6'>{PageData.role}</Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant='h5'>Team</Typography>
          <Typography variant='h6'>{PageData.teamData}</Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant='h5'>Tools</Typography>
          <Typography variant='h6'>{PageData.tools}</Typography>
        </Grid>
        <Grid item size={{ xs: 12, md: 3 }}>
          <Typography variant='h5'>Timeline</Typography>
          <Typography variant='h6'>{PageData.timeline}</Typography>
        </Grid>
      </Grid>
      <Box sx={{ height: '30px' }} ></Box>
      <Typography variant='h5'>{PageData.blurb}</Typography>
      <Box sx={{ height: '50px' }} ></Box>
      <Typography style={{fontFamily:"DM Serif Display"}} color='#090823' variant='h3'>Process</Typography>
      <Box sx={{ height: '20px' }} ></Box>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm: 6, md: 5 }}>
            <Typography variant='h4'>Art</Typography>
            <Typography variant='h6'>{PageData.myWork}</Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 7 }} sx={{display:"flex", alignItems: "center"}}>
          <StyledDiv>
          <StyledImgLst cols={2}>
            {PageData.screenshots.map((item) => (
              <ImageListItem key={item}>
                <img src={item}/>
              </ImageListItem>
            ))}
          </StyledImgLst >
          </StyledDiv>
        </Grid>
      </Grid>
      </Container>
      
      <StyledDiv>
        {/* <Box sx={{
          background: '#b0c8b8',
          width: "100%",
          position: "absolute",
          boxSizing: "border-box"
        }}>
          <Container
            maxWidth="xl"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', my: 2, width: '100%', height: '100%' }}>
          <Typography variant='h3' sx={{ position: 'relative', top: '25px', height: '100px' }}>Assets</Typography>
          <StyledImgLst cols={1}>
            {PageData.assets.map((item) => (
              <ImageListItem key={item}>
                <img src={item}/>
              </ImageListItem>
            ))}
          </StyledImgLst >
          </Container>
        </Box> */}
      </StyledDiv>
    </Box>
  );
}