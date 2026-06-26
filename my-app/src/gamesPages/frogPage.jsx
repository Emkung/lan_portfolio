import * as React from 'react';
import { ImageList, ImageListItem, ImageListItemBar, Grid, Typography, Box, styled} from '@mui/material';
import menu from '../image/game asset img/frog/frog3.png';
import mode from '../image/game asset img/frog/frog2.png';
import gmplay from '../image/game asset img/frog/frog4.png';
import ctrl from '../image/game asset img/frog/frog1.png';
import screen1 from '../image/game asset img/frog/screenshots/screen1.png';
import screen2 from '../image/game asset img/frog/screenshots/screen2.png';
import screen3 from '../image/game asset img/frog/screenshots/screen3.png';
import screen4 from '../image/game asset img/frog/screenshots/screen4.png';
import screen5 from '../image/game asset img/frog/screenshots/screen5.png';
import screen6 from '../image/game asset img/frog/screenshots/screen6.png';
import screen7 from '../image/game asset img/frog/screenshots/screen7.png';

import {StyledCard, StyledCardContent, StyledCardMedia, StyledTypography} from '../styles/styles';
import YouTube from 'react-youtube';

const PageData = 
    {
        title: "Frogmageddon",
        teamData: "8 people",
        role: "UI/UX Artist, 2D Artist", 
        tools: "Clip Studio Paint, Unity",
        timeline: "August 2024 - November 2025",
        blurb: "Frogmageddon is a vampire survival-like game where you control an army of frogs to fight against the snake menaces. \n \n I worked as a UI/UX and 2D Artist on the project. My responsibility included illustrating background, UI/UX, and promotional assets as well as directing implementation.",
        myWork: "As the projected demanded a lot of versatility and re-usability of the asset, the one of the main goal as a UI/UX Artist to for the different components of the assets to be modular and able to be used reused on different contexts. Therefore keeping the shapes and color scheme simple allows the different assets to be combined more easily. It also allows for more complex design such as the different statues representing the different game modes.",
        productions: "While working in a team of 8 and running an LLC with everyone, I assisted with lead producer with keeping everyone on task as well organized periodic meeting for the team members to gather and discuss for the next steps. Finally, I also managed the organizational elements of the team Google Drive and press kit. ",
        assets:[menu, mode, gmplay, ctrl],
        promo:[],
        screenshots:[screen1, screen2, screen3, screen4, screen5, screen6, screen7],
        vids:['https://youtu.be/SJQMZu2K6cQ?si=Ncs77j80ukgsq2fN','https://youtu.be/RfK-5tOTJ88?si=6pHDVaMQgUjS41FC'],
        showcase:"Frog Con (charity bundle) 2025 \n PlayNYC 2025 \n PAX East 2025 \n Game Developers Conference (GDC) 2025 \n Boston Festival of Indie Games (BFIG) 2024",
        acolades:"This game was chosen as a Showcase Game for the 2024 Boston Festival of Indie Games and was awarded Best Design at the  Northeastern University Games Showcase. Frogmageddon was also played by Vinny Vinesauce after showcasing at PAX East 2024. It also was ranked \#60 / 7,605 for Enjoyment and \#263 / 7,605 Overall in GMTK 2024.",
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

const vidOptions = {
  height: '390',
  width: '640',
  playerVars: {
    autoplay: 1,
    controls: 1,
  },
};

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
    
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%' }}>
      <Typography style={{fontFamily:"Metal Mania"}} variant='h1'>{PageData.title}</Typography>
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
      <Typography variant='h5'>{PageData.blurb}</Typography>
      <Typography variant='h3'>Process</Typography>
      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
            <Typography variant='h4'>UI/UX</Typography>
            <Typography variant='h6'>{PageData.myWork}</Typography>
            <Typography variant='h4'>Productions</Typography>
            <Typography variant='h6'>{PageData.productions}</Typography>
            <Typography variant='h4'>Accolades</Typography>
            <Typography variant='h6'>{PageData.acolades}</Typography>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6, md: 6 }}>
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
      <YouTube videoId="SJQMZu2K6cQ" options={vidOptions} id="video"/>
      
      <StyledDiv>
        <Box sx={{
          background: '#b0c8b8',
          width: "99.7vw",
          height: '220vh',
          position: "absolute",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          boxSizing: "border-box",
          zIndex: -1
        }}/>
        <Typography variant='h3' sx={{ position: 'relative', top: '25px', height: '100px' }}>Assets</Typography>
        <StyledImgLst cols={1}>
          {PageData.assets.map((item) => (
            <ImageListItem key={item}>
              <img src={item}/>
            </ImageListItem>
          ))}
        </StyledImgLst >
      </StyledDiv>
    </Box>
  );
}