import React from 'react';
import {FaUsers} from 'react-icons/fa';
import {Link, NavLink} from "react-router-dom";

const Navigation = ({user}) => {

    return (
        <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <FaUsers className="mr-1"/> Dynamo Social
                </Link>

                <div className="navbar-nav mr-auto">
                    {user && (
                        <NavLink className="nav-item nav-link" to="/apply">
                            Apply
                        </NavLink>
                    )}
                </div>

                <div className="navbar-nav ml-auto">

                    {user && (
                        <NavLink className="nav-item nav-link" to="/">
                            {user.sub.email}
                        </NavLink>
                    )}

                    {user && (
                        <NavLink
                            className="nav-item nav-link"
                            to="/login">
                            Sign Out
                        </NavLink>
                    )}
                </div>
            </div>
        </nav>
    );

};


export default Navigation;
