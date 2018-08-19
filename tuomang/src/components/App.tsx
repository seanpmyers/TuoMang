import * as React from 'react';
import './App.css';
import {Routes} from './nav/Routes'

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <Routes/>
    );
  }
}

export default App;