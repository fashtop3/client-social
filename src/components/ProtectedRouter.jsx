import React from 'react';
import {Redirect, Route} from "react-router-dom";
import auth from "../services/AuthService";

const ProtectedRoute = ({path, component: Component, render, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                if (!auth.getCurrentUser()) return <Redirect to={{
                    pathname: '/logout',
                    state: {from: props.location}
                }}/>;
                return Component ? <Component {...props}/> : render(props);
            }}
        />
    );
};

export default ProtectedRoute;