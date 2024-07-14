// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#012B66', // --primary-color
    },
    secondary: {
      main: '#9CB8E7', // --accent-color:
    },
    background: {
      default: '#BED0EF', // --secondary-color
    },
    text: {
      primary: '#333333', // schwarz
    },
  },
});

export default theme;
