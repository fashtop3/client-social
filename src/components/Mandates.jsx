import React, {Component} from 'react';
import {getAggregatorProfile, getAllMandates} from "../services/AccountService"

class Mandates extends Component {

    state = {
        mandates: []
    };


    async componentDidMount() {
        const {data: mandates} = await getAllMandates();
        this.setState({mandates: mandates.data});
    }

    deleteItem(id) {

        // Filter out the clicked item and register
       const isNotId = item =>  item.id !== id;

        // Create an updated application list
        const updatedList = this.state.mandates.filter(isNotId);

        // Assign the new updated list to the list using setState Method
        this.setState({mandate: updatedList});
    }

    async processItem(mandate) {
        try{
            const {data: profile} = await getAggregatorProfile(mandate.account.aggregator_id)
            console.log(profile);
        } catch(ex){
            console.log(ex.response.data);
        }

    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h1 className="card font-weight-light bg-light">All Applications</h1>
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Aggregator ID</th>
                                    <th>Document Name</th>
                                    <th>Submission Date</th>
                                    <th>Application Status</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.mandates.map((mandate, index) => (
                                    <tr key={mandate.id}>
                                        <td>{index + 1}</td>
                                        <td>{mandate.account.aggregator_id}</td>
                                        <td>{mandate.document.substring(16)}</td>
                                        <td>{new Date(mandate.created_on).toDateString()}</td>
                                        <td>Not Processed</td>
                                        <td>
                                            <button className="btn btn-primary"
                                                    onClick={() => this.processItem(mandate)}>Process
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    {/*<div className="col-11 col-md-6 text-center">*/}
                    {/*<div className="card border-top-0 rounded-0">*/}
                    {/**/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}

export default Mandates;