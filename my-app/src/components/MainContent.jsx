import * as React from 'react';
import {Typography, Grid, Box, CardActionArea, Container } from '@mui/material';
import rop from '../image/rop.png';
import frog from '../image/frog.png';
import npip from '../image/npip.png';
import gameloop from '../image/Gameloop.png';
import myname from '../image/myname.png';
import photo from '../image/photo.png';
import lilguys from '../image/lilguys.png';
import {StyledCard, StyledCardContent, StyledCardMedia, StyledTypography} from '../styles/styles';
import {Link} from 'react-router-dom';

const cardData = [
    {
    img: frog,
    title: 'Frogmageddon',
    role:'UI/UX, Art | PC',
    description:
      'UI/UX asset designs and creations',
    direction: '/frogmageddon'
    },
    {
    img: npip,
    title: 'No Party in Paradise',
    role:'UI/UX, Art | App Store',
    description:
      'UI/UX asset creation and implementation for a mobile application',
    direction: '/npip'
    },
    {
    img: rop,
    title: 'Rites of Purgatory',
    role:'UI/UX, Art, Production | itch.io',
    description:
      'UI/UX asset creation and design in addtion to environment assets.',
    direction: '/rop'
    }
]

const eventCardData = [
    {
    img: gameloop,
    title: 'Gameloop Boston 2025',
    role:'Event Organizer | in person',
    description:
      'Organized a one day unconference and managed design of marketing and merchandise',
    }  
]

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);


    function genGameCards(Datalist) {
      let gameCardList = []
      for(let i = 0; i < Datalist.length; i++){
        gameCardList.push( 
        <Grid key={i} size={{ xs: 12, md: 4 }}>
          <StyledCard
            variant="outlined"
            onFocus={() => handleFocus(0)}
            onBlur={handleBlur}
            tabIndex={0}
            className={focusedCardIndex === 0 ? 'Mui-focused' : ''}
            component={Link} 
            to={Datalist[i].direction}
          >
            <CardActionArea>
            <StyledCardMedia
              component="img"
              alt="img not working lul"
              image={Datalist[i].img}
            />
            <StyledCardContent>
              <Typography style={{fontFamily:"DM Serif Display"}} gutterBottom variant="h5" component="div" color='#090823'>
                {Datalist[i].title}
              </Typography>
              <Typography gutterBottom variant='h7'>
                {Datalist[i].role}
              </Typography>
              <StyledTypography variant="body2" color="text.secondary" gutterBottom>
                {Datalist[i].description}
              </StyledTypography>
            </StyledCardContent>
            </CardActionArea>
          </StyledCard>
        </Grid>)
      };
    return gameCardList;
  };
    
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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0, width: '100%', backgroundColor: '#FEFBE2' }}>
      <Box sx={{ width: '100%', backgroundColor: '#FEFBE2' }}>
        <Container
          maxWidth="xl"
          component="main"
          sx={{ display: 'flex', flexDirection: 'column', my: 16, width: '100%' }}>
          <Grid container>
            <Grid size={{ xs: 12, md: 6 }}>
              <img src={photo} width={"100%"}></img>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <img src={myname} width={"100%"}></img>
              <Typography variant="h5" gutterBottom style={{ padding: '20px' }} color='#090823' >I am Lan Kung, a 2D game artist and a community manager. Within my art practices, I mostly focus working as an UI/UX Artist. I eagerly bridge the gaps of communication between not just the developers and players, but also between members in my multi-disciplined teams.
                I am also a Community Manager, I founded the IGDA Chapter in Smith College and has been organizing events in Boston focused on supporting the Game Developer community in Boston. 
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box style={{backgroundColor: '#E1BD78'}}>
        <Container
          maxWidth="lg"
          component="main"
          sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4, width: '100%' }}>
          <Typography style={{fontFamily:"DM Serif Display"}} variant='h3'color='#090823'>Games</Typography>
          <Grid container spacing={2} columns={12}>
            {genGameCards(cardData)}
          </Grid>
          <Typography style={{fontFamily:"DM Serif Display"}} variant='h3'color='#090823'>Events</Typography>
          <Grid container spacing={2} columns={12}>
            {genGameCards(eventCardData)}
          </Grid>
        </Container>
        <img src={lilguys} style={{
                                      position: 'fixed',
                                      bottom: -60,
                                      right: 0,
                                      width: 300,
                                      height: 'auto',
                                      transform: 'scaleX(-1)',
                                    }}></img>
      </Box>
    </Box>
  );
}