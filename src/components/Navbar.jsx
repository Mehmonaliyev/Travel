import React from 'react'
import { NavLink, Link } from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg">
                <div className="container">
                    <Link className="navbar-brand" to='/'> Travel</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to='/search' className="nav-link"  >
                                    Search
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/news' className="nav-link">
                                    News
                                </NavLink>
                            </li>
                        </ul>   
                        <div className="d-flex" >
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
