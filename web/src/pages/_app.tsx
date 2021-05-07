import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import React from 'react';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import { theme } from '../styles/theme';
import { RootState, useStore } from '../redux/store';
import { redirect } from 'next/dist/next-server/server/api-utils';

export default function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);
  const user = store.getState().DATA_REDUCER.currentUser;

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
