import React, {Component} from 'react';

class NotFound extends Component {

    render() {
        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        {/*<h1 className="font-weight-light">Page Not Found</h1>*/}
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <h2>Page Not Found</h2>
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

export default NotFound;