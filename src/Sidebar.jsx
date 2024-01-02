import React from 'react';
import logo from './logo.svg';
import { social, links } from './data';
import { useglobalContextProvider } from './context'

const Sidebar = () => {
  const {isSideBar,setSideBar}=useglobalContextProvider()

  return (
    <aside className=' sidebar show-sidebar'>
      <div className="sidebar-header">
        <img src={logo} alt="logo" className="logo" />
        <h4>nithin joji</h4>
      </div>
      <div className="close-btn">x</div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text } = link;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          );
        })}
      </ul>
 
    </aside>
  );
};

export default Sidebar;
