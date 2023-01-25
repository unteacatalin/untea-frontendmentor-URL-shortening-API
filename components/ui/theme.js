import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3b3054',
    },
    secondary: {
      main: '#f46262',
    },
    common: {
      cyan: '#2acfcf',
      darker_cyan: '#1e9494',
      dark_violet: '#3b3054',
      red: '#f46262',
      gray: '#bfbfbf',
      grayish_violet: '#9e9aa7',
      very_dark_blue: '#35323e',
      very_dark_violet: '#232127',
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    h1: {
      fontSize: '3.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h3: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 700,
    },
    h6: {
      fontSize: '0.9rem',
      fontWeight: 700,
    },
    body: {
      fontSize: '0.9rem',
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1920,
    },
  },
});

export default theme;
