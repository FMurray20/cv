import React, { useEffect, useState } from 'react';
import { TextField, Button, Container, Box, Card, Typography, Divider, Grid, Snackbar } from '@mui/material';
import GraduationProf from '../Images/GraduationProf.jpg';
import emailjs from 'emailjs-com';
import Alert from '@mui/material/Alert';


function ContactForm() {
    const [alertInfo, setAlertInfo] = useState({ open: false, message: '', severity: '' });
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: '',
    });
    const initialFormData = {
        user_name: '',
        user_email: '',
        message: ''
    };

    useEffect(() => {
        if (alertInfo.open) {
            const timer = setTimeout(() => {
                setAlertInfo({ ...alertInfo, open: false });
            }, 6000); // Close the alert after 6 seconds
            return () => clearTimeout(timer);
        }
    }, [alertInfo]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check for empty fields
        if (!formData.user_name || !formData.user_email || !formData.message) {
            setAlertInfo({ open: true, message: 'Please fill in all fields', severity: 'error' });
            return;
        }

        // EmailJS code to send email
        emailjs.send('service_kygvizf', 'template_1z80km1', formData, 'z2bpJs9G3jFhf9sBd')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setAlertInfo({ open: true, message: 'Your message has been sent successfully!', severity: 'success' });
            }, (err) => {
                console.log('FAILED...', err);
                setAlertInfo({ open: true, message: 'Failed to send the message, please try again.', severity: 'error' });
            });
        setFormData(initialFormData);
    };

    return (
        <>
            <Box sx={{ pt: 2 }}>
                <Card sx={{
                    backgroundColor: '#5E6A87',
                    color: '#fff',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    padding: 1
                }}>
                    <Typography variant="h5">
                        {'Contact Me'}
                    </Typography>
                </Card>
                <Divider sx={{ pb: 2, animation: 'fadeIn 0.5s ease-in-out' }} />
                <Card sx={{ padding: 2, animation: 'fadeIn 0.5s ease-in-out' }}>
                    <Container>
                        <Grid container spacing={2} alignItems="stretch">
                            {/* Image and Details Grid */}
                            <Grid item xs={12} md={4} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center', // Ensures content is vertically centered
                                height: '100%', // Make sure it stretches the full height of its container
                                textAlign: 'center',
                            }}>
                                <Box
                                    component="img"
                                    sx={{
                                        width: '100%', // Default width
                                        height: 'auto', // Maintain aspect ratio
                                        objectFit: 'cover', // Adjust as necessary to maintain aspect ratio
                                        borderRadius: '20px', // Rounded corners
                                        maxWidth: '300px', // Maximum width for better responsiveness
                                    }}
                                    alt="Your Photo"
                                    src={GraduationProf}
                                />
                                <Box sx={{ mt: 2 }}>
                                    <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                        Finlay Murray
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginBottom: 1 }}>
                                        Degree: MEng in Computer and Electronic Systems with Distinction
                                    </Typography>
                                    <Typography variant="body2" sx={{ marginBottom: 1 }}>
                                        Email Address: finlay.murray20@virginmedia.com
                                    </Typography>
                                </Box>
                            </Grid>
                            {/* Form Fields Grid */}
                            <Grid item xs={12} md={8} sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center', // Ensures content is vertically centered
                                height: '100%', // Make sure it stretches the full height of its container
                            }}>
                                <form onSubmit={handleSubmit}>
                                    <Box mb={2}>
                                        <TextField
                                            fullWidth
                                            label="Name"
                                            name="user_name"
                                            value={formData.user_name}
                                            onChange={handleChange}
                                            variant="outlined"
                                            margin="normal"
                                            rows={1}
                                        />
                                    </Box>
                                    <Box mb={2}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            name="user_email"
                                            value={formData.user_email}
                                            onChange={handleChange}
                                            variant="outlined"
                                            margin="normal"
                                            rows={1}
                                        />
                                    </Box>
                                    <Box mb={2}>
                                        <TextField
                                            fullWidth
                                            label="Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            variant="outlined"
                                            margin="normal"
                                            multiline
                                            rows={11}
                                        />
                                    </Box>
                                    <Box textAlign="center">
                                        <Button type="submit" variant="contained" color="primary">
                                            Submit
                                        </Button>
                                    </Box>
                                </form>
                            </Grid>
                        </Grid>
                        {alertInfo.open && (
                            <Snackbar open={alertInfo.open} autoHideDuration={6000} onClose={() => setAlertInfo({ ...alertInfo, open: false })} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
                                <Alert onClose={() => setAlertInfo({ ...alertInfo, open: false })}
                                    // @ts-ignore
                                    severity={alertInfo.severity} sx={{ width: '100%' }}>
                                    {alertInfo.message}
                                </Alert>
                            </Snackbar>
                        )}
                    </Container>
                </Card>
            </Box>
        </>
    );
}

export default ContactForm;

