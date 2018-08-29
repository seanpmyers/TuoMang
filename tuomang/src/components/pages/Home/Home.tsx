import * as React from 'react';
import './Home.css'
import "roboto-fontface"
import {
  Topbar
} from '../../Components';

class Home extends React.Component {
  public render() {
    return (
      <div className="homeBody">
        <div className="homeWrapper" id="c1">
          <div id="titleContainer">
            <h1 className="homeTitle">
              脱盲 TuoMang
            </h1>
          </div>
          <Topbar/>
        </div>
        <div className="afterTitle" id="homeInfo">
          <div className="sectionWrapper" id="colored">
            <p>
              Information about the app.
            </p>
          </div>
          <div className="sectionWrapper">
            <p>
              Another bit about the app.
            </p>
          </div>
          <div className="sectionWrapper" id="colored">
            <p>
              A third and final bit about the app.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;