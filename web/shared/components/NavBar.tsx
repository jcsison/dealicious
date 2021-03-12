import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import {
  AppBar,
  Box,
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
        <Toolbar>
          <IconButton edge="start">
            <MenuIcon />
          </IconButton>

          <Typography variant="h6">NavBar</Typography>
        </Toolbar>

        {tabBar && <TabBar />}
      </AppBar>

      <Box p={4}>{children}</Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {}
}));
