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
import * as yup from 'yup';
import { Field, FormikProvider, useFormik } from 'formik';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter a valid first name')
    .required('First name is required'),
  lastName: yup
    .string()
    .matches(/^[A-Za-z ]*$/, 'Please enter a valid last name')
    .required('Last name is required'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should between 8-32 characters')
    .max(32, 'Password should between 8-32 characters')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{0,}$/,
      'Passwould should have at least one letter and one number'
    )
    .required('Password is required'),
  month: yup.string().required(),
  day: yup
    .number()
    .min(1, 'Day must be between 1-31')
    .max(31, 'Day must be between 1-31')
    .required('Day is required'),
  year: yup
    .number()
    .integer('Please enter a valid year')
    .positive('Please enter a valid year')
    .required('Year is required')
});

export const Signup = () => {
  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      month: '',
      day: '',
      year: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

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
            <form onSubmit={formik.handleSubmit}>
              <Box p={3}>
                <Box m={1} display="flex" justifyContent="space-between">
                  <Box flexGrow="1" mr={1}>
                    <TextField
                      name="firstName"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      size="small"
                    />
                  </Box>
                  <Box flexGrow="1" ml={1}>
                    <TextField
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.firstName &&
                        Boolean(formik.errors.firstName)
                      }
                      helperText={
                        formik.touched.firstName && formik.errors.firstName
                      }
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
                <Box m={1}>
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
                <Box mx={1}>
                  <Typography variant="subtitle2">Birthday:</Typography>
                </Box>
                <Box m={1} display="flex">
                  <Box flexBasis="50%" mr={1}>
                    <FormControl fullWidth variant="outlined" size="small">
                      <InputLabel>Month</InputLabel>
                      <FormikProvider value={formik}>
                        <Field
                          name="month"
                          value={formik.values.month}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.month && Boolean(formik.errors.month)
                          }
                          as={Select}
                          label="Month"
                          native
                        >
                          <option aria-label="None" value="" />
                          <option value={1}>January</option>
                          <option value={2}>February</option>
                          <option value={3}>March</option>
                          <option value={4}>April</option>
                          <option value={5}>May</option>
                          <option value={6}>June</option>
                          <option value={7}>July</option>
                          <option value={8}>August</option>
                          <option value={9}>September</option>
                          <option value={10}>October</option>
                          <option value={11}>November</option>
                          <option value={12}>December</option>
                        </Field>
                      </FormikProvider>
                    </FormControl>
                  </Box>
                  <Box flexBasis="25%" mx={1}>
                    <TextField
                      label="Day"
                      name="day"
                      value={formik.values.day}
                      onChange={formik.handleChange}
                      error={formik.touched.day && Boolean(formik.errors.day)}
                      helperText={formik.touched.day && formik.errors.day}
                      variant="outlined"
                      fullWidth
                      size="small"
                    />
                  </Box>
                  <Box flexBasis="25%" ml={1}>
                    <TextField
                      label="Year"
                      name="year"
                      value={formik.values.year}
                      onChange={formik.handleChange}
                      error={formik.touched.year && Boolean(formik.errors.year)}
                      helperText={formik.touched.year && formik.errors.year}
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
                  <Button size="large" variant="contained" type="submit">
                    Create New Account
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

export default Signup;
