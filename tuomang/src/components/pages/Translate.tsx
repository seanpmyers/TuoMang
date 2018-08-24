import * as React from 'react';
import "roboto-fontface"
import "./Translate.css"
import {
  Title,
  Topbar
} from '../Components'

class Translate extends React.Component {
  public render() {
    return (
      <div className="translateWrapper">
        <div className="translateHeader">
          <Title />
          <div>
            <Topbar />
          </div>
        </div>
        Translate Page
      </div>
    );
  }
}

export default Translate;