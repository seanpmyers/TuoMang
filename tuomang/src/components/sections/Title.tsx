import * as React from 'react';
import "roboto-fontface"
import "./Title.css"

class Title extends React.Component {
  public render() {
    return (
      <div>
      <h1 className="title">
        脱盲
        <span className="titlePinyin">
          TuoMang
        </span>
      </h1>
    </div>
    );
  }
}

export default Title;