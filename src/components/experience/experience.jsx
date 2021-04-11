import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    paddingTop :10,
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));



export default function ExperienceComponent() {
  const classes = useStyles();
 
  

  return (
    <div className={classes.root}>
        <div className="container">
                <h2 className="sub-heading">Experience <span className="title">Summary</span> <Divider variant="middle" /> </h2>
            
        </div>
      <Stepper orientation="vertical">
          <Step>
            <StepLabel>Junior Software Engineer</StepLabel>
            <StepContent>
              <Typography>Nitya Joyaas</Typography>
              <Typography>May 2017- June 2018</Typography>
            </StepContent>
         
          </Step>
         
        
      </Stepper>
    </div>
  );
}