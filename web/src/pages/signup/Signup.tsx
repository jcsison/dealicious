import Head from 'next/head';
import React from 'react';
import {
  Box,
  Button,
  Divider,
  FormControl,
  InputLabel,
  Link,
  makeStyles,
  Paper,
  Select,
  TextField,
  Theme,
  Typography
} from '@material-ui/core';

export const Signup = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Sign Up | Dealicious</title>
      </Head>

      <Box pt={5}>
        <Typography variant="h1" align="center">
          Sign Up
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" width="100%">
        <Box width={500} py={10}>
          <Paper elevation={3} variant="outlined">
            <Box p={3}>
              <Box m={1} display="flex" justifyContent="space-between">
                <Box flexGrow="1" mr={1}>
                  <TextField
                    fullWidth
                    label="First Name"
                    variant="outlined"
                    size="small"
                  />
                </Box>
                <Box flexGrow="1" ml={1}>
                  <TextField
                    fullWidth
                    label="Last Name"
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Box>
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
              <Box mx={1}>
                <Typography variant="subtitle2">Birthday:</Typography>
              </Box>
              <Box m={1} display="flex">
                <Box flexBasis="50%" mr={1}>
                  <FormControl fullWidth variant="outlined" size="small">
                    <InputLabel>Month</InputLabel>
                    <Select label="Month" native>
                      <option aria-label="None" value="" />
                      <option value={1}>January</option>
                      <option value={2}>February</option>
                      <option value={3}>March</option>
                      <option value={4}>April</option>
                      <option value={5}>May</option>
                      <option value={6}>June</option>
                      <option value={7}>July</option>
                      <option value={8}>Auguest</option>
                      <option value={9}>September</option>
                      <option value={10}>October</option>
                      <option value={11}>November</option>
                      <option value={12}>December</option>
                    </Select>
                  </FormControl>
                </Box>
                <Box flexBasis="25%" mx={1}>
                  <TextField
                    label="Day"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Box>
                <Box flexBasis="25%" ml={1}>
                  <TextField
                    label="Year"
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Box>
              </Box>
            </Box>
            <Box pb={3} px={3} mb={1}>
              <Divider />
              <Box pt={1} display="flex" justifyContent="center">
                <Button size="large" variant="contained">
                  Create New Account
                </Button>
              </Box>
            </Box>
          </Paper>
          <Box mt={1} display="flex" justifyContent="center">
            <Link variant="subtitle2" href="/login">
              Sign in instead
            </Link>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const useStyles = makeStyles((theme: Theme) => ({}));

export default Signup;
