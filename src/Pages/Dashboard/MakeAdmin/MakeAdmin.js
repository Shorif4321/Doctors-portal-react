import { Button, TextField, Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState()
    const [success, setSuccess] = useState(false)
    const { token } = useAuth()

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleOnSubmit = e => {
        const user = { email };
        fetch('https://ancient-reef-35678.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true)
                    console.log(data)
                    setEmail('')

                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h1>Make An Admin From This Page</h1>
            <form onSubmit={handleOnSubmit}>
                <TextField sx={{ m: 1, width: '50%', textAlign: 'center' }}

                    label="Email"
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success"> Made admin successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;