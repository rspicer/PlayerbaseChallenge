import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './NavBar/NavBar';
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
                <NavBar />
                <Route path="/" exact component={Landing} />
                <Route path="/create" component={CreateUser} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/login" component={Login} />
                <Route path="/matches" component={UserMatches} />
            </Router>

        );
    }
}

export default PagesContainer;