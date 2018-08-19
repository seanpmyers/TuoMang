import * as React from 'react';
import "roboto-fontface"
import {
  Sidebar
} from '../Components'


class Home extends React.Component {
  public render() {
    return (
      <div className="Home">
        <Sidebar />
      </div>
    );
  }
}

export default Home;