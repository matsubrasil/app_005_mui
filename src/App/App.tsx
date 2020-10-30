import React from 'react';
import { createMuiTheme, CssBaseline } from '@material-ui/core';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';

// components
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';

import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import './App.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#333996',
      light: '#3c44b126'
    },
    secondary: {
      main: '#f83245',
      light: '#f8324526'
    },
    background: {
      default: '#f4f5fd'
    }
  },
  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)'
      }
    }
  },
  props: {
    MuiIconButton: {
      disableRipple: true
    }
  }
})


const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <SideMenu />
      <main className={classes.appMain}>
        <Header />
        <PageHeader
          title="Page header"
          subtitle="Page description"
          icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
        />
      </main>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
