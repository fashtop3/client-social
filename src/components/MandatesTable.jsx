import React from 'react';
import Link from "react-router-dom/es/Link";

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
                    <th>Submission Date</th>
                    <th>Application Status</th>
                    {/*<th>Actions</th>*/}
                </tr>
                </thead>

                <tbody>
                {mandates.filter(isSearched(searchTerm)).map(mandate => (

                    <tr key={mandate.id}>
                        <td><Link to={`/mandates/${mandate.id}/`}>{mandate.account.aggregator_id} </Link></td>
                        {/*<td>{mandate.document.substring(16)}</td>*/}
                        <td>{new Date(mandate.created_on).toDateString()}</td>
                        <td>{mandate.processed ? 'Processed' : 'Not Processed'}</td>
                        {/*<td>*/}
                            {/*<button className="btn btn-primary"*/}
                                    {/*onClick={() => processItem(mandate)}>Manage*/}
                            {/*</button>*/}

                            {/*{'-'}*/}

                             {/*<button className="btn btn-primary"*/}
                                    {/*onClick={() => processItem(mandate)}>Approve*/}
                            {/*</button>*/}

                           {/*{'-'}*/}

                            {/*<button className="btn btn-primary"*/}
                                    {/*onClick={() => processItem(mandate)}>Decline*/}
                            {/*</button>*/}
                        {/*</td>*/}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}


export default MandatesTable;