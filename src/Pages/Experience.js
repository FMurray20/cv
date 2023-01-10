import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import * as React from 'react';

function Experience() {
    return (
        <>
            <Box sx={{ pt: 2 }}>
                <Typography variant="h5" gutterBottom>
                    {'Experience in Industry:'}
                </Typography>
                <Divider />
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h6">
                            Role: Front end React Developer
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Spartan Solutions Ltd &emsp; 16/05/2022 – 13/08/2021
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            During my 12 weeks at Spartan I was tasked with
                            creating an interactive timeline and scheduler for the "Phalanx"
                            web portal. Due to my work with them last year,
                            the Development Team were keen for me to go through the
                            entire development process and gave me full control on the
                            functionality and design of the new feature. The codebase I was
                            working in was a React application written in Typescript.
                            This allowed me to make interactive elements with robust code.
                            I utilised my knowledge and experience with the codebase to implement this successfully, meeting the brief within the time period specified.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            maxHeight: "20%",
                            maxWidth: "20%",
                            display: { xs: 'none', sm: 'block' },
                            padding: "1em 1em 0 1em", objectFit: "contain"
                        }}
                        // @ts-ignore
                        image={require('../Images/SpartanLogo.jpg')}
                        alt={'Spartan Logo'} />
                </Card>
                <Divider sx={{ pt: 2 }} />
                <Card sx={{ pu: 10, display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h6">
                            Role: Software Engineer Intern
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Spartan Solutions Ltd &emsp; 07/06/2021 – 13/08/2021
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            During my summer internship at Spartan Solutions,
                            I was tasked with reworking and improving the
                            functionality of their Mobile/ Handheld Devices. This
                            involved writing code to communicate the data
                            associated with Updates to the server.
                            I utilised both my knowledge of C# and JavaScript to
                            implement this successfully, meeting the required
                            functionality within the time period specified.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            maxHeight: "20%",
                            maxWidth: "20%",
                            display: { xs: 'none', sm: 'block' },
                            padding: "1em 1em 0 1em", objectFit: "contain"
                        }}
                        // @ts-ignore
                        image={require('../Images/SpartanLogo.jpg')}
                        alt={'Spartan Logo'} />
                </Card>
                <Divider sx={{ pt: 2 }} />
                <Card sx={{ pu: 10, display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h6">
                            Role: Software Engineer Intern
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Linn Products &emsp; 6/10/2018 – 11/10/2018
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            During the October break in 2018,
                            I completed work experience with Linn products.
                            The staff allowed me to undertake an intense crash course
                            in the working world of computing science
                            and electrical engineering.
                            This introduced me to new programming languages such as NET C#
                            and gave me a greater understanding of other programming
                            languages I am already familiar with such as HTML
                            and JavaScript.
                            It further solidified my desire to pursue
                            this career path, emphasising the need to
                            strengthen and develop my knowledge to ensure I am the
                            best I can possibly be. Experiencing a real working
                            environment illustrated to me that my chosen
                            career is one that requires an open mindset,
                            creativity, hard-work, and teamwork above all else.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            maxHeight: "20%",
                            maxWidth: "20%",
                            display: { xs: 'none', sm: 'block' },
                            padding: "1em 1em 0 1em", objectFit: "contain"
                        }}
                        // @ts-ignore
                        image={require('../Images/LinnLogo.png')}
                        alt={'Spartan Logo'} />
                </Card>
                <Typography sx={{ pt: 5 }} variant="h5" gutterBottom>
                    {'Other Experience:'}
                </Typography>
                <Divider sx={{ pb: 2 }} />
                <Card sx={{ display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h6">
                            Role: Staff Supervisor
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Fit Food Bistro Glasgow	 &emsp; 20/01/2022 – current
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            As a staff supervisor I am primarily responsible
                            for managing the workflow and training new hires
                            on how they can best serve customers to provide the
                            best service possible. I also monitor
                            staff wellbeing, ensuring that employees
                            are in a good place physically and mentally.
                            I act as the “informal bridge” between staff and management,
                            simply meaning members of staff can talk to
                            me about anything casually. This allows me to bring up
                            issues or ideas that were mentioned to management to further
                            better the experience of the café.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            maxHeight: "20%",
                            maxWidth: "20%",
                            display: { xs: 'none', sm: 'block' },
                            padding: "1em 1em 0 1em", objectFit: "contain"
                        }}
                        // @ts-ignore
                        image={require('../Images/FitFoodLogo.jpg')}
                        alt={'Spartan Logo'} />
                </Card>
                <Divider sx={{ pt: 2 }} />
                <Card sx={{ pu: 10, display: 'flex' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h6">
                            Role: Food runner/ waiter
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            Andiamo bar and restaurant &emsp; 13/10/2018 – 1/08/2020
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            Being a food runner / waiter at Andiamo
                            has allowed me to build upon my communication
                            and leadership skills in a fast-paced working
                            environment. I have learned how to co-ordinate
                            with staff to ensure that our customers are satisfied
                            and are enjoying their experience at the restaurant.
                            Here I have been able to interact with customers and staff,
                            strengthening my ability to work both as part of a team and
                            using my own initiative to complete tasks which were
                            essential to the smooth running of the restaurant.
                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{
                            maxHeight: "20%",
                            maxWidth: "20%",
                            display: { xs: 'none', sm: 'block' },
                            padding: "1em 1em 0 1em", objectFit: "contain"
                        }}
                        // @ts-ignore
                        image={require('../Images/AndiamoLogo.jpg')}
                        alt={'Spartan Logo'} />
                </Card>
                <Divider sx={{ pt: 2 }} />
            </Box >
        </>
    );
}

export default Experience;