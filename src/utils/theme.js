import { createMuiTheme } from '@material-ui/core/styles';
import { blueGrey } from '@material-ui/core/colors';

export default createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            // light: will be calculated from palette.primary.main,
            main: '#b79633'
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            // light: will be calculated from palette.primary.main,
            main: blueGrey[500]
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        }
    }
});
