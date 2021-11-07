import React from 'react';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png'
import bg from '../../../images/bg.png'
import { Button, Typography, Container } from '@mui/material';
import Box from '@mui/material/Box';

const bannerBg = {
    backgroun: `url(${bg})`

}
const varticleCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 450,
}
const Bannar = () => {
    return (
        <Container style={bannerBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid style={{ ...varticleCenter, textAlign: 'left' }} item xs={12} md={6}>
                    <Box >
                        <Typography variant="h3" sx={{ color: '#1D2E45' }}>
                            Your New Smile <br />
                            Start Here
                        </Typography>
                        <Typography variant="h6" py={2} sx={{
                            fontSize: 14, color: 'gray', fontWeight: 300, lineHeight: 2
                        }}>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt quasi reprehenderit dicta vero atque a sint rem natus alias ipsa.and more text will be go her efor showof
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#12D0D5' }}>Get Appointment</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={varticleCenter}>
                    <img style={{ width: 350 }} src={chair} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Bannar;