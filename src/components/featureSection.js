import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import subBrandLogo from '../img/subBrandLogo.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:'4%',
    elevation:0

  },

  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
    maxHeight: '50%',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid container  >
      <Grid item xs={3} md={2} lg={3}className={classes.cardsize}>
        <Paper className={classes.root} elevation={0}>
        <CardActionArea>

        <CardContent>
        <img className={classes.img} src={subBrandLogo}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>  
        </CardActionArea>
        </Paper>
      </Grid>
      <Grid item xs={3} md={2} lg={3}>
      <Paper className={classes.root} elevation={0}>
        <CardActionArea>

        <CardContent>
        <img className={classes.img} src={subBrandLogo}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>  
        </CardActionArea>
        </Paper>
      </Grid>
      <Grid item xs={3} md={2} lg={3}>
      <Paper className={classes.root} elevation={0}>
        <CardActionArea>

        <CardContent>
        <img className={classes.img} src={subBrandLogo}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>  
        </CardActionArea>
        </Paper>
      </Grid>
      <Grid item xs={3} md={2} lg={3}>
      <Paper className={classes.root} elevation={0}>
        <CardActionArea>

        <CardContent>
        <img className={classes.img} src={subBrandLogo}/>
          <Typography variant="body2" color="textSecondary" component="p">
            Amazon
          </Typography>
        </CardContent>  
        </CardActionArea>
        </Paper>
        
      </Grid>
      
    </Grid>
  </div>
  );
}