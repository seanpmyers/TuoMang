import * as React from 'react';
import "roboto-fontface"
import "./Sidebar.css"
import {
  createLink
} from './Routes'

const closeMenu = () => {
  //use the ! for null uncertainty
  document.getElementById('sidebar')!.style.display = "none";
  return;
}

const openMenu = () => {
  document.getElementById('sidebar')!.style.display = "block";
  return;
}

const menuLink = () => {
  return (
    <a id="openMenu" onClick={openMenu}>
      ☰ Menu
    </a>
  )
}

class Sidebar extends React.Component {
  public render() {
    return (
      <div className="sidebar" id="sidebar">
        <p id="closeButton" onClick={closeMenu}>
          X
        </p>
        <h1 id="sidebarTitle">
          脱盲 TuoMang
        </h1>
        <ul className="menuLinks">
          {createLink('Home', '/', 'link', 'linkStyle')}
          {createLink('Translate', '/Translate', 'link', 'linkStyle')}
          {createLink('News', '/News', 'link', 'linkStyle')}
          {createLink('About', '/About', 'link', 'linkStyle')}
          {createLink('Login', '/Login', 'link', 'linkStyle')}
        </ul>
      </div>
    );
  }
}

export {
  Sidebar,
  openMenu,
  closeMenu,
  menuLink
};