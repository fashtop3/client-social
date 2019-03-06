import React, {Component} from 'react';
import { Router} from '@reach/router';
import MandateForm from "./components/MandateForm";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";

class App extends Component {

    constructor() {
        super();
        this.state = {
            user: null,
            displayName: null,
            userID: null
        };
    }

    render() {
        return (
            <div>
                <Navigation user={this.state.user}/>

                <Router>
                    <Dashboard path="/"/>
                    <MandateForm path="/apply"/>
                </Router>
            </div>
        );
    }
}

export default App;
