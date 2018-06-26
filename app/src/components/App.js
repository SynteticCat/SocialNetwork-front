import React, { Component } from 'react';
import RegistrationForm from './RegistrationForm';
import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <RegistrationForm/>
            </div>
        );
    }
}

export default App;