// Si usas createTheme de @mui/material/styles
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto', // o la fuente que prefieras
      'Arial',
      'Helvetica',
      'sans-serif'
    ].join(','),
  },
  // ...otros settings
});

export default theme;