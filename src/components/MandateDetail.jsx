import React, {Component} from 'react';
import {getAggregatorProfile, getMandateDetails} from "../services/AccountService";


class MandateDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mandate: {},
            profile: {},
            account: {},
            business: {}
        }
    }

    async getProfileInfo(mandate) {
        try {
            const {data: profile} = await getAggregatorProfile(mandate.account.aggregator_id);
            return profile
        } catch (ex) {
            console.log(ex.response);
        }
    }

    async fetchMandateDetail() {

        const mandateId = this.props.match.params.id;
        try {
            const {data: mandate} = await getMandateDetails(mandateId);
            return mandate
        }
        catch (ex) {
            if (ex.response && ex.response.status === 404)
                this.props.history.replace("/not-found");
        }
    }

    async componentDidMount() {

        const {data: theMandate} = await this.fetchMandateDetail();
        this.setState({mandate: theMandate.mandate});
        console.log(this.state.mandate);
        this.setState({account: theMandate.mandate.account});
        const {data: profile} = await this.getProfileInfo(theMandate.mandate);
        this.setState({profile: profile});
        this.setState({business: profile.business});
    }

    render() {

        let mandateDoc = `https://s3.amazonaws.com/lever-static/${this.state.mandate.document}`;
        let fileLink = <a href={mandateDoc} target="_blank" rel="noopener noreferrer">View Mandate</a>

        const {mandate, profile, account, business} = this.state;

        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h2>Application Detail</h2>
                                <hr/>
                                <p><strong>Aggregator ID:</strong> {account.aggregator_id}</p>

                                {business && (
                                    <p><strong>Business:</strong> {business.bus_name}</p>
                                )}

                                {business && (
                                    <p><strong>Address:</strong> {business.bus_address}</p>
                                )}

                                <p><strong>Contact Person:</strong> {profile.last_name} {profile.first_name}</p>
                                <p><strong>Phone:</strong> {profile.phone}</p>
                                <p><strong>Date:</strong> {new Date(mandate.created_on).toDateString()}</p>

                                <p>Document: {fileLink}</p>


                                <p>
                                    <button className="btn btn-primary">Process Application</button>
                                    {' '}
                                    <button className="btn btn-primary">Approve Application</button>
                                    {' '}
                                    <button className="btn btn-primary">Decline Application</button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MandateDetail;