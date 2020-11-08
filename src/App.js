import MainContainer from './components/MainContainer'
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import theme from './styles/theme'

function App() {

	return (
		<div>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<MainContainer />
			</ThemeProvider>
		</div>
	);
}

export default App;
