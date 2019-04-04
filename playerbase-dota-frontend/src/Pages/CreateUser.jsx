import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const axios = require('axios');


class CreateUser extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        accountId: '',
        password: ''
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }

    handleSubmit = event => {
        const { firstName, lastName, email, accountId, password } = this.state;
        axios.post('localhost:8000/create', {
            firstName,
            lastName,
            email,
            accountId,
            password
        }).then(() => {
            //Add state login
            console.log('User Created!')
        }).catch((err) => {
            console.error(err)
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <form onSubmit={this.handleSubmit} noValidate autoComplete="off" className={classes.formContainer}>
                <TextField
                    id="firstName"
                    label="First Name"
                    className={classes.textField}
                    value={this.state.firstName}
                    onChange={this.handleChange('firstName')}
                    margin="normal"
                />
                <TextField
                    id="lastName"
                    label="Last Name"
                    className={classes.textField}
                    value={this.state.lastName}
                    onChange={this.handleChange('lastName')}
                    margin="normal"
                />
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
                    className={classes.textField}
                    value={this.state.password}
                    onChange={this.handleChange('password')}
                    margin="normal"
                />
                <TextField
                    id="accountId"
                    label="Account ID"
                    className={classes.textField}
                    value={this.state.accountId}
                    onChange={this.handleChange('accountId')}
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
        marginLeft: 5,
        marginRight: 5
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