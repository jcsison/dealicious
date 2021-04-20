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
import { useFormik } from 'formik';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required')
});

export const Login = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

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
              <form onSubmit={formik.handleSubmit}>
                <Box m={1}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    fullWidth
                    size="small"
                  />
                </Box>
                <Box pb={3} m={1}>
                  <TextField
                    label="Password"
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.password && Boolean(formik.errors.password)
                    }
                    helperText={
                      formik.touched.password && formik.errors.password
                    }
                    variant="outlined"
                    fullWidth
                    size="small"
                  />
                </Box>
                <Divider />
                <Box display="flex" justifyContent="center" m={1.5}>
                  <Button size="large" variant="contained" type="submit">
                    Login
                  </Button>
                </Box>
              </form>
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
