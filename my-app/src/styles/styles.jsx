import { Card, CardContent, CardMedia, IconButton, Button, Typography, Grid, Box, styled, CardActionArea } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
  height: '100%',
  backgroundColor: (theme.vars || theme).palette.background.paper,
  '&:hover': {
    outline: '3px solid',
    outlineColor: '#2A2452',
    outlineOffset: '2px',
    cursor: 'pointer',
  },
  '&:focus-visible': {
    outline: '3px solid',
    outlineColor: 'hsla(210, 98%, 48%, 0.5)',
    outlineOffset: '2px',
  },
  borderRadius: '3%',
  padding: '5px'
}));

export const StyledCardContent = styled(CardContent)({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 16,
  flexGrow: 1,
  '&:last-child': {
    paddingBottom: 16,
  }
});

export const StyledTypography = styled(Typography)({
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const StyledCardMedia = styled(CardMedia)({
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.02, 1.02, 1)" },
    aspectRatio: '16 / 9',
    border: '3px solid',
    borderColor: '#2A2452',
    borderRadius: '3%',
    width: '98.5%'
  }
)