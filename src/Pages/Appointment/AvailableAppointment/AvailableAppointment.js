import { Container, Grid, Alert } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';
import Typography from '@mui/material/Typography';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        space: 10,
        price:250
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        space: 8,
         price:200
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        space: 9,
         price:230
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        space: 5,
         price:350
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        space: 410,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        space: 510,
    },
]


const AvailableAppointment = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false)
    return (
        <Container>
            <Typography sx={{ fontWeight: '600', color: '#1AC7C1', mb: 3 }} >
                <h1>Available Appointment on {date.toDateString()}</h1>
            </Typography>
            {bookingSuccess &&
                <Alert severity="success"> Your Appointment successfully Confirm</Alert>}

            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        date={date}
                        key={booking.id}
                        booking={booking}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }

            </Grid>

        </Container>
    );
};

export default AvailableAppointment;