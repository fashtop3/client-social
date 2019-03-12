import React, {Component} from 'react';
import {getAllMandates} from "../services/AccountService"
import Search from "./Search";
import MandatesTable from "./MandatesTable";


class Mandates extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mandates: [],
            searchTerm: ''
        };

        this.searchValue = this.searchValue.bind(this);
        this.processItem = this.processItem.bind(this);
    }


    async componentDidMount() {
        const {data: mandates} = await getAllMandates();
        this.setState({mandates: mandates.data});
    }

    searchValue(event) {
        this.setState({searchTerm: event.target.value});
    }

    deleteItem(id) {

        // Filter out the clicked item and register
        const isNotId = item => item.id !== id;

        // Create an updated application list
        const updatedList = this.state.mandates.filter(isNotId);

        // Assign the new updated list to the list using setState Method
        this.setState({mandate: updatedList});
    }

    processItem(mandate) {
        console.log(mandate);
    }

    render() {

        const {mandates, searchTerm} = this.state;

        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h1 className="card font-weight-light bg-light">All Applications</h1>

                        <div className="row">
                            <div className="col-md-9"/>
                            <div className="col-md-3">
                                <Search
                                    onChange={this.searchValue}
                                    value={searchTerm}
                                />
                            </div>
                        </div>

                        <MandatesTable
                            mandates={mandates}
                            searchTerm={searchTerm}
                            processItem={this.processItem}
                        />

                    </div>
                </div>
            </div>
        );
    }
}

export default Mandates;