import * as React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
   
   return (
      <div className="nav">
         <h1>Nav Component</h1>
         <Link to="/">User</Link>
         <Link to="/privacy">Privacy</Link>
         <Link to="/done">Done</Link>
      </div>
   )
}

export default Nav;