import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography
} from '@material-ui/core';

import { TabBar } from './TabBar';

interface NavBarProps {
  children: React.ReactNode;
  tabBar?: boolean;
}

export const NavBar = ({ children, tabBar }: NavBarProps) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Box display="flex" alignItems="center">
            <IconButton edge="start">
              <MenuIcon />
            </IconButton>

            <Typography variant="h6">NavBar</Typography>
          </Box>

          <Button variant="contained">Go To Favorites</Button>
        </Toolbar>

        {tabBar && <TabBar />}
      </AppBar>

      <Box p={4}>{children}</Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {},
  toolbar: { display: 'flex', justifyContent: 'space-between' }
}));
