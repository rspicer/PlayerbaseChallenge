import React, { Component } from 'react';

const queryString = require('query-string');
const axios = require('axios');

class UserMatches extends Component {
    constructor(props) {
        super(props);
        const parsed = queryString.parse(props.location.search);
        const accountId = parsed.accountId;
        axios.get('https://api.opendota.com/api/players/' + accountId + '/recentMatches?api_key=' + '4337bc61-22c1-44f3-b301-342a47714ddb').then((results) => {
            console.log(results);
            this.state = {
                accountId: parsed.accountId,
                results
            }
        }).catch((err) => {
            this.state = {
                error: true
            }
        })
    }
    render() {
        return (  );
    }
}

export default UserMatches;