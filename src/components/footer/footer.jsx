import React, {Component} from 'react';
import './footer.css';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FlatButton from 'material-ui/FlatButton';
const scrollTo = require('scroll-to');



class FooterComponent extends Component {

  onScrollToTop() {
    scrollTo(0, 0, {
      ease: 'out-bounce',
      duration: 2000
    });
  }

  render() {
    return (
      <div className="footer">
        <div className="link-list">

          <Card className="padding">
            <CardContent>
                
              
              
              </CardContent>
          </Card>
        <Card>
            <CardContent>
                <Typography >LOOK AT MY CODE, MY CODE IS AMAZING</Typography>
                <Typography className="footer-text">This Website is made with React and Material UI. Check out the code on Github.</Typography>
              
                <Typography className="footer-text"><a  target="_blank" href="https://github.com/sureshprajapati2024">
                VIEW ON GITHUB
              </a>
              </Typography>

              </CardContent>
          </Card>

           
          
        </div>
        <FlatButton label="Back to top" onClick={this.onScrollToTop}/>
      </div>
    );
  }
}

export default FooterComponent;