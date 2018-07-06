import React from 'react';
import {Route, Switch} from 'react-router-dom';
import RegistrationPage from "./RegistrationPage";
import AuthorizationPage from "./AuthorizationPage";
import MainPage from "./MainPage";
import '../styles/Main.css'

class Main extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={RegistrationPage}/>
                    <Route path="/signup" component={RegistrationPage}/>
                    <Route path="/signin" component={AuthorizationPage}/>
                    <Route path="/main" component={MainPage}/>
                </Switch>
            </div>
        );
    }
}

export default Main;