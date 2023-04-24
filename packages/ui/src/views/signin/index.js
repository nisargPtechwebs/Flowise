import React from 'react'
import { Button, TextField, Grid, Paper, AppBar, Typography, Toolbar, Link } from '@material-ui/core'
import { Navigate } from 'react-router-dom'
import { userActions } from '../_actions'
import { connect } from 'react-redux'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '', authflag: 1, isNavigate: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState({ username: event.state.username, password: event.state.password })
    }
    handleSubmit(event) {
        event.preventDefault()
        if (this.state.username == 'admin' && this.state.password == 'admin') {
            this.setState({ isNavigate: true })
        } else {
            alert('Incorrect Credntials!')
        }
    }
    render() {
        return (
            <div>
                {this.state.isNavigate && <Navigate to='/chatflows' replace={true} />}
                <AppBar position='static' alignitems='center' color='primary'>
                    <Toolbar>
                        <Grid container justify='center' wrap='wrap' className='text-center'>
                            <Grid item>
                                <Typography variant='h3'>Flowise</Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <Grid container spacing={0} justify='center' direction='row' className='login-main'>
                    <Grid item className='login-child'>
                        <Grid container direction='column' justify='center' spacing={2} className='login-form'>
                            <Paper variant='elevation' elevation={2} className='login-background'>
                                <Grid item>
                                    <Typography component='h1' variant='h3' sx={{ pb: 2 }}>
                                        Sign in
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <form onSubmit={this.handleSubmit}>
                                        <Grid container direction='column' spacing={2}>
                                            <Grid item>
                                                <TextField
                                                    type='text'
                                                    placeholder='Username'
                                                    fullWidth
                                                    name='username'
                                                    variant='outlined'
                                                    value={this.state.username}
                                                    onChange={(event) =>
                                                        this.setState({
                                                            [event.target.name]: event.target.value
                                                        })
                                                    }
                                                    required
                                                    // autoFocus
                                                />
                                            </Grid>
                                            <Grid item>
                                                <TextField
                                                    type='password'
                                                    placeholder='Password'
                                                    fullWidth
                                                    name='password'
                                                    variant='outlined'
                                                    value={this.state.password}
                                                    onChange={(event) =>
                                                        this.setState({
                                                            [event.target.name]: event.target.value
                                                        })
                                                    }
                                                    required
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Button variant='contained' color='primary' type='submit' className='button-block'>
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </form>
                                </Grid>
                                <Grid item>
                                    <Link href='#' variant='body2'>
                                        Forgot Password?
                                    </Link>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
function mapState(state) {
    // const { loggingIn } = state.authentication
    // return { loggingIn }
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
}

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage)
export { connectedLoginPage as LoginPage }
