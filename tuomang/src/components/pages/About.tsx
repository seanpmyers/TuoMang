import * as React from 'react';
import "roboto-fontface"
import {
  Title,
  Sidebar
} from '../Components'


class About extends React.Component {
  public render() {
    return (
      <div className="Home">
        <Title />
        <Sidebar />
      </div>
    );
  }
}

export default About;