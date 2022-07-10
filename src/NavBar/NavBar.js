import React from 'react';



const NavBar = () => {
    
    return ( 
        <div>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/foundation/6.2.4/foundation.min.css"></link>
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li className="menu-text">Site Title</li>
                        <li><a href="#">One</a></li>
                        
                    </ul>
                </div>
                <div className="top-bar-right">
                    <ul className="menu">
                        <li><input type="search" placeholder="Search" /></li>
                        <li><button type="button" className="button">Search</button></li>
                        <li><a href="#">One</a></li>
                        <li><a href="#">One</a></li>
                    </ul>
                </div>
                
            </div>
        </div>
     );
}
 
export default NavBar;