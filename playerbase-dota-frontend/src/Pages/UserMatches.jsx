import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const queryString = require('query-string');
const axios = require('axios');

class UserMatches extends Component {
    constructor(props) {
        super(props);
        const parsed = queryString.parse(props.location.search);
        const accountId = parsed.accountId;
        this.state = {
            accountId: accountId,
            results: []
        };

    }

    componentDidMount() {
        axios.get('https://api.opendota.com/api/players/' + this.state.accountId + '/recentMatches?api_key=' + '4337bc61-22c1-44f3-b301-342a47714ddb').then((results) => {
            console.log(results);
            this.setState({
                results: results.data
            })
        }).catch((err) => {
            this.setState({
                error: true
            })
        })
    }
    render() {
        const { classes } = this.props;
        return (
            <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Match ID</TableCell>
                            <TableCell>Winner</TableCell>
                            <TableCell>Player's GPM</TableCell>
                            <TableCell>Player's Damage</TableCell>
                            <TableCell>Player's KDA</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.results.map(row => (
                            <TableRow key={row.match_id}>
                                <TableCell component="th" scope="row">
                                    {row.match_id}
                                </TableCell>
                                <TableCell>{row.radiant_win ? 'Radiant' : 'Dire'}</TableCell>
                                <TableCell>{row.gold_per_min}</TableCell>
                                <TableCell>{row.hero_damage}</TableCell>
                                <TableCell>{Math.round(row.kills + row.assists / row.deaths)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

const styles = theme => ({
    root: {
        width: '80%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    table: {
        minWidth: 700,
    },
});

UserMatches.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserMatches);