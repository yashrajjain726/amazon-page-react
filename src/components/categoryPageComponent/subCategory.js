import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddToQueueIcon from '@material-ui/icons/AddToQueue';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Categories from './../../pages/Categories';
import CategoryData from './CategoryCard'
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
    
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         <Typography  className={classes.title}>
            Explore all Categories
          </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddToQueueIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Amazon Prime</Typography>
        </AccordionSummary>
        <Grid container >
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container  >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>

       </Grid>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<AddToQueueIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Echo & Alexa</Typography>
        </AccordionSummary>
        <Grid container >
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container  >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>

       </Grid>
      </Accordion> <Accordion>
        <AccordionSummary
          expandIcon={<AddToQueueIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Women's Fashion</Typography>
        </AccordionSummary>
        <Grid container >
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container  >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>

       </Grid>
      </Accordion> <Accordion>
        <AccordionSummary
          expandIcon={<AddToQueueIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Men's Fashion</Typography>
        </AccordionSummary>
        <Grid container >
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container  >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>

       </Grid>
      </Accordion> <Accordion>
        <AccordionSummary
          expandIcon={<AddToQueueIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Large Appliances</Typography>
        </AccordionSummary>
        <Grid container >
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container  >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>

       </Grid>
      </Accordion> <Accordion>
        <AccordionSummary
          expandIcon={<AddToQueueIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Mobiles And SmartPhones</Typography>
        </AccordionSummary>
        <Grid container >
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container  >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>
        <Grid item xs={6} lg={3} container >
        <CategoryData/>
        </Grid>

       </Grid>
      </Accordion>
    </div>
  );
}
