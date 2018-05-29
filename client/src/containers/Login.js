import React, {Component} from "react";
import LoginForm from "../components/LoginForm";
import Auth from "../auth/auth";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false
        };
        this.submitLogin = this.submitLogin.bind(this);
    }

    submitLogin(loginData) {
        axios.post("user/sign_in", loginData)
            .then(res => {
                const token = res.data.token;
                Auth.logIn(token);
                this.setState({ redirectToReferrer: true });
            })
    }

    render() {
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return <LoginForm onSubmit={this.submitLogin} />;
    }
}

export default Login;
