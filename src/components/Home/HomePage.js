import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './HomePage.css';

// The lines imported below are used to customize the color of the components used from material-ui
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e9eef1',
    },
    secondary: {
      main: '#00b7ba',
    },
  },
});

const HomePage = () => {
	return (
		<div>
		<ThemeProvider theme={theme}>
			<div>
				<h1 className='heading'>BIENVENIDOS AL PROYECTO</h1>
				<Link to='/users'><Button variant='contained' color='secondary' className='button'>Github Users</Button></Link>
			</div>
		</ThemeProvider>
		</div>
	);
}

export default HomePage;