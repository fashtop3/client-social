import React, {Component} from 'react';
import {getAccountMandates, getSocialAccount, saveMandate} from "../services/AccountService";
import auth from "../services/AuthService";
import MandatesList from "./MandatesList";

class MandateForm extends Component {

    state = {
        selectedFile: null,
        account: {},
        mandates: []
    };


    async componentDidMount() {
        try {
            const user = auth.getCurrentUser();
            const {data: existingAccount} = await getSocialAccount(user.sub.id);
            this.setState({account: existingAccount.data});
            const {data: mandates} = await getAccountMandates(user.sub.id);
            this.setState({mandates: mandates.data.mandates});
        }
        catch (ex) {
            console.log(ex.response.data);
        }
    }

    handleChange = event => {

        this.setState({
            selectedFile: event.target.files[0]
        })
    };

    handleSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        let file = this.state.selectedFile;
        let account_id = this.state.account.id;
        formData.append("document", file);
        formData.append("account_id", account_id);
        try {
            await saveMandate(formData);
            const user = auth.getCurrentUser();
            const {data: mandates} = await getAccountMandates(user.sub.id);
            this.setState({mandates: mandates.data.mandates});
            this.setState({selectedFile: null});
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                console.log(ex.response.data);
            }
        }
    };


    render() {

        const { mandates } = this.state;

        return (
            <div className="container mt-4">
                <div className="row justify-content-center">
                    <div className="col-md-8 text-center">
                        <h1 className="font-weight-light">Upload Payment Mandate</h1>
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <form
                                    className="formgroup" onSubmit={this.handleSubmit}>
                                    <div className="input-group input-group-lg">
                                        <input
                                            type="file"
                                            className="form-control"
                                            name="file"
                                            placeholder="Mandate File"
                                            aria-describedby="buttonAdd"
                                            onChange={this.handleChange}
                                        />
                                        <div className="input-group-append">


                                            <button
                                                type="submit"
                                                className="btn btn-sm btn-info"
                                                id="buttonAdd">
                                                +
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <MandatesList mandates={mandates}/>

                </div>
            </div>
        );
    }

}

export default MandateForm;