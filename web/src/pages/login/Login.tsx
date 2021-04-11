import Head from 'next/head';
import React from 'react';
import {
  Box,
  Button,
  Link,
  makeStyles,
  Paper,
  TextField,
  Theme,
  Typography
} from '@material-ui/core';

export const Login = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Login | Dealicious</title>
      </Head>

      <Box pt={5}>
        <Typography variant="h1" align="center">
          Dealicious
        </Typography>
      </Box>

      <Box px={85} py={10}>
        <Paper elevation={3} variant="outlined">
          <Box p={3}>
            <Box m={1}>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Box>
            <Box m={1}>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                size="small"
              />
            </Box>
            <Box display="flex" justifyContent="center" m={1}>
              <Button size="large" variant="contained">
                Login
              </Button>
            </Box>
            <Box display="flex" justifyContent="center">
              <Link variant="subtitle2" href="#">
                Forgot password?
              </Link>
            </Box>
          </Box>
          <Box pb={3} px={3} mb={1}>
            <hr />
            <Box pt={1} display="flex" justifyContent="center">
              <Button size="large" variant="contained">
                Create New Account
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({}));

export default Login;
