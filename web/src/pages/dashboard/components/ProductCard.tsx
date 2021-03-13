import React from 'react';
import clsx from 'clsx';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  IconButton,
  makeStyles,
  Theme,
  Typography
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const ProductCard = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Box>
        <Card elevation={3} variant="outlined" className={classes.main}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Product Name"
          />
          {
            <CardMedia
              className={classes.media}
              image="https://static01.nyt.com/images/2021/03/03/us/03xp-amazon-logo/oakImage-1614794068335-articleLarge.jpg"
            />
          }
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Example of card content.
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Product description.</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: theme.palette.action.disabledBackground
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  }
}));
