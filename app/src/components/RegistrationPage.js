import React from 'react';
import '../styles/RegistrationPage.css';
import axios from 'axios';

class RegistrationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            email: "",
            pass: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        // are we need?
        this.sendDataToServer = this.sendDataToServer.bind(this);
        this.redirectToAuthorizationPage = this.redirectToAuthorizationPage.bind(this);
    }

    sendDataToServer(response) {
        console.log(response);
        return response;
    }

    redirectToAuthorizationPage(response) {
        console.log(window.location);
        // window.location = ''; how correctly get a new url to AuthorizationPage.js
        //window.assign("app/src/components/RegistrationPage.js");
        //console.log(window.location);
        // router!!!!!!!!! i know
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("email: " + this.state.email, "password: " + this.state.pass);
        axios.post('http://localhost:3001/signup', {
            login: this.state.login,
            email: this.state.email,
            pass: this.state.pass
        })
            .then(this.sendDataToServer)
            .then(this.redirectToAuthorizationPage)
            .catch(error => console.error(error))
    }

    handleLoginChange(event) {
        console.log("login was changed to " + this.state.login);
        this.setState({login: event.target.value});
    }

    handleEmailChange(event) {
        console.log("email was changed to " + this.state.email);
        this.setState({email: event.target.value});
    }

    handlePasswordChange(event) {
        console.log("password was changed to " + this.state.pass);
        this.setState({pass: event.target.value});
    }

    render() {
        return (
            <div className="registrationPageWrap">
                <form onSubmit={this.handleSubmit}>
                    <div className="formsWrap">
                        <input
                            type="text"
                            placeholder="login"
                            value={this.state.login}
                            onChange={this.handleLoginChange}/>
                        <input
                            type="text"
                            placeholder="e-mail"
                            value={this.state.email}
                            onChange={this.handleEmailChange}/>
                        <input
                            type="text"
                            placeholder="password"
                            value={this.state.pass}
                            onChange={this.handlePasswordChange}
                        />
                        <input type="submit"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegistrationPage;