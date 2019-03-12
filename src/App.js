import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MandateForm from "./components/MandateForm";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import auth from "./services/AuthService";
import NotFound from "./components/NotFound";
import Logout from "./components/Logout";
import Mandates from "./components/Mandates";
import ProtectedRoute from "./components/ProtectedRouter";
import MandateDetail from "./components/MandateDetail";

class App extends Component {

    state = {
        mandates: []
    };


    async componentDidMount() {
        try{
            const user = auth.getCurrentUser();
            this.setState({ user });
        }catch (ex) {
            //TODO Set to generic URL
            // const profileLogoutUrl = `${process.env.REACT_APP_PROFILE_URL}/logout`;
            const profileLogoutUrl = "http://localhost:8080/logout";
            window.location.replace(profileLogoutUrl);
        }
    }

    render() {
        return (
            <div>
                <Navigation user={this.state.user}/>

                <Switch>
                    <ProtectedRoute path="/dashboard"
                           render={ (props) => <Dashboard user={ this.state.user} {...props} />}
                    />
                    <Route path='/logout' component={Logout}/>
                    <ProtectedRoute path='/mandates/:id' component={MandateDetail}/>
                    <ProtectedRoute path='/mandates' component={Mandates}/>
                    <ProtectedRoute path="/apply" exact component={MandateForm}/>
                    <Route path='/not-found' component={NotFound}/>
                    <Redirect from="/" exact to='/dashboard'/>
                    <Redirect to='/not-found'/>
                </Switch>
            </div>
        );
    }
}

export default App;
