import * as React from 'react';
import { Card, CardContent, CardMedia, IconButton, Button, Typography, Grid, Box, styled, CardActionArea } from '@mui/material';
import rop from '../image/rop.png';
import frog from '../image/frog.png';
import npip from '../image/npip.png';
import gpop from '../image/gpop.png';
import fright from '../image/fright.png';
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
    }
]

const jamCardData = [
    {
    img: rop,
    title: 'Rites of Purgatory',
    role:'UI/UX, Art, Production | itch.io',
    description:
      'UI/UX asset creation and design in addtion to environment assets.',
    },
    {
    img: gpop,
    role:'Art | Itch.io',
    title: 'Duchess Grizabella Nightfire99 in: Prom Panic at Bubblegum Island!',
    description:
      'Character assets and concepts',
    },
    {
    img: fright,
    role:'UI/UX, Art | Itch.io',
    title: 'Fright House',
    description:
      'UI/UX asset creation and implementation',
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
    }
    return gameCardList;
  }

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
      <Typography variant='h3'>Published Games</Typography>
      <Grid container spacing={2} columns={12}>
        {genGameCards(cardData)}
      </Grid>
      <Typography variant='h3'>Jam Games</Typography>
        <Grid container spacing={2} columns={12}>
        {genGameCards(jamCardData)}
      </Grid>
    </Box>
  );
}