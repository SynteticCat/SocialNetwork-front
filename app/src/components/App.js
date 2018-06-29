import React, { Component } from 'react';
import RegistrationPage from './RegistrationPage';
import AuthorizationPage from './AuthorizationPage';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <AuthorizationPage/>
            </div>
        );
    }
}

export default App;