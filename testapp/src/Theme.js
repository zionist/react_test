import { createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

const theme = createMuiTheme1({
  palette: {
    primary: green,
    secondary: purple,
  },
  status: {
    danger: 'orange',
  },
});