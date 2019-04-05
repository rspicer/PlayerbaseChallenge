import React, { Component } from 'react';
import { Router, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
import CreateUser from './Pages/CreateUser';
import Favorites from './Pages/Favorites';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import UserMatches from './Pages/UserMatches';
import history from './history.js';

class PagesContainer extends Component {
    state = {
        email: null,
        password: null,
        accountId: null
    }

    handleLogin = (email, password, accountId) => {
        this.setState({
            email,
            password,
            accountId
        }, () => {
            history.push('/matches?accountId=' + accountId);
        })
    }

    render() {
        return (
            <Router history={history}>
                <NavBar accountId={this.state.accountId} />
                <Route path="/" exact component={Landing} />
                <Route path="/create" render={(props) => <CreateUser {...props} onLogin={this.handleLogin} />} />
                <Route path="/favorites" render={(props) => <Favorites {...props} accountId={this.state.accountId} />} />
                <Route path="/login" render={(props) => <Login {...props} onLogin={this.handleLogin} />} />
                <Route path="/matches" render={(props) => <UserMatches {...props} accountId={this.state.accountId} />} />
            </Router>

        );
    }
}

export default PagesContainer;