import Head from 'next/head';
import React, { useEffect } from 'react';
import { AppBar, Box, makeStyles, Paper, Theme } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { NavBar } from '../../shared/components/NavBar';
import { ProductCard } from '../dashboard/components/ProductCard';
import { RootState } from '../../redux/store';
import { getFavoritesThunk, getProductsThunk } from '../../redux/thunk/thunks';
import { Product } from '../../shared/domain';

export const Favorites = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const favoritedProducts = useSelector(
    (state: RootState) => state.DATA_REDUCER.userFavorites
  );

  const products: Product[] = favoritedProducts
    ? favoritedProducts.map((favoritedProduct) => ({
        id: favoritedProduct.productId,
        name: favoritedProduct.name,
        description: favoritedProduct.description,
        price: favoritedProduct.price,
        created_at: favoritedProduct.created_at
      }))
    : [];

  useEffect(() => {
    dispatch(getFavoritesThunk());
  }, []);

  return (
    <>
      <Head>
        <title>Favorites | Dealicious</title>
      </Head>

      <AppBar position="sticky">
        <NavBar />
      </AppBar>

      <Box p={4}>
        <Paper elevation={3} variant="outlined">
          <Box
            alignItems="center"
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            overflow="auto"
            maxHeight="70vh"
          >
            {products?.map((data, index) => {
              return (
                <Box key={index + data.name} p={2}>
                  <ProductCard product={data} />
                </Box>
              );
            })}
          </Box>
        </Paper>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  filterBox: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}));

export default Favorites;
