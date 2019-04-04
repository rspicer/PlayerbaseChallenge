import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateUser from './Pages/CreateUser';
import Favorites from './Pages/Favorites';
import Landing from './Pages/Landing';
import Login from './Pages/Login';
import UserMatches from './Pages/UserMatches';

class PagesContainer extends Component {
    state = {}
    render() {
        return (
            <Router>
                <Route path="/" exact component={Landing} />
                <Route path="/create" component={CreateUser} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/login" component={Login} />
                <Route path="/matches" component={Login} />
            </Router>

        );
    }
}

export default PagesContainer;