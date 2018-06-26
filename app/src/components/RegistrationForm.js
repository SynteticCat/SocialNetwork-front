import React from 'react';
import '../styles/RegistrationForm.css';
import axios from 'axios';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            email: "",
            password: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log("email: " + this.state.email, "password: " + this.state.password);
        axios.post('http://localhost:3001/signup', {
            login: this.state.login,
            email: this.state.email,
            pass: this.state.password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
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
        console.log("password was changed to " + this.state.password);
        this.setState({password: event.target.value});
    }

    render() {
        return (
            <div className="registrationFormWrap">
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
                    value={this.state.password}
                    onChange={this.handlePasswordChange}
                />
                <input type="submit"/>
            </div>
            </form>
            </div>
    );
    }
}

export default RegistrationForm;