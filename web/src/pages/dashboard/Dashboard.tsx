import Head from 'next/head';
import React from 'react';
import {
  Box,
  Button,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';

import { NavBar } from '../../shared/components/NavBar';
import { ProductCard } from './components/ProductCard';

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Dashboard | Dealicious</title>
      </Head>

      <NavBar tabBar>
        <Box className={classes.filterBox} border={2.5} mb={2.5}>
          <Box>
            <Typography variant="overline">Sample</Typography>
          </Box>
          <Button>Add Filter</Button>
        </Box>
        <Paper elevation={3} variant="outlined">
          <Box
            alignItems="center"
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            overflow="auto"
            maxHeight="70vh"
          >
            <Box p={2}>
              <ProductCard />
            </Box>
          </Box>
        </Paper>
      </NavBar>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  filterBox: {
    display: 'flex',
    justifyContent: 'space-around'
  }
}));

export default Dashboard;
