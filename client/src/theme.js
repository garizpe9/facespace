import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  root: {
    flexGrow: 1,
    height: "100vh"
  },
  typography: {
    fontFamily: [
      'Shrikhand',
      'cursive',
    ]
  },
  borderBottom: {
    borderColor: 'success.main',
  },
  card: {
    borderColor: 'success.main',
    boxShadow: '5px 5px 5px lightblue',
  },
  palette: {
    primary: { main: pink[300] },
    secondary: { main: grey[700] },
    success: { main: green[400] },
    type: 'light',
  },
  font: {
    color: 'darkblue',
  },
});

export default theme