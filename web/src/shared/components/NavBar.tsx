import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography
} from '@material-ui/core';

export const NavBar = () => {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <Toolbar className={classes.toolbar}>
        <Box display="flex" alignItems="center">
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">NavBar</Typography>
        </Box>
        {router.pathname === '/favorites' ? (
          <Button onClick={() => router.push('/dashboard')} variant="contained">
            Go To Dashboard
          </Button>
        ) : (
          <Button onClick={() => router.push('/favorites')} variant="contained">
            Go To Favorites
          </Button>
        )}
      </Toolbar>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {},
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: 7
  }
}));
