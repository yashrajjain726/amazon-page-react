import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import CategoryData from './CategoryData'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding:0,
    elevation:'0 !important'
    
  },
  gridList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
    
  },
  image:{
      borderRadius:'450px'
  }
}));

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

     <center>
     <GridList className={classes.gridList} >
        {CategoryData.map((tile) => (
            <Paper key={tile.img} style={{height:'100px',elevation:'0'}} >
           <a href="/category"> 
           <img src={tile.img} alt={tile.title} style={{borderRadius:'450px',height:'50%',marginTop:'5%',marginBottom:'5%'}}/>
            <Typography style={{color:'black'}}>
                {tile.title}
            </Typography>
           </a>
          </Paper>

        ))}
      </GridList>
     </center>
    </div>
  );
}
