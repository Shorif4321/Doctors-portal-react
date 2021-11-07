import { Button, Container, Grid, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import login from '../../../images/login.png'
import TextField from '@mui/material/TextField';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({})
    const history = useHistory();

    const { user, registerUser, isLoading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        console.log(newLoginData)
        setLoginData(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Password is not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)

        e.target.reset()
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                <Grid item xs={12} md={6}  >
                    <Typography sx={{ color: '#626262' }} variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="name"
                            onBlur={handleOnBlur}
                            label="Your Name"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            type="email"
                            id="standard-basic"
                            name="email"
                            onBlur={handleOnBlur}
                            label="Your Email"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="password"
                            onBlur={handleOnBlur}
                            label="Password"
                            type="password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            name="password2"
                            onBlur={handleOnBlur}
                            label="Re-Password"
                            type="password"
                            variant="standard"
                        />
                        <Button variant="contained" type="submit" sx={{ width: '75%', m: 1, backgroundColor: '#1AC7C1' }}>
                            Register
                        </Button>
                        <NavLink to="login" style={{ textDecoration: 'none' }} >
                            <Button style={{ color: '#1AC7C1', }} variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email &&
                        <Alert severity="success">Congratulation! You have create a new account successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>

                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;