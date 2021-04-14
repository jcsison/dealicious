import Head from 'next/head';
import React from 'react';
import {
  Box,
  Button,
  Divider,
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

      <Box display="flex" justifyContent="center">
        <Box width={500} py={10}>
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
              <Box pb={3} m={1}>
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  size="small"
                />
              </Box>
              <Divider />
              <Box display="flex" justifyContent="center" m={1.5}>
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
          </Paper>
          <Box mt={1}>
            <Box pt={1} display="flex" justifyContent="center">
              <Link href="/signup" variant="subtitle2">
                Create New Account
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({}));

export default Login;
