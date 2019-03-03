import React, {Component} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import Mandates from "./components/mandates";
import Accounts from "./components/accounts";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar";
import './App.css';

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavBar/>
                <main className="container">
                    <div className="content">
                        <Switch>
                            <Route path="/mandates" component={Mandates}/>
                            <Route path="/accounts" component={Accounts}/>
                            <Route path="/not-found" component={NotFound}/>
                            <Redirect from="/" exact to="/mandates"/>
                            <Redirect to="/not-found"/>
                        </Switch>
                    </div>
                </main>
            </React.Fragment>
        );
    }
}

export default App;
