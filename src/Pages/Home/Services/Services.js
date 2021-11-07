import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Servie from '../Service/Servie';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';

const services = [
    {
        "name": "Fluride Treatment",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, deserunt commodi. Maxime rerum sequi officia!",
        "img": fluoride
    },
    {
        "name": "Cavity Treatment",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, deserunt commodi. Maxime rerum sequi officia!",
        "img": cavity
    },
    {
        "name": "Whitening Treatment",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, deserunt commodi. Maxime rerum sequi officia!",
        "img": whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography variant="h6" component="div" sx={{ fontWeight: 400, color: 'success.main' }}>
                    OUR SERVICES
                </Typography>
                <Typography variant="h4" m={3} mb={5} component="div" sx={{ fontWeight: 'bold' }} >
                    Service We Provide
                </Typography>
                <Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Servie
                            key={service.name}
                            service={service}
                        ></Servie>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;