import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// components
import SideMenu from '../components/SideMenu';
import Header from '../components/Header';

import './App.css';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%',
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <main className={classes.appMain}>
        <Header />
      </main>
      <CssBaseline />
    </>
  );
}

export default App;
