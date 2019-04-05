import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const axios = require('axios');

class CreateUser extends Component {
    state = {
        email: '',
        accountId: '',
        password: ''
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        const { email, password } = this.state;
        axios.post('http://localhost:8000/login', {
            email,
            password
        }).then((results) => {
            this.props.onLogin(email, password, results.data[0].accountId)
            console.log('User Logged In!')
        }).catch((err) => {
            console.error(err)
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit} noValidate autoComplete="off" className={classes.formContainer}>
                <TextField
                    id="email"
                    label="Email"
                    className={classes.textField}
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                    margin="normal"
                />
                <TextField
                    id="password"
                    label="Password"
                    type="password"
                    className={classes.textField}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                />
                <Button type="submit" color="inherit" className={classes.button}>Submit</Button>
            </form>
        );
    }
}

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1
    },
    button: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 5
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    textField: {
        marginLeft: 10,
        marginRight: 10
    },
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '25%',
        border: '1px solid #ccc',
        borderRadius: 16,
        marginTop: 20,
        marginLeft: 'auto',
        marginRight: 'auto'
    }
};

export default withStyles(styles)(CreateUser);