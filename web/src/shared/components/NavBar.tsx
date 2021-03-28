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
  activeTab: number;
  addTopic: (topicToAdd: string) => void;
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
  handleTabChange: (tab: number) => void;
  handleTopicRemove: (topicNumber: number) => void;
  topics: string[];
}

export const NavBar = ({
  children,
  tabBar,
  activeTab,
  addTopic,
  open,
  handleOpen,
  handleClose,
  handleTabChange,
  handleTopicRemove,
  topics
}: NavBarProps) => {
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

        {tabBar && (
          <TabBar
            activeTab={activeTab}
            addTopic={addTopic}
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            handleTabChange={handleTabChange}
            handleTopicRemove={handleTopicRemove}
            topics={topics}
          />
        )}
      </AppBar>

      <Box p={4}>{children}</Box>
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
