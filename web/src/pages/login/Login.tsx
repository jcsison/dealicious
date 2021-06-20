import * as yup from 'yup';
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
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import { RootState } from '../../redux/store';
import { getUserThunk } from '../../redux/thunk/thunks';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup.string().required('Password is required')
});

export const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter();
  const userLoginSuccess = useSelector(
    (state: RootState) => state.DISPLAY_REDUCER.displaySuccess.userSuccess
  );
  const userLoginError = useSelector(
    (state: RootState) => state.DISPLAY_REDUCER.displayError.userError
  );

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      handleLogin();
    }
  });

  const handleLogin = () => {
    dispatch(getUserThunk(formik.values.email, formik.values.password));
  };

  React.useEffect(() => {
    if (userLoginSuccess) {
      router.push('/dashboard');
    }
  }, [userLoginSuccess]);

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
                {userLoginError && (
                  <Box display="flex" justifyContent="center" pb={1}>
                    <Typography variant="body1" color="error">
                      Email or Password is incorrect.
                    </Typography>
                  </Box>
                )}
                <Divider />
                <Box display="flex" justifyContent="center" m={1.5}>
                  <Button
                    onClick={handleLogin}
                    size="large"
                    variant="contained"
                    type="submit"
                  >
                    Login
                  </Button>
                </Box>
              </form>
              <Box display="flex" justifyContent="center">
                <Link href="/forgotpassword" variant="subtitle2">
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
