import * as React from 'react';
import "roboto-fontface"
import "./News.css"
import {
  Title,
  Topbar
} from '../../Components'

class News extends React.Component {
  public render() {
    return (
      <div className="newsWrapper">
        <div className="backgroundHeader">
          <Title />
          <div>
            <Topbar />
          </div>
        </div>
        News Page
      </div>
    );
  }
}

export default News;