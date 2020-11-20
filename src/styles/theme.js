import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#E36C14",
			contrastText: "#000000"
		},
		secondary: {
			main: "#1C4EAA"
		},
		text: {
			default: "#FFFF00",
			primary: "#FFFFFF"
		},
		background: {
			default: "#666667"
		},
	},
	spacing: 2,
	overrides: {
		MuiCard: {
			root: {
				background: "#2F2D92",
				margin: 15,
				padding: 15
			}
		}
	},
	mixins: {
		toolbar: {
			minHeight: 78
		}
	},
})

export default theme;

//   const useStyles = makeStyles((theme) => ({
//     root: {
//       ...theme.typography.button,
//       backgroundColor: theme.palette.background.paper,
//       padding: theme.spacing(1),
//     },
//   }));


  // https://www.schemecolor.com/blue-orange-and-gray.php

  // https://material-ui.com/system/palette/

  // https://material-ui.com/styles/advanced/
  // ^ Info on overriding theme with makeStyles

  //https://stackoverflow.com/questions/57966496/how-to-use-theme-in-styles-for-custom-class-components

  // https://material-ui.com/customization/default-theme/
  // ^ link to all variables in default theme

  // This is part of the base theme for createMuiTheme()
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
