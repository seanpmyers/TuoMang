import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom'
import {
  Home,
  Translate,
  Error,
  About
} from '../Components'

function createLink(text: string, route: string) {
  const link =
    <NavLink to={route} style={{ textDecoration: 'none' }}>
      <li className="link">
        {text}
      </li>
    </NavLink>
  return link;
}

class Routes extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" component={Home} exact strict />
            <Route path="/Translate" component={Translate} exact strict />
            <Route path="/About" component={About} exact strict />
            <Route component={Error} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export {
  Routes,
  createLink
};