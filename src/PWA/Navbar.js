import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link classNameName="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item active">
                            <Link classNameName="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item active">
                            <Link classNameName="nav-link" to="/users">Users</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar