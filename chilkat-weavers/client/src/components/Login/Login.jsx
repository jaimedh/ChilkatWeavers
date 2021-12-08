import { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    state = {
        loggedIn: false,
        profileData: null,
    };
    componentDidMount() {
        axios.get(``, { withCredentials: true})
        .then((response) => {
            this.setState({
                loggedIn: true,
                profileData: response.date,
            });
            return response.data.id;
        })
        .then((id) => {
            axios
            .get(``)
            .then((response) => {
                console.log(response);
            });
        })
        .catch((err) => console.log(err));
    }
    render() {
        const { profileData, loggedIn } = this.state;
        return (
            <section className="login">
                <h2 className="login__title">Login</h2>



            </section>
        )
    }

    }
    export default Login;
