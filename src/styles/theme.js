import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: {
        main: orange[500]
      },
      secondary: {
        main: deepPurple[500]
      },
      text: {
          default: "#FFFF00",
          primary: "#FFFFFF"
      },
      background: {
          default: "#666667"
      }
    }
  })

  export default theme;

  // https://www.schemecolor.com/blue-orange-and-gray.php

  // https://material-ui.com/system/palette/

  //https://stackoverflow.com/questions/57966496/how-to-use-theme-in-styles-for-custom-class-components

  // https://material-ui.com/customization/default-theme/
  // ^ link to all variables in default theme

  // Example code ripped from: https://material-ui.com/customization/color/
  // This is the base theme for createMuiTheme()

  // palette: {
  //   primary: {
  //     light: '#757ce8',
  //     main: '#3f50b5',
  //     dark: '#002884',
  //     contrastText: '#fff',
  //   },
  //   secondary: {
  //     light: '#ff7961',
  //     main: '#f44336',
  //     dark: '#ba000d',
  //     contrastText: '#000',
  //   },
  // }
