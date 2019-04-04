import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Search from './Search';

function Landing(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <Search />
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Playerbase Dota 2
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {

};

export default withStyles(styles)(Landing);