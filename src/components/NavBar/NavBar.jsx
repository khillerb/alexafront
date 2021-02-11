import React, { Component } from 'react';
import { Route, Switch,Link } from 'react-router-dom';
import bootstrap from 'bootstrap';
import popper from 'popper.js';
import '../../bootstrap.min.css';

class NavBar extends Component {
    constructor(){
        super();
    }
    render(){
        return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <Link to="/" className='nav-link'>Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Users
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownUser">
                                <li><Link className="dropdown-item" to="/users">All Users</Link></li>
                                <li><Link className="dropdown-item" to="/users/search">Search Users</Link></li>
                                <li><Link className="dropdown-item" to="/users/create">Create User</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Responses
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/responses">All Responses</Link></li>
                                <li><Link className="dropdown-item" to="/responses/search">Search Responses</Link></li>
                                <li><Link className="dropdown-item" to="/responses/create">Create Response</Link></li>
                            </ul>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </div>
        )
    }
}
export default NavBar;