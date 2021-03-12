import Head from 'next/head';
import React from 'react';
import { Box, Button, makeStyles, Theme, Typography } from '@material-ui/core';

import { NavBar } from '../../shared/components/NavBar';

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <NavBar tabBar>
        <Box className={classes.filterBox} border={2.5} mb={2.5}>
          <Box>
            <Typography variant="overline">Sample</Typography>
          </Box>
          <Button>Add Filter</Button>
        </Box>
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
  },
  filterBox: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));
