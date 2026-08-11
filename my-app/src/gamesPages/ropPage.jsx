import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, Grid, Typography, Box, styled, Container} from '@mui/material';
import menu from '../image/game asset img/rop/assets.png';
import screen1 from '../image/game asset img/rop/screenshots/screen1.png';
import screen2 from '../image/game asset img/rop/screenshots/screen2.png';
import screen3 from '../image/game asset img/rop/screenshots/screen3.png';
import screen4 from '../image/game asset img/rop/screenshots/screen4.png';
import screen5 from '../image/game asset img/rop/screenshots/screen5.png';

import {StyledCard, StyledCardContent, StyledCardMedia, StyledTypography} from '../styles/styles';
import YouTube from 'react-youtube';

const PageData = 
    {
        title: "Rites of Purrgatory",
        teamData: "6 people",
        role: "UI Artist, 2D Artist", 
        tools: "Clip Studio Paint, Trello",
        timeline: "2 days",
        blurb: "",
        myWork: "In Rites of Purrgatory, I try to make the UI more illustrative to get the theme and setting of the game across. In the process of making the assets more illustrative I also had to work around making illustrative assets more module. Finally I also worked on the background assets on the map and the main focus of the background is to make the assets reusable without feeling repetitive.",
        productions: "I managed the team Trello board as well as the Google Drive of the team throughout the project period. I also inform the team of deadlines we need to hit during the project deadline.",
        assets:[menu],
        promo:[],
        screenshots:[screen1, screen2, screen3, screen4, screen5],
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
      <Typography variant='h3'>Process</Typography>
      <Box sx={{ height: '20px' }} ></Box>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm: 6, md: 5 }}>
            <Typography variant='h4'>UI/UX</Typography>
            <Typography variant='h6'>{PageData.myWork}</Typography>
            <Typography variant='h4'>Productions</Typography>
            <Typography variant='h6'>{PageData.productions}</Typography>
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
        <Box sx={{
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
        </Box>
      </StyledDiv>
    </Box>
  );
}