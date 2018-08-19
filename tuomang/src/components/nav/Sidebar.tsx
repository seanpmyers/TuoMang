import * as React from 'react';
import "roboto-fontface"
import "./Sidebar.css"
import {
  createLink
} from './Routes'
import {
  Title
} from '../Components'


class Sidebar extends React.Component {
  public render() {
    return (
      <div className="sidebar">
        <Title />
        <ul className="menuLinks">
          {createLink('Home', '/')}
          {createLink('Translate', '/Translate')}
          {createLink('About', '/About')}
        </ul>
      </div>
    );
  }
}

export default Sidebar;