import React from 'react';
import './about.css';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ProgrammingComponent from '../programming/programming';
import ExperienceComponent from '../experience/experience';
import Button from '@material-ui/core/Button';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Certifications from '../certifications/certifications';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import ProjectsComponent from '../projects/projects';
import FooterComponent from '../footer/footer';

const useStyles = makeStyles((theme) => ({
  root: {
    padding:25,
  },
 
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  brand:{
    color:'#fd7070',
    fontWeight:500,
  },
  pos: {
    marginBottom: 12,
  },
  padding:{
    padding:27,
  },
  
  
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
} 


export default function AboutComponent () {
   
        const classes = useStyles();
   return (
    <div>

            <div className={classes.root}>
              <Card>
                <CardContent>
                    <h2>Hello, I'm <span className={classes.brand}>Suresh Prajapati</span></h2>
                  
                  <Typography className={classes.pos} >
                    I am Software Developer from Montreal. I have graduated with a web design, from CDI college of Montreal. I have 1+ years of experience of building and maintaining Websites, Mobile Applications. I love Javascript, React, Redux, Html, CSS, Bootstrap,Nodejs,Mondodb,Angular,PHP.
                  </Typography>
                  
                  
                </CardContent>
                <CardActions>
               <a className="link" target="_blank" href=""> <Button variant="outlined">View CV</Button></a>

                </CardActions>
              </Card>              
            </div>
            <div className={classes.padding}>
               
                  <ProgrammingComponent></ProgrammingComponent>
                  <ExperienceComponent></ExperienceComponent>
                  <ProjectsComponent></ProjectsComponent>
                  <Certifications></Certifications>
                   <FooterComponent></FooterComponent>
            </div>
    
        </div>
              
            
        );
   }