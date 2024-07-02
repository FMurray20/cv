import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Profile() {
    return (
        <Paper
            sx={{
                animation: 'fadeIn 0.5s ease-in-out',
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 2,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '100% 100%',
                backgroundImage: `url(${require('../Images/banner.jpg')})`,
            }}
        >
            {<img style={{ display: 'none' }}
                // @ts-ignore
                src={require('../Images/banner.jpg')}
                alt={''} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            Finlay Murray
                        </Typography>
                        <Typography variant="h5" color="inherit" paragraph>
                            MEng in Computer and Electronic Systems with Distinction
                        </Typography>
                        <Box sx={{ pt: 2 }}>
                            <Typography fontSize={'10pt'} variant="subtitle1" color={'inherit'} paragraph>
                                Mobile: +44 7757 928930
                            </Typography>
                            <Typography fontSize={'10pt'} variant="subtitle1" color={'inherit'} paragraph>
                                Email: finlay.murray20 @virginmedia.com
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Paper >
    );
}

export default Profile;