import * as React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import './App.css';
import "roboto-fontface"
//import Sidebar from './nav/Sidebar';
import Translate from './pages/Translate'
import Title from './sections/Title'
import Sidebar from './nav/Sidebar';

const home = () => {
  return (
    <div>
      <Title/>
      <Sidebar/>
    </div>
  );
}

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return (
      <Router>
        <div>
          <Route path="/" component={home} />
          <Route path="/translate" component={Translate} />
        </div>
      </Router>
    );
  }
}

export default App;