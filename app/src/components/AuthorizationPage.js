import React from 'react';
import axios from 'axios';
import '../styles/AuthorizationPage.css';

class AuthorizationPage extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
           email: '',
           pass: ''
       };
       this.handleSubmit = this.handleSubmit.bind(this);
       this.handleEmailChange = this.handleEmailChange.bind(this);
       this.handlePasswordChange = this.handlePasswordChange.bind(this);
       // are we need?
       this.sendDataToServer = this.sendDataToServer.bind(this);
       this.tryRedirectToMainPage = this.tryRedirectToMainPage(this);
    }

    sendDataToServer(response) {
        console.log(response);
        return response;
    }

    tryRedirectToMainPage(response) {
        console.log(response);
        return response;
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("handleSubmit", this.state);
        axios.post("http://localhost:3001/signin", {
            email: this.state.email,
            pass: this.state.pass
        })
            .then(this.sendDataToServer)
            .then(this.tryRedirectToMainPage)
            .catch(error => console.error(error))
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value});
        console.log("email: " + this.state.email);
    }

    handlePasswordChange(event) {
        this.setState({pass: event.target.value});
        console.log("password: " + this.state.pass);
    }

    render() {
        return (
            <div className="authorizationPageWrap">
                <form onSubmit={this.handleSubmit}>
                    <div className="formsWrap">
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

export default AuthorizationPage;