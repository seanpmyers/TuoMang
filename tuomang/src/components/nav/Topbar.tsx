import * as React from 'react';
import "roboto-fontface"
import "./Topbar.css"
import {
  createLink
} from './Routes'

class Topbar extends React.Component {
  public render() {
    return (
      <div className="topbarWrapper" id="">
        <ul className="topbarList">
          {createLink('Home', '/', 'topbarLink', 'linkStyle')}
          {createLink('Translate', '/Translate', 'topbarLink', 'linkStyle')}
          {createLink('News', '/News', 'topbarLink', 'linkStyle')}
          {createLink('About', '/About', 'topbarLink', 'linkStyle')}
          {createLink('Login', '/Login', 'topbarLink', 'linkStyle')}
        </ul>
      </div>
    );
  }
}

export {
  Topbar
};