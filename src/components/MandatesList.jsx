import React from 'react';

const MandatesList =({mandates}) => {
    return (

        <div className="col-11 col-md-6 text-center">
            <div className="card border-top-0 rounded-0">
                {mandates && mandates.length ? (
                    <div className="card-body py-2">
                        <h4 className="card-title font-weight-light m-0">
                            Submitted Mandates
                        </h4>
                    </div>
                ) : null}

                {mandates.map((mandate, index) =>

                    <div className="list-group list-group-flush" key={mandate.id}>
                        <div>
                            <div className="list-group-item d-flex">
                                <section className="btn-group align-self-center"
                                         role="group" aria-label="Mandate Options">
                                </section>
                                <section className="pl-3 text-left align-self-center">
                                    {index + 1}. {'  '}
                                    Uploaded on {new Date(mandate.created_on).toDateString()} :
                                    ({mandate.document.substring(16)})
                                </section>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>

    )
}

export default MandatesList;