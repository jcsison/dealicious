import Head from 'next/head';
import React, { useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { NavBar } from '../../shared/components/NavBar';
import { getProductsThunk } from '../../redux/thunk/thunks';

export const Settings = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  return (
    <>
      <Head>
        <title>Settings | Dealicious</title>
      </Head>

      <AppBar position="sticky">
        <NavBar />
      </AppBar>

      <Box p={3}>
        <Typography variant="h6">Name:</Typography>
        <TextField
          id="outlined-name"
          variant="outlined"
          fullWidth
          size="small"
        />
      </Box>
      <Box p={3}>
        <Typography variant="h6">Email:</Typography>
        <TextField
          id="outlined-name"
          variant="outlined"
          fullWidth
          size="small"
        />
      </Box>
      <Box p={3} mb={2}>
        <Typography variant="h6">Change password:</Typography>
        <hr />
        <Typography variant="subtitle1">Old password:</Typography>
        <TextField
          id="outlined-name"
          variant="outlined"
          fullWidth
          size="small"
        />
        <Typography variant="subtitle1">New password:</Typography>
        <TextField
          id="outlined-name"
          variant="outlined"
          fullWidth
          size="small"
        />
        <Typography variant="subtitle1">Confirm new password:</Typography>
        <TextField
          id="outlined-name"
          variant="outlined"
          fullWidth
          size="small"
        />
      </Box>
      <Box display="flex" justifyContent="center">
        <Button size="large" variant="contained">
          Update profile
        </Button>
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

export default Settings;
