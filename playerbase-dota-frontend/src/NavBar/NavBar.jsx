import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Search from './Search';

function NavBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Search />
                    {props.accountId ? (
                        <Button component={Link} to={"/matches?accountId=" + props.accountId} color="inherit" className={classes.button}>See Matches</Button>
                    ) : null}

                    <Button component={Link} to="/create" color="inherit" className={classes.leftButton}>Create User</Button>
                    <Button component={Link} to="/login" color="inherit" className={classes.button}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1
    },
    leftButton: {
        marginLeft: 'auto'
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

export default withStyles(styles)(NavBar);