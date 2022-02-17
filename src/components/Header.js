import React from 'react';
import {NavLink} from 'react-router-dom'

const Header = () => (
  <header>

  <div className = "header">
  <h1 className = "header_h1"> lottery </h1>
     <ul className = "header_list">
        <li className = "header_listitem">
          <NavLink to="/" activeClassName="is-active" exact={true} className = "header_listitem">home page</NavLink>
        </li>
        <li className = "header_listitem">
          <NavLink to="/create" activeClassName="is-active"className = "header_listitem">  create account</NavLink>
        </li>
        <li className = "header_listitem">
          <NavLink to="/terms" activeClassName="is-active" className = "header_listitem">terms and conditions</NavLink>
        </li>
     </ul>
  </div>
  </header>
);

export default Header;
