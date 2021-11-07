import { Button, Container, Grid, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const { user, loginUser, isLoading, authError, singInWithGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, history, location)
        e.target.reset()
        e.preventDefault()
    }

    const handleGoogleLogin = e => {
        singInWithGoogle(history, location)
    }

    return (
        <Container>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6}  >
                    <Typography sx={{ color: '#626262' }} variant="body1" gutterBottom>
                        Login
                    </Typography>
                    {!isLoading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            label="Your Email"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="password"
                            onChange={handleOnChange}
                            label="Passwords"
                            type="password"
                            variant="standard"
                        />
                        <Button variant="contained" type="submit" sx={{ width: '75%', m: 1, backgroundColor: '#1AC7C1' }}>
                            Login
                        </Button>
                        <p>*****************</p>
                        <Button onClick={handleGoogleLogin} variant="contained" sx={{ width: '75%', m: 1, backgroundColor: '#1AC7C1' }}>
                            Login with Google
                        </Button>
                        <NavLink to="register" style={{ textDecoration: 'none' }} >
                            <Button style={{ color: '#1AC7C1', }} variant="text">New User? Please Register</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email &&
                        <Alert severity="success"> Login successful</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container >
    );
};

export default Login;