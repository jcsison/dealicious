import { createMuiTheme } from '@material-ui/core';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    background: {
      main: React.CSSProperties['color'];
    };
  }

  interface ThemeOptions {
    background: {
      main: React.CSSProperties['color'];
    };
  }
}

export const theme = createMuiTheme({
  background: {
    main: '#F1F5F9'
  },
  palette: {
    type: 'dark'
  },
  props: {
    MuiPaper: {
      square: true
    },
    MuiTab: {
      disableRipple: true
    }
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    h1: {
      fontSize: 24,
      fontWeight: 600
    },
    h2: {
      fontSize: 18,
      fontWeight: 600
    },
    h3: {
      fontSize: 16,
      fontWeight: 600
    },
    h4: {
      fontSize: 14,
      fontWeight: 600
    },
    h5: {
      fontSize: 13,
      fontWeight: 500
    },
    subtitle1: {
      fontSize: 16,
      fontWeight: 500
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500
    },
    body1: {
      fontSize: 14,
      fontWeight: 400
    },
    body2: {
      fontSize: 12,
      fontWeight: 400
    },
    button: {
      fontSize: 12,
      fontWeight: 500,
      textTransform: 'none'
    }
  }
});
