import React, {Component} from 'react';
import {Link} from "react-router-dom";
import auth from "../services/AuthService";
import {activateSocialAccount, getSocialAccount} from "../services/AccountService";

class Dashboard extends Component {

    state = {
        user: {},
        account: {}
    };

    async componentDidMount() {
        try {
            const user = auth.getCurrentUser();
            this.setState({user});
            let info = {
                aggregator_id: user.sub.id
            };

            if (this.account == null) {
                try {
                    // Activate new social account
                    const {data: newAccount} = await activateSocialAccount(info);
                    this.setState({account: newAccount});
                } catch (ex) {
                    if (ex.response && ex.response.status === 422) {
                        console.log(ex.response.data);
                        // if social account exists get it
                        const {data: existingAccount} = await getSocialAccount(user.sub.id);
                        this.setState({account: existingAccount});
                    }
                }
            } else {
                console.log("ACCOUNT EXISTS");
            }
        } catch (ex) {
            if (ex.response && ex.response.status === 401) {
                const errors = {...this.state.errors};
                console.log(ex.response.data);
                errors.aggregator = ex.response.data;
                this.setState({errors});
            }
        }

    }

    render() {
        const biggerLead = {
            fontSize: 1.4 + 'em',
            fontWeight: 200
        };


        return (

            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-10 col-md-10 col-lg-8 col-xl-7">
                        <div
                            className="display-4 text-primary mt-3 mb-2"
                            style={{
                                fontSize: 2.8 + 'em'
                            }}
                        >
                            Dynamo Social by Lever
                        </div>
                        <p className="lead" style={biggerLead}>
                            Dynamo Social is your convenient and reliable source to
                            payment liquidity that helps take your business to the next
                            Level.
                            <br/>
                            <br/>


                            {this.state.user && this.state.account && (
                                <Link to="/apply">
                                    View Existing Applications
                                </Link>
                            )}

                            {!this.state.account && (
                                <Link to="/logout">Activate Social Account</Link>
                            )}

                        </p>

                        {this.state.user && this.state.account && (
                            <Link to="/apply" className="btn btn-primary">Apply Here</Link>
                        )}
                    </div>
                    {' '}
                    {/* columns */}
                </div>
            </div>
        );
    }
}

export default Dashboard;
