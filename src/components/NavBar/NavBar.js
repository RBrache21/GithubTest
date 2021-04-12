import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// // The lines imported below are used to customize the color of the components used from material-ui
 
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// this theme is used to change the properties of the material-ui components
const theme = createMuiTheme({
  status: {
    danger: '#e53e3e',
  },  
  palette: {
    primary: {
      main: '#e9eef1',
    },
    secondary: {
      main: '#00b7ba',
      extra: '#353e44'
    },
  },
});


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar color='primary'>
          <Typography color={'secondary'} variant="h6" className={classes.title}>
            Github Project
          </Typography>
          <Link to={'/'}><Button color='secondary'>Home</Button></Link>
          <Link to={'/users'}><Button color='secondary'>Users</Button></Link>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
    </div>
  );
}