import * as React from 'react';
import {Typography, Grid, Box, CardActionArea } from '@mui/material';
import rop from 'C:/Users/imlku/Documents/lan_portfolio/my-app/src/image/rop.png';
import frog from 'C:/Users/imlku/Documents/lan_portfolio/my-app/src/image/frog.png';
import npip from 'C:/Users/imlku/Documents/lan_portfolio/my-app/src/image/npip.png';
import gameloop from 'C:/Users/imlku/Documents/lan_portfolio/my-app/src/image/Gameloop.png';
import {StyledCard, StyledCardContent, StyledCardMedia, StyledTypography} from 'C:/Users/imlku/Documents/lan_portfolio/my-app/src/styles/styles';
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
    },
    {
    img: rop,
    title: 'Rites of Purgatory',
    role:'UI/UX, Art, Production | itch.io',
    description:
      'UI/UX asset creation and design in addtion to environment assets.',
    }
]

const eventCardData = [
    {
    img: gameloop,
    title: 'Gameloop Boston 2025',
    role:'Event Organizer | in person',
    description:
      'Organized a one day unconference and managed design of marketing and merchandize',
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
              sx={{
                aspectRatio: '16 / 9',
                borderBottom: '1px solid',
                borderColor: 'divider',
              }}
            />
            <StyledCardContent>
              <Typography gutterBottom variant="h6" component="div">
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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <div>
        <Typography variant="h1">
          Lan Kung
        </Typography>
        <Typography variant="h2" gutterBottom>
          UI/UX Artist
        </Typography>
        <Typography variant="h5" gutterBottom>I am Lan Kung, a 2D game artist and a community manager. Within my art practices, I mostly focus working as an UI/UX Artist. I eagerly bridge the gaps of communication between not just the developers and players, but also between members in my multi-disciplined teams.


I am also a Community Manager, I founded the IGDA Chapter in Smith College and has been organizing events in Boston focused on supporting the Game Developer community in Boston. 

              </Typography>
      </div>
      <Typography variant='h3'>Games</Typography>
      <Grid container spacing={2} columns={12}>
        {genGameCards(cardData)}
      </Grid>
      <Typography variant='h3'>Events</Typography>
      <Grid container spacing={2} columns={12}>
        {genGameCards(eventCardData)}
      </Grid>
    </Box>
  );
}