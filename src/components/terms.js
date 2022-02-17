import React from 'react';
import {NavLink} from 'react-router-dom'

const Terms = () => (
  <body>
  <div className = "navbar2">
    <h3 className = "header_h1"> lottery </h3>
       <ul className = "header_list">
          <li className = "header_listitem2">
            <NavLink to="/" activeClassName="is-active" exact={true} className = "header_listitem2">home page</NavLink>
          </li>
          <li className = "header_listitem2">
            <NavLink to="/create" activeClassName="is-active"className = "header_listitem2">  create account</NavLink>
          </li>
          <li className = "header_listitem2">
            <NavLink to="/terms" activeClassName="is-active" className = "header_listitem2">terms</NavLink>
          </li>
       </ul>
  </div>
  <div>
     its a scam

     This paragraph
  contains a lot of lines
  in the source code,
  but the browser
  ignores it.
  </div>
  </body>
);

export default Terms;
