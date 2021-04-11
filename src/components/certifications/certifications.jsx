import React from 'react';
import Paper from '@material-ui/core/Paper';
import './certifications.css'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
   paddingTop:10,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));


export default function Certifications() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className="container">
                <h2 className="sub-heading">Professional <span className="title">Certifications</span> <Divider variant="middle" /> </h2>
            
        </div>
      <Paper className={classes.paper}>
          <Grid container wrap="nowrap" spacing={2}>
            <Grid item>
            <Avatar alt="Remy Sharp" src={require("../../images/udemy.png") }/>
            </Grid>
            <Grid item xs zeroMinWidth>
              <Typography noWrap>ReactJs Web Development</Typography>
              <Typography>Udemy</Typography>
            </Grid>
          </Grid>
    
      </Paper>
     
     
      
    </div>
  );
}