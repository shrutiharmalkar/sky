import React from 'react';

import './Header.css'
const Header = ()=> {
    return(
        
        <section className="Header">
            <form id="div">
            <section className="Header-top">
                <section className="Header-top-logo" id="logo">
                    The Blue Sky 
                    <p>It's a blue sky ,full with sunshine</p>
                </section>
                <span id="nav">
                <span id="home">Home</span><span id="st">Startup</span><span id="in">Help</span><span id="prof">Profile</span>
                
                </span>
                
            </section>
            </form>
            
        </section>
    );
}

export default Header;