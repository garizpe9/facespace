import { createMuiTheme } from '@material-ui/core/styles'
import pink from '@material-ui/core/colors/pink';
import grey from '@material-ui/core/colors/grey';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
          'Shrikhand',
          'cursive',
        ]},
  palette: {
    primary: { main: pink[300] },
    secondary: { main: grey[700] },
    type: 'light',
  },
})

export default theme