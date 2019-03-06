import React, {Component} from 'react';
import {Router} from "react-router-dom";
import MandateForm from "./components/MandateForm";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import auth from "./services/AuthService";

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

                <Router>
                    <Dashboard path="/" user={this.state.user}/>
                    <MandateForm path="/apply"/>
                </Router>
            </div>
        );
    }
}

export default App;
