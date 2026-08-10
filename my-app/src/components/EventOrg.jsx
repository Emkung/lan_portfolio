import * as React from 'react';
import { Card, CardContent, CardMedia, IconButton, Button, Typography, Grid, Box, styled, CardActionArea, Container } from '@mui/material';
import gameloop from '../image/Gameloop.png';
import gap from '../image/gap.png';
import {StyledCard, StyledCardContent, StyledCardMedia, StyledTypography} from '../styles/styles.jsx';

const eventCardData = [
    {
    img: gameloop,
    title: 'Gameloop Boston 2025',
    role:'Event Organizer | in person',
    description:
      'Organized a one day unconference and managed design of marketing and merchandize',
    },  
    {
    img: gap,
    title: 'IGDA NYC Game-A-Palooza 2025',
    role:'Logo Design | in person',
    description:
      'Designed logo used for the event',
    }  
]

export default function MainContent() {
  const [focusedCardIndex, setFocusedCardIndex] = React.useState(null);

  const handleFocus = (index) => {
    setFocusedCardIndex(index);
  };

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
              >
                <CardActionArea>
                <StyledCardMedia
                  component="img"
                  alt="img not working lul"
                  image={Datalist[i].img}
                  sx={{
                    aspectRatio: '16 / 9',
                    borderBottom: '1px solid',
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

  const handleBlur = () => {
    setFocusedCardIndex(null);
  };

  const handleClick = () => {
    console.info('You clicked the filter chip.');
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, height: '100%' }}>
      <Container
        maxWidth="xl"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16, width: '100%', height: '100%' }}>
      <Typography variant='h3'>Events</Typography>
      <Grid container spacing={2} columns={12}>
        {genGameCards(eventCardData)}
      </Grid>
      </Container>
    </Box>
  );
}