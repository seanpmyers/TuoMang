import * as React from 'react';
import "roboto-fontface"
import {
  Title,
  Sidebar
} from '../Components'

class Translate extends React.Component {
  public render() {
    return (
      <div className="">
        <Title />
        <Sidebar />
        Translate Page
      </div>
    );
  }
}

export default Translate;