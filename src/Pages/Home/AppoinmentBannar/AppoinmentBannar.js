import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'
import { Button, Typography } from '@mui/material';

const appointmentBg = {
    background: `url(${bg})`,
    backgroundColor: '#3E4559',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 120
}

const AppoinmentBannar = () => {
    return (
        <Box style={appointmentBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5}>
                    <img style={{ width: '400px', marginTop: '-120px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={7}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        textAlign: 'left'

                    }}
                >
                    <Box sx={{ px: 5 }}>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#12D0D5' }} >
                            Appointment
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }} >
                            Make an Appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: '15px', fontWeight: 300 }}>
                            Appointment refers to a position to which one is assigned, as by a high government official. Office often suggests a position of trust or authority.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#12D0D5' }}>Learn More</Button>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default AppoinmentBannar;