import Head from 'next/head';
import React, { useEffect } from 'react';
import {
  Box,
  Button,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { NavBar } from '../../shared/components/NavBar';
import { ProductCard } from './components/ProductCard';
import { RootState } from '../../redux/store';
import { getProductsThunk } from '../../redux/thunk/thunks';

export const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.DATA_REDUCER);
  console.log(products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

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
