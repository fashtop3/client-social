import React, {Component} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MandateForm from "./components/MandateForm";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import auth from "./services/AuthService";
import NotFound from "./components/NotFound";
import Logout from "./components/Logout";

class App extends Component {

    state = {};


    componentDidMount() {
        const user = auth.getCurrentUser();
        this.setState({ user })
    }

    render() {
        return (
            <div>
                <Navigation user={this.state.user}/>

                <Switch>
                    <Route path="/dashboard"
                           render={ props => <Dashboard {...props} user={ this.state.user} />}
                    />
                    <Route path='/logout' component={Logout}/>
                    <Route path="/apply" exact component={MandateForm}/>
                    <Route path='/not-found' component={NotFound}/>
                    <Redirect from="/" exact to='/dashboard'/>
                    <Redirect to='/not-found'/>
                </Switch>
            </div>
        );
    }
}

export default App;
