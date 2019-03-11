import React from 'react';
import {FaUsers} from 'react-icons/fa';
import {Link, NavLink} from "react-router-dom";

const Navigation = ({user}) => {

    return (
      <div>
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

                       {user && user.is_staff && (
                          <NavLink className="nav-item nav-link" to="/mandates">
                              Mandates
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
                          <NavLink className="nav-item nav-link" to="/logout">
                              Sign Out
                          </NavLink>
                      )}
                  </div>
              </div>
          </nav>
      </div>
    );

};


export default Navigation;
