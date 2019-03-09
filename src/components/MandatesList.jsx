import React, {Component} from 'react';


class MandatesList extends Component {

    render() {
        const {mandates} = this.props;
        const myMandates = mandates.map( item => {
            return(
                <div>
                    <div className="list-group-item d-flex" key={item}>
                        <section className="btn-group align-self-center"
                                 role="group" aria-label="Mandate Options">
                        </section>
                        <section className="pl-3 text-left align-self-center">
                            {item.mandateFileName}
                        </section>
                    </div>
                </div>)
        });
        return (
            <div>
                {myMandates}
            </div>
        )

    }
}

export default MandatesList;