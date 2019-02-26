import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () =>  { 
    return(
     <div>
       <div>
         <Link to="/">Reddit Clone</Link>
         <Link to="/front">Front Page</Link>
         <Link to="/create_post">Create Post</Link>
         <Link to="/comments">Comments</Link>
       </div>
     </div>
    );   
 }
 
export default Navbar;