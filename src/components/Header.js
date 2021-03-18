import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component{
    render(){
        return(
            <div>
                <div class="header">
                    <h1>Logo</h1>
                </div>
                <nav class="navbar">
                    <ul class="nav-list">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Issues">Issues</Link></li>
                        <li><Link to="/Users">Users</Link></li>
                        <li><Link to="/Project">Projects</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header