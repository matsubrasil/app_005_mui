import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100%',
    backgroundColor: '#253053',
  },
});

const SideMenu: React.FC = () => {
  const classes = useStyles();

  // console.log(classes);

  return <div className={classes.root}>SideMenu</div>;
};

export default SideMenu;
