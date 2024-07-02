import React, { useState } from 'react';
import { Box, Card, Divider, Typography, ButtonGroup, Button } from '@mui/material';
import FlourishBubbleChart from '../Components/FlourishBubbleChart.tsx';

function Skills() {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleFilterChange = (filter) => {
        setSelectedFilter(filter);
    };

    return (
        <div>
            <Box sx={{ animation: 'fadeIn 0.5s ease-in-out', pt: 2 }}>
                <Card sx={{
                    backgroundColor: '#5E6A87',
                    color: '#fff',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    padding: 1
                }}>
                    <Typography variant="h5">
                        {'Skills'}
                    </Typography>
                </Card>
                <Divider sx={{ pb: 2, visibility: "hidden" }} />
                {/* Filter Selection Section */}
                <Box sx={{ animation: 'fadeIn 0.5s ease-in-out', textAlign: 'center', pb: 2, display: 'flex', justifyContent: 'center' }}>
                    <ButtonGroup sx={{
                        display: 'flex', // Ensures the button group stays inline
                        flexWrap: 'wrap', // Allows wrapping on smaller screens
                        justifyContent: 'center', // Centers the button group
                        overflow: 'hidden', // Prevents overflow
                        whiteSpace: 'nowrap', // Prevents text from wrapping
                        '@media (max-width: 600px)': {
                            flexDirection: 'column', // Stack buttons vertically on small screens
                            whiteSpace: 'normal', // Allows text to wrap on small screens
                        }
                    }}
                        variant="contained"
                        aria-label="outlined primary button group"
                    >
                        <Button
                            onClick={() => handleFilterChange('All')}
                            variant={selectedFilter === 'All' ? 'contained' : 'outlined'}
                            color={selectedFilter === 'All' ? 'primary' : 'inherit'}
                            style={{
                                backgroundColor: selectedFilter === 'All' ? '' : '#fff', // White when not selected
                                color: selectedFilter === 'All' ? '#fff' : '#000', // Text color
                            }}
                        >
                            All
                        </Button>
                        <Button
                            onClick={() => handleFilterChange('Programming Languages')}
                            variant={selectedFilter === 'Programming Languages' ? 'contained' : 'outlined'}
                            color={selectedFilter === 'Programming Languages' ? 'primary' : 'inherit'}
                            style={{
                                backgroundColor: selectedFilter === 'Programming Languages' ? '' : '#fff', // White when not selected
                                color: selectedFilter === 'Programming Languages' ? '#fff' : '#000', // Text color
                            }}
                        >
                            Programming Languages
                        </Button>
                        <Button
                            onClick={() => handleFilterChange('Platforms')}
                            variant={selectedFilter === 'Platforms' ? 'contained' : 'outlined'}
                            color={selectedFilter === 'Platforms' ? 'primary' : 'inherit'}
                            style={{
                                backgroundColor: selectedFilter === 'Platforms' ? '' : '#fff', // White when not selected
                                color: selectedFilter === 'Platforms' ? '#fff' : '#000', // Text color
                            }}
                        >
                            Platforms
                        </Button>
                        <Button
                            onClick={() => handleFilterChange('Other Skills')}
                            variant={selectedFilter === 'Other Skills' ? 'contained' : 'outlined'}
                            color={selectedFilter === 'Other Skills' ? 'primary' : 'inherit'}
                            style={{
                                backgroundColor: selectedFilter === 'Other Skills' ? '' : '#fff', // White when not selected
                                color: selectedFilter === 'Other Skills' ? '#fff' : '#000', // Text color
                            }}
                        >
                            Other Skills
                        </Button>
                    </ButtonGroup>
                </Box>
                <Card sx={{ height: '400px', overflow: 'hidden' }}>
                    <FlourishBubbleChart filter={selectedFilter} />
                </Card>
            </Box>
        </div>
    );
}

export default Skills;
