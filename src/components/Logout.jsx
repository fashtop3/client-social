import  {Component} from 'react';
import auth from '../services/AuthService';

class Logout extends Component {
    componentDidMount() {
        auth.logout();
        window.location.replace("http://localhost/logout");
    }

    render() {
        return null;
    }
}

export default Logout;