import * as React from 'react';
import "roboto-fontface"
import './About.css'
import {
  Title,
  Topbar
} from '../Components'


class About extends React.Component {
  public render() {
    return (
      <div className="aboutWrapper">
        <div className="aboutHeader">
          <Title />
          <Topbar/>
        </div>
        About page
      </div>
    );
  }
}

export default About;