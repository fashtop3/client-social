import React, {Component} from 'react';
import {Link} from "react-router-dom";
import auth from "../services/AuthService";
import {activateSocialAccount} from "../services/AccountService";

class Dashboard extends Component {

    state = {
        user: {},
        account: null
    };

    async componentDidMount() {
        try {
            const user = auth.getCurrentUser();
            this.setState({user});
            if(this.account == null){
                  const newAccount = await activateSocialAccount(user.sub.id);
                  console.log(newAccount);
            }else {
                console.log("NO");
            }
        } catch(ex){
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
                            { this.state.account && (
                                <Link to="/apply">Apply Here</Link>
                            ) }

                            <Link to="/logout">Activate Account</Link>
                        </p>

                        {this.state.aggregator && (
                            <Link to="/mandates" className="btn btn-primary">
                                View Existing Applications
                            </Link>
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
