import  {Component} from 'react';
import auth from '../services/AuthService';

class Logout extends Component {

    componentDidMount() {
        auth.logout();
        //window.location.replace("http://13.82.102.20:8081/logout");
    }

    render() {
        return null;
    }
}

export default Logout;