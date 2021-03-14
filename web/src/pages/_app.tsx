import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import { store } from '../redux/store';
import { theme } from '../styles/theme';

interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  React.useEffect(() => {
    // Remove server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>Dealicious</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
