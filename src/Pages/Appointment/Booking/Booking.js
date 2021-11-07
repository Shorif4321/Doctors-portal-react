import React from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    const { name, time, space } = booking;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }} >
                    <Typography sx={{ fontWeight: '600', color: '#1AC7C1' }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography sx={{ fontWeight: '400' }} variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" sx={{ mb: 3 }} display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleBookingOpen} variant="contained" sx={{ backgroundColor: '#1AC7C1' }} >BOOK APPOINTMENT</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                booking={booking}
                setBookingSuccess={setBookingSuccess}

            >

            </BookingModal>

        </>

    );
};

export default Booking;