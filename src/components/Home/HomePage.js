import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { HomePageContainer, Header} from './HomePage.styles'

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
		<HomePageContainer>
			<ThemeProvider theme={theme}>
				<div>
					<Header className='heading'>Bienvenidos al proyecto.<br /> Presione el botón para continuar</Header>
					<Link to='/users'><Button variant='contained' color='secondary' style={{color: '#e9eef1'}}>Github Users</Button></Link>
				</div>
			</ThemeProvider>
		</HomePageContainer>
	);
}

export default HomePage;