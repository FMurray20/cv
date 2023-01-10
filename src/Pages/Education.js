import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react';
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

    const HonoursAndAwards = [
        { Name: "Computer and Electronic systems (MEng) Year 1:", Award: "PASS with Merit", DecisionDate: "29 June 2020" },
        { Name: "Computer and Electronic systems (MEng) Year 2:", Award: "PASS with Distinction", DecisionDate: "17 June 2021" },
        { Name: "Computer and Electronic systems (MEng) Year 3:", Award: "PASS with Distinction", DecisionDate: "17 June 2022" },
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
                    <Typography variant="h5" gutterBottom>
                        {'Education'}
                    </Typography>
                    <Accordion defaultExpanded>
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
                    <Accordion defaultExpanded>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Box sx={{ display: 'flex' }} alignItems='center' justifyContent={'space-between'}>
                                <Typography>University Of Strathclyde</Typography> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <Typography fontSize={'7pt'} sx={{ color: 'text.secondary' }}>August 2019 - Current</Typography>
                            </Box>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Divider />
                            <p> Listed below are all of the results from past modules I have attended in the last 3 years of study.</p>
                            <Typography fontSize={'11pt'}> First Year Results: </Typography>
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
                            <Typography sx={{ pt: 5 }} fontSize={'11pt'}> Honours and Awards:</Typography>
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
                        </AccordionDetails>
                    </Accordion>
                    <Divider />

                </Grid>
            </Box >
        </>
    );
}

export default Education;