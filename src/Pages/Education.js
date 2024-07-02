import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardMedia, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Education() {
    const nat5Rows = [
        { Name: "Computing", Result: "A" },
        { Name: "Maths", Result: "A" },
        { Name: "Physics", Result: "A" },
        { Name: "Biology", Result: "A" },
        { Name: "Chemistry", Result: "A" },
        { Name: "Modern Studies", Result: "A" },
        { Name: "English", Result: "B" }
    ]

    const higherRows = [
        { Name: "Computing", Result: "A" },
        { Name: "English", Result: "A" },
        { Name: "Maths", Result: "A" },
        { Name: "Physics", Result: "A" },
        { Name: "Biology", Result: "B" },
        { Name: "Chemistry", Result: "C" },
        { Name: "Geography", Result: "C" },
    ];

    const advancedHigherRows = [
        { Name: "Computing ", Result: "C" }
    ];

    const uniY1Rows = [
        { Name: "ENGINEERING INDUSTRY AND PROFESSION", Result: "72", Grade: "A" },
        { Name: "MACHINES, LANGUAGES AND COMPUTATION", Result: "63", Grade: "B" },
        { Name: "PROGRAMMING FOUNDATIONS", Result: "88", Grade: "A" },
        { Name: "FUNDAMENTALS OF COMPUTER SYSTEMS", Result: "69", Grade: "B" },
        { Name: "ELECTRONIC AND ELECTRICAL TECHNIQUES AND DESIGN 1", Result: "62", Grade: "B" },
        { Name: "ELECTRONIC AND ELECTRICAL PRINCIPLES 1", Result: "63", Grade: "B" },
        { Name: "ENGINEERING MATHEMATICS", Result: "66", Grade: "B" },
    ]

    const uniY2Rows = [
        { Name: "ELECTROMAGNETISM", Result: "73", Grade: "A" },
        { Name: "ENGINEERING DESIGN AND MANUFACTURE", Result: "71", Grade: "A" },
        { Name: "ADVANCED PROGRAMMING", Result: "84", Grade: "A" },
        { Name: "COMPUTER SYSTEMS AND ARCHITECTURE", Result: "91", Grade: "A" },
        { Name: "ELECTRONIC AND ELECTRICAL PRINCIPLES 2", Result: "63", Grade: "B" },
        { Name: "DIGITAL ELECTRONIC SYSTEMS", Result: "70", Grade: "A" },
        { Name: "ENGINEERING MATHEMATICS 3E", Result: "67", Grade: "B" },
        { Name: "PHYSICAL ELECTRONICS", Result: "60", Grade: "B" },
    ]

    const uniY3Rows = [
        { Name: "ENGINEERING INNOVATION AND MANAGEMENT", Result: "45", Grade: "C" },
        { Name: "BUILDING SOFTWARE SYSTEMS", Result: "76", Grade: "A" },
        { Name: "FOUNDATIONS OF ARTIFICIAL INTELLIGENCE", Result: "77", Grade: "A" },
        { Name: "WEB APPLICATIONS DEVELOPMENT", Result: "81", Grade: "A" },
        { Name: "COMPUTER SYSTEMS AND CONCURRENCY", Result: "83", Grade: "A" },
        { Name: "COMPUTER AND ELECTRONIC SYSTEMS PROJECT", Result: "73", Grade: "A" },
        { Name: "SIGNALS AND COMMUNICATIONS SYSTEMS", Result: "59", Grade: "B" },
    ]

    const uniY4Rows = [
        { Name: "COMPUTER SECURITY", Result: "51", Grade: "C" },
        { Name: "SOFTWARE ARCHITECTURE AND DESIGN", Result: "50", Grade: "C" },
        { Name: "INFORMATION ACCESS AND MINING", Result: "73", Grade: "A" },
        { Name: "HUMAN-CENTRED SECURITY", Result: "73", Grade: "A" },
        { Name: "CES INDIVIDUAL PROJECT", Result: "70", Grade: "A" }
    ]

    const uniY5Rows = [
        { Name: "GROUP PROJECT", Result: "79", Grade: "A" },
        { Name: "ADVANCED TOPICS IN SOFTWARE ENGINEERING", Result: "66", Grade: "B" },
        { Name: "DESIGNING USABLE SYSTEMS", Result: "85", Grade: "A" },
        { Name: "DISTRIBUTED INFORMATION SYSTEMS", Result: "75", Grade: "A" },
        { Name: "MOBILE SOFTWARE AND APPLICATIONS", Result: "80", Grade: "A" },
    ]

    const HonoursAndAwards = [
        { Name: "Computer and Electronic systems (MEng) Year 1:", Award: "PASS with Merit", DecisionDate: "29 June 2020" },
        { Name: "Computer and Electronic systems (MEng) Year 2:", Award: "PASS with Distinction", DecisionDate: "17 June 2021" },
        { Name: "Computer and Electronic systems (MEng) Year 3:", Award: "PASS with Distinction", DecisionDate: "17 June 2022" },
        { Name: "Computer and Electronic systems (MEng) Year 4:", Award: "PASS with Merit", DecisionDate: "25 May 2023" },
        { Name: "Computer and Electronic systems (MEng) Year 5:", Award: "PASS with Distinction", DecisionDate: "24 May 2024" },
    ]

    return (
        <>
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
                    <Card sx={{
                        backgroundColor: '#5E6A87',
                        color: '#fff',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        padding: 1
                    }}>
                        <Typography variant="h5">
                            {'Education'}
                        </Typography>
                    </Card>
                    <Divider sx={{ pt: 2 }} />
                    <Card sx={{ animation: 'fadeIn 0.5s ease-in-out', display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                p: 3,
                                flexGrow: 1,
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Box sx={{ flex: 1 }}>
                                <Typography component="h2" variant="h6">
                                    MEng in Computer and Electronic Systems
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    University of Strathclyde &emsp; 08/2019 – 06/2024
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    During my 5 years at the University of Strathclyde, I maintained a weighted average grade of 71% across all classes and graduated with distinction, achieving a final result of 72.3%. I specialized in AI, culminating in a final year project where I implemented a litter detection AI. More details about this project can be found in the Projects Section.
                                </Typography>
                            </Box>
                            <CardMedia
                                component="img"
                                sx={{
                                    maxHeight: { xs: "150px", sm: "150px" },
                                    maxWidth: { xs: "150px", sm: "150px" },
                                    display: 'block', // Make image visible on all screen sizes
                                    padding: "1em", // Adjust padding to match example
                                    objectFit: "contain"
                                }}
                                // @ts-ignore
                                image={require('../Images/Graduation.jpg')}
                                alt="Image of myself at my graduation"
                            />
                        </Box>
                    </Card>

                    <Accordion sx={{ animation: 'fadeIn 0.5s ease-in-out' }} defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Box sx={{ display: 'flex' }} alignItems='center' justifyContent={'space-between'}>
                                <Typography>University Of Strathclyde</Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Typography fontSize={'7pt'} sx={{ color: 'text.secondary' }}>August 2019 - June 2024</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Divider />
                            <p> Listed below are all of the results from past modules I have attended in the last 5 years of study.</p>

                            <Typography fontSize={'11pt'}> Honours and Awards:</Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Award</TableCell>
                                            <TableCell align="right">Descision Date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {HonoursAndAwards.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.Name}
                                                </TableCell>
                                                <TableCell align="right">{row.Award}</TableCell>
                                                <TableCell align="right">{row.DecisionDate}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <Typography sx={{ pt: 5 }} fontSize={'11pt'}> Fifth Year Results: </Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Module</TableCell>
                                            <TableCell align="right">Result</TableCell>
                                            <TableCell align="right">Grade</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {uniY5Rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.Name}
                                                </TableCell>
                                                <TableCell align="right">{row.Result}</TableCell>
                                                <TableCell align="right">{row.Grade}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography sx={{ pt: 5 }} fontSize={'11pt'}> Fourth Year Results: </Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Module</TableCell>
                                            <TableCell align="right">Result</TableCell>
                                            <TableCell align="right">Grade</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {uniY4Rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.Name}
                                                </TableCell>
                                                <TableCell align="right">{row.Result}</TableCell>
                                                <TableCell align="right">{row.Grade}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography sx={{ pt: 5 }} fontSize={'11pt'}> Third Year Results: </Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Module</TableCell>
                                            <TableCell align="right">Result</TableCell>
                                            <TableCell align="right">Grade</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {uniY3Rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.Name}
                                                </TableCell>
                                                <TableCell align="right">{row.Result}</TableCell>
                                                <TableCell align="right">{row.Grade}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography sx={{ pt: 5 }} fontSize={'11pt'}> Second Year Results: </Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Module</TableCell>
                                            <TableCell align="right">Result</TableCell>
                                            <TableCell align="right">Grade</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {uniY2Rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.Name}
                                                </TableCell>
                                                <TableCell align="right">{row.Result}</TableCell>
                                                <TableCell align="right">{row.Grade}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography sx={{ pt: 5 }} fontSize={'11pt'}> First Year Results: </Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Module</TableCell>
                                            <TableCell align="right">Result</TableCell>
                                            <TableCell align="right">Grade</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {uniY1Rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.Name}
                                                </TableCell>
                                                <TableCell align="right">{row.Result}</TableCell>
                                                <TableCell align="right">{row.Grade}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ animation: 'fadeIn 0.5s ease-in-out' }} defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Box sx={{ display: 'flex' }} alignItems='center' justifyContent={'space-between'}>
                                <Typography>Douglas Academy</Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Typography fontSize={'7pt'} sx={{ color: 'text.secondary' }}>August 2013 - May 2019</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Divider />
                            <p> Listed below are all major qualifications I earned during my 6 years at Douglas Academy.  </p>
                            <Typography fontSize={'11pt'}> National 5 Results: </Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Result</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {nat5Rows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.Name}
                                                </TableCell>
                                                <TableCell align="right">{row.Result}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography sx={{ pt: 5 }} fontSize={'11pt'}> Higher Results: </Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Result</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {higherRows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.Name}
                                                </TableCell>
                                                <TableCell align="right">{row.Result}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography sx={{ pt: 5 }} fontSize={'11pt'}> Advanced Higher Results: </Typography>
                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Name</TableCell>
                                            <TableCell align="right">Result</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {advancedHigherRows.map((row) => (
                                            <TableRow
                                                key={row.name}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.Name}
                                                </TableCell>
                                                <TableCell align="right">{row.Result}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </AccordionDetails>
                    </Accordion>
                    <Divider />

                </Grid>
            </Box >
        </>
    );
}

export default Education;