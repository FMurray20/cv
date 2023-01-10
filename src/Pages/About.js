import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import Profile from '../Components/Profile';

function About() {
    return (
        <>
            <Profile />
            <Box sx={{ pt: 2 }}>
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
                    <Typography variant="h6" gutterBottom>
                        {'About me:'}
                    </Typography>
                    <Divider />
                    <p>
                        Hello there, my name is Finlay Murray:
                    </p>
                    <p>
                        I am a 21 year old University student originating from Glasgow Scotland.
                        I am currently in my fourth year of study at the University of Strathclyde undertaking a Computer and Electronic
                        Systems (MEng) course.
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
                        I am currently seeking part-time employment to provide me with relevant insight, learning and professional experience.
                    </p>
                    <p style={{ paddingBottom: 10 }}>
                        I believe that a combination of both AI learning and capitalising on new technologies will pave the way for a better and more secure future for society.
                    </p>

                    <Typography variant="h6" gutterBottom>
                        {'About the Website:'}
                    </Typography>
                    <Divider />
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
                </Grid>
            </Box >
        </>
    );
}

export default About;