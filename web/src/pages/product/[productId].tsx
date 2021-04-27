import Head from 'next/head';
import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Card,
  CardMedia,
  Divider,
  IconButton,
  makeStyles,
  Paper,
  Theme,
  Typography
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';

import { NavBar } from '../../shared/components/NavBar';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PRODUCT_A } from '../../redux/data/data-actions';
import { getProductThunk } from '../../redux/thunk/thunks';
import { RootState } from '../../redux/store';

export const Product = () => {
  const classes = useStyles();
  const router = useRouter();
  const dispatch = useDispatch();
  const { productId } = router.query;
  React.useEffect(() => {
    dispatch(getProductThunk(productId?.toString()));
  }, []);
  const product = useSelector((state: RootState) => state.DATA_REDUCER.product);

  return (
    <>
      <Head>
        <title>Product | Dealicious</title>
      </Head>

      <AppBar position="sticky">
        <NavBar />
      </AppBar>

      <Box display="flex" justifyContent="center" py={5} px={10}>
        <Box pr={2}>
          <Card>
            <CardMedia
              className={classes.profilePicture}
              image="https://www.retailgazette.co.uk/wp-content/uploads/Amazon_online-retail_ecommerce_delivery-box_ST-4.jpg"
            />
          </Card>
        </Box>
        <Paper
          elevation={3}
          variant="outlined"
          className={classes.settingsContainer}
        >
          <Box>
            <Box p={3}>
              <Typography variant="h6">{product?.name}</Typography>
            </Box>
            <Divider variant="middle" />
            <Box p={3}>
              <Typography variant="h6">Price: {product?.price}</Typography>
            </Box>
            <Divider variant="middle" />
            <Box p={3} mb={2}>
              <Typography variant="h6">About this item</Typography>
              <Typography variant="subtitle2">
                {product?.description}
              </Typography>
            </Box>
            <Divider variant="middle" />
            <Box p={3} display="flex" justifyContent="center">
              <IconButton>
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({
  settingsContainer: {
    width: 750
  },

  profilePicture: {
    width: 500,
    height: 500
  }
}));

export default Product;
