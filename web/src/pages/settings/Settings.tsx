import Head from 'next/head';
import React, { useEffect } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
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

      <Box p={2}>
        <Paper
          elevation={3}
          variant="outlined"
          className={classes.settingsContainer}
        >
          <Box p={2}>
            <Avatar
              className={classes.profilePicture}
              src="https://www.dennisgroup.com/wp-content/uploads/2018/10/San-Diego-California.jpg"
            />
            <Button
              className={classes.editProfileButton}
              variant="contained"
              size="small"
              startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </Box>
          <Box className={classes.informationEditContainer}>
            <Box p={3}>
              <Typography variant="h6">Name:</Typography>
              <TextField variant="outlined" fullWidth size="small" />
            </Box>
            <Box p={3}>
              <Typography variant="h6">Email:</Typography>
              <TextField variant="outlined" fullWidth size="small" />
            </Box>
            <Box p={3} mb={2}>
              <Typography variant="h6">Change password:</Typography>
              <hr />
              <Typography variant="subtitle1">Old password:</Typography>
              <TextField variant="outlined" fullWidth size="small" />
              <Typography variant="subtitle1">New password:</Typography>
              <TextField variant="outlined" fullWidth size="small" />
              <Typography variant="subtitle1">Confirm new password:</Typography>
              <TextField variant="outlined" fullWidth size="small" />
            </Box>
          </Box>
        </Paper>
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
  settingsContainer: {
    display: 'flex'
  },

  informationEditContainer: {
    width: '83%'
  },

  profilePicture: {
    width: 250,
    height: 250
  },

  editProfileButton: {
    position: 'absolute',
    left: 35,
    top: 300
  }
}));

export default Settings;
