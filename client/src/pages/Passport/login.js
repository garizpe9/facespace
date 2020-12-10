import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { ThemeProvider, makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../../theme'
import Typography from '@material-ui/core/Typography';
import { Button, CardContent, 
    Card, Grid, Paper, TextField 
} from '@material-ui/core';
import Container from '@material-ui/core/Container';
import axios from 'axios'
import Heal from '../../component/Healthruwords/Healthruwords'


class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null,
            classes:{}
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
  
    }
    useStyles = makeStyles((theme) => ({

    }));
    componentDidMount(){this.setState({classes:this.useStyles})}

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/api/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);
                
            })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return(
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container maxWidth="lg" align="center">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Grid item xs={8}>
                                    <Card color="secondary">
                                        <CardContent id="login">
                                            <Grid item xs={12}>
                                                <Paper className={this.state.classes.paper}>
                                                    <Grid item xs={12}>
                                                        <Typography gutterBottom variant="h3" component="h2">
                                                            Login
                                                            <h5>username</h5>
                                                            <TextField
                                                                controlId="loginform"
                                                                onChange={this.handleChange}
                                                                name="username"
                                                            />
                                                        </Typography>
                                                    </Grid>
                                                    <Typography gutterBottom variant="h3" component="h2">
                                                        password
                                                        <br />
                                                        <TextField
                                                            controlid="passwordform"
                                                            onChange={this.handleChange}
                                                            name="password"
                                                        />
                                                        <br />
                                                    </Typography>
                                                    <Button
                                                        controlId="loginBtn"
                                                        onClick={this.handleSubm}
                                                        variant="primary"
                                                        size="large"
                                                        type="submit">
                                                            Submit
                                                    </Button>
                                                </Paper>
                                                <Paper className={this.state.classes.paper}>
                                                    Not Registered?
                                                    <Button 
                                                        href={`/signup`}
                                                        color="primary"
                                                        type="submit">
                                                            Click here!
                                                    </Button>
                                                   <Heal/>
                                                </Paper>
                                                </Grid>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </ThemeProvider>
            )
        }
    }
}

export default LoginForm
