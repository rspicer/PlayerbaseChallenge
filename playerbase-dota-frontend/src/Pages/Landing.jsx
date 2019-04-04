import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Dota2Logo from '../Dota2Logo.png';

function Landing(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Typography variant='h2' className={classes.title}>
                Playerbase Dota 2 Application
            </Typography>
            <img src={Dota2Logo} alt="Logo" className={classes.logo} />
        </div>
    );
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = {
    title: {
        marginTop: 20
    },
    logo: {
        width: '50%',
        height: '50%'
    }
};

export default withStyles(styles)(Landing);