import React, {Component} from 'react';

class Mandates extends Component {

    state = {
      data: {

      }
    };

    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h1 className="font-weight-light">Add Payment Mandate</h1>
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <form
                                    className="formgroup">
                                    <div className="input-group input-group-lg">
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="meetingName"
                                            placeholder="Mandate File"
                                            aria-describedby="buttonAdd"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                type="submit"
                                                className="btn btn-sm btn-info"
                                                id="buttonAdd"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-11 col-md-6 text-center">
                        <div className="card border-top-0 rounded-0">

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Mandates;