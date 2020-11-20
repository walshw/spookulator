import { createMuiTheme } from '@material-ui/core/styles';
import { deepPurple, orange } from '@material-ui/core/colors';

// Theme I think would be nice
//https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=673AB7&primary.text.color=ffffff&secondary.color=5a6abf

// This is the object for the above link
// secondary: {
// 	main: "#5a6abf",
// 	light: "#8d98f2",
// 	dark: "#23408e"
// },

// Theme I am currently using
//https://material.io/resources/color/#!/?view.left=1&view.right=0&primary.color=673AB7&secondary.color=424242&primary.text.color=ffffff


const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#673ab7",
			light: "#9a67ea",
			dark: "#320b86",
			contrastText: "#000000"
		},
		secondary: {
			main: "#424242",
			light: "#6d6d6d",
			dark: "#1b1b1b"
		},
		text: {
			default: "#FFFFFF",
			primary: "#FFFFFF",
		},
		background: {
			default: "#1b1b1b",
		},
	},
	spacing: 2,
	overrides: {
		MuiCard: {
			root: {
				background: "#320b86",
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
