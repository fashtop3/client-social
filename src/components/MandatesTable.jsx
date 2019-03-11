import React from 'react';

// filter results by search
function isSearched(searchTerm) {
    return function (item) {
        return !searchTerm || item.document.toLowerCase().includes(searchTerm.toLowerCase());
    }
}

const MandatesTable = ({mandates, searchTerm, processItem}) => {
     return (

            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Aggregator ID</th>
                        <th>Document Name</th>
                        <th>Submission Date</th>
                        <th>Application Status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>

                    <tbody>
                    {mandates.filter(isSearched(searchTerm)).map(mandate => (
                        <tr key={mandate.id}>
                            <td>{mandate.account.aggregator_id}</td>
                            <td>{mandate.document.substring(16)}</td>
                            <td>{new Date(mandate.created_on).toDateString()}</td>
                            <td>Not Processed</td>
                            <td>
                                <button className="btn btn-primary"
                                        onClick={() => processItem(mandate)}>Process
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        )
}


export default MandatesTable;