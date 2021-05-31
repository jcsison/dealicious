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
import * as yup from 'yup';
import { Field, FormikProvider, useFormik } from 'formik';
import router, { useRouter } from 'next/router';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required')
});

export const ForgotPassword = () => {
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validationSchema: validationSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      router.push('/login');
    }
  });

  return (
    <>
      <Head>
        <title>Sign Up | Dealicious</title>
      </Head>

      <Box pt={5}>
        <Typography variant="h1" align="center">
          Forgot Password
        </Typography>
      </Box>

      <Box display="flex" justifyContent="center" width="100%">
        <Box width={500} py={10}>
          <Paper elevation={3} variant="outlined">
            <form onSubmit={formik.handleSubmit}>
              <Box p={3}>
                <Box m={1}>
                  <TextField
                    label="Email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Box>
              </Box>
              <Box pb={3} px={3} mb={1}>
                <Divider />
                <Box pt={1} display="flex" justifyContent="center">
                  <Button size="large" variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
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

export default ForgotPassword;
