import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Tab,
  Tabs,
  Theme,
  Typography
} from '@material-ui/core';

export const TabBar = () => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (e, value) => {
    setCurrentTab(value);
  };

  return (
    <>
      <Box className={classes.box} pr={5.5}>
        <Tabs value={currentTab} onChange={handleChangeTab}>
          <Tab label="Topic One" />
          <Tab label="Topic Two" />
          <Tab label="Topic Three" />
        </Tabs>
        <Box>
          <Button variant="contained">New Topic</Button>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {},
  box: { display: 'flex', justifyContent: 'space-between' }
}));
