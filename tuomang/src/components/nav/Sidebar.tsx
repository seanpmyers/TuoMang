import * as React from 'react';
import "roboto-fontface"
import "./Sidebar.css"

function createLink(text: string) {
  const link =
    <li className="">
      <a href="#" className="link">
        {text}
      </a>
    </li>;
  return link;
}

class Sidebar extends React.Component {
  public render() {
    return (
      <div className="sidebar">
        <div className="menuTitle">
          Menu
        </div>
        <ul className="menuLinks">
          {createLink("Link 1")}
          {createLink("Link 2")}
        </ul>
      </div>
    );
  }
}

export default Sidebar;