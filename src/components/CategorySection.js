import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import CategoryData from './CategoryData'
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    // flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    padding:0,
    
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

      <GridList className={classes.gridList} >
        {CategoryData.map((tile) => (
          <Paper key={tile.img} style={{height:'100px'}}>
            <img src={tile.img} alt={tile.title} style={{borderRadius:'450px',height:'50%',marginTop:'5%',marginBottom:'5%'}}/>
            <Typography>
                {tile.title}
            </Typography>
          </Paper>
        ))}
      </GridList>
    </div>
  );
}
