import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CssBaseline } from '@material-ui/core';
import MicIcon from '@material-ui/icons/Mic';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SearchBar from './Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  
  
  },

  CenterFocusWeak:{
   marginLeft:'30px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
   
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <React.Fragment className={classes.root}>
          <CssBaseline/>
    
      <AppBar position="static" style={{backgroundColor:'#8BD7C1'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon style={{ color:'#282b2b'}}/>
          </IconButton>
         
          <Typography variant="h6" className={classes.title}>
          <a href="/">
          <b style={{ color:'#282b2b'}} >Amazon.in</b>
          </a> <br/>

            
          </Typography>
          <MicIcon style={{ color:'#282b2b', marginRight:'2%' }} />
          <LocalMallIcon style={{ color:'#282b2b'}}/> 
         
        </Toolbar>
       <SearchBar/>
      </AppBar>
      
    </React.Fragment>
  );
}