import React, { useState } from 'react';
import { AppBar, makeStyles, Tab, Tabs, Theme } from '@material-ui/core';

export const TabBar = () => {
  const classes = useStyles();

  const [currentTab, setCurrentTab] = useState(0);

  const handleChangeTab = (e, value) => {
    setCurrentTab(value);
  };

  return (
    <Tabs value={currentTab} onChange={handleChangeTab}>
      <Tab label="Topic One" />
      <Tab label="Topic Two" />
      <Tab label="Topic Three" />
    </Tabs>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {}
}));
