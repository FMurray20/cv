import { Box, Card } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Profile from '../Components/Profile';

function About() {
    return (
        <>
            <Profile />
            <Box sx={{ animation: 'fadeIn 1.5s ease-in-out', pt: 2 }}>
                <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                        '& .markdown': {
                            py: 3,
                        },
                    }}
                >
                    <Card sx={{
                        backgroundColor: '#5E6A87',
                        color: '#fff',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        padding: 1
                    }}>
                        <Typography variant="h5">
                            {'About me'}
                        </Typography>
                    </Card>
                    <Divider sx={{ pb: 2 }} />
                    <Card sx={{ padding: 2 }}>
                        <p>
                            Hello there, my name is Finlay Murray:
                        </p>
                        <p>
                            I am a 23-year-old software engineer from Glasgow, Scotland.
                            I recently graduated with distinction from the University of Strathclyde, completing a 5 year Computer and Electronic Systems (MEng) degree.
                        </p>
                        <p>
                            From a young age I have been fascinated by the inner workings of computers, whether it be from
                            a software or hardware perspective. This initial curiosity led me to studying my current degree
                            and resulted in me aiming to pursue a successful career in Software Engineering.
                        </p>
                        <p>
                            To help me succeed on this path, I have undertaken personal projects to expand my knowledge
                            whenever I have the time (like the current website you are viewing!)
                            The rest of these projects can be found in the Projects Section.
                        </p>
                        <p style={{ paddingBottom: 10 }}>
                            I believe that a combination of both AI learning and capitalizing on new technologies will pave the way for a better and more secure future for society.
                        </p>
                    </Card>
                    <Divider sx={{ pb: 2 }} />
                    <Card sx={{
                        backgroundColor: '#5E6A87',
                        color: '#fff',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        padding: 1
                    }}>
                        <Typography variant="h5">
                            {'About the Website'}
                        </Typography>
                    </Card>
                    <Divider sx={{ pb: 2 }} />
                    <Card sx={{ padding: 2 }}>
                        <p>
                            I made this website to demonstrate my full set of skills that
                            wouldn't normally be visible through a CV alone. It also allows for me to explain personal projects and experiences in more detail.
                        </p>
                        <p>
                            To summarise, this website is a fully dynamic react based application written in .js with navigation
                            between pages, it also has a dynamic toolbar which allows for the
                            viewing experience to be seamless regardless of the device you are currently on.
                            It uses Material UI for most of its components however other libraries are used throughout.
                        </p>
                        <p>
                            For more information please visit the
                            Projects Section
                        </p>
                    </Card>
                    <Divider sx={{ pb: 2 }} />
                    <Card sx={{
                        backgroundColor: '#5E6A87',
                        color: '#fff',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        padding: 1
                    }}>
                        <Typography variant="h5">
                            {'LinkedIn Profile'}
                        </Typography>
                    </Card>
                    <Divider sx={{ pb: 2 }} />
                    <Card sx={{ padding: 2 }}>
                        <Box sx={{ width: '100%' }}>
                            <iframe
                                title='LinkedIn Profile'
                                src='https://www.juicer.io/api/feeds/finlay-murray-3864b9208/iframe'
                                frameBorder='0'
                                width='100%'
                                height='1000'
                                style={{ display: 'block', margin: '0 auto' }}
                            ></iframe>
                        </Box>
                    </ Card>
                </Grid>
            </Box >
        </>
    );
}

export default About;