import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import dental from '../../../images/treatment.png'
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const DentalCare = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={0} sx={{ py: 5 }}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '100%' }} src={dental} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}
                        sx={{ textAlign: 'left', }} >
                        <Grid sx={{ p: 5, }}>
                            <Typography variant="h4" sx={{ fontWeight: 600, color: '#203047' }}>
                                Exceptional Dental Care <br /> On Your Terms
                            </Typography>
                            <Typography sx={{ py: 5 }} variant="body2" color="text.secondary">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta neque praesentium consequuntur aut ullam, sequi quos, itaque temporibus provident sit ipsum est aliquid! Reprehenderit dignissimos natus nulla enim neque, repudiandae, laudantium minima placeat fuga, id dolore fugiat ipsam obcaecati recusandae nisi sequi deleniti deserunt assumenda! Beatae nesciunt perferendis consequatur, odio eligendi minima excepturi ratione impedit delectus eveniet debitis quidem praesentium assumenda! Voluptas fugiat laborum
                            </Typography>
                            <Button variant="contained" style={{ backgroundColor: '#12D0D5' }}>Get Appointment</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box >

    );
};

export default DentalCare;