import Head from 'next/head';
import React from 'react';
import { Box, makeStyles, Theme } from '@material-ui/core';

import { NavBar } from '../../shared/components/NavBar';

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <NavBar tabBar>
        <Box
          alignItems="center"
          className={classes.main}
          display="flex"
          height="50vh"
          justifyContent="center"
        >
          <Box>Dashboard</Box>
        </Box>
      </NavBar>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  main: {
    backgroundColor: 'red'
  }
}));
