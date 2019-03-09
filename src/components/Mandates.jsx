import React, {Component} from 'react';
import {getAllMandates} from "../services/AccountService"

class Mandates extends Component {

    state = {
        mandates: []
    };


    async componentDidMount() {
        const {data: mandates} = await getAllMandates();
        this.setState({mandates: mandates.data});
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h1 className="card font-weight-light bg-light">All Mandates</h1>
                        <div className="table-responsive">
                              <table className="table table-striped table-bordered table-hover">
                                <thead>
                                <tr>
                                    <th>S/N</th>
                                    <th>Aggregator</th>
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
                                        <td>Limtech Ventures</td>
                                        <td>{mandate.document.substring(16)}</td>
                                        <td>{new Date(mandate.created_on).toDateString()}</td>
                                        <td>Not Processed</td>
                                        <td></td>
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