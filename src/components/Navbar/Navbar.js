import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Navbar.css';

const Navbar = () => {
    const { user } = useAuth();
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top py-0">
            <div className="container d-flex justify-content-between">
                <div className="py-4">
                    <NavLink className="navbar-brand py-0" to="/"><span className="nav-title fw-bold">Course Lance</span></NavLink>
                </div>
                <div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav text-end">
                            <NavLink className="nav-link py-4 active" to="/"><span className="nav-title fw-bold mx-2">Home</span></NavLink>
                            <NavLink className="nav-link py-4 active" to="/courses"><span className="nav-title fw-bold mx-2">Courses</span></NavLink>
                            <NavLink className="nav-link py-4 active" to="/blogs"><span className="nav-title fw-bold mx-2">Blogs</span></NavLink>
                            <NavLink className="nav-link py-4 active" to="/contact"><span className="nav-title fw-bold mx-2">Contact</span></NavLink>
                            <NavLink className="nav-link py-4 active" to="/about"><span className="nav-title fw-bold mx-2">About</span></NavLink>
                            {
                                user.email && <NavLink className="nav-link py-4 active" to="/dashboard"><span className="nav-title fw-bold mx-2">Dashboard</span></NavLink>
                            }
                            <NavLink className="nav-link py-4 active" to="/authentication"><span className="nav-title fw-bold mx-2">{user.email ? 'Profile' : 'Login/Register'}</span></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;