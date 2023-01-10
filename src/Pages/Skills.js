import { Divider, Grid, Typography } from '@mui/material';
import React from 'react';

function Skills() {
    const programmingLanguages = [
        {
            img: require('../Images/SkillsSection/Programming/TypescriptLogo.svg.png'),
            title: 'TypeScript'
        },
        {
            img: require('../Images/SkillsSection/Programming/JavaScript-logo.png'),
            title: 'JavaScript'
        },
        {
            img: require('../Images/SkillsSection/Programming/HTML5_logo.svg.png'),
            title: 'HTML 5'
        },
        {
            img: require('../Images/SkillsSection/Programming/CSS3Logo.png'),
            title: 'CSS 3'
        },
        {
            img: require('../Images/SkillsSection/Programming/CSharpLogo.png'),
            title: 'C#'
        },
        {
            img: require('../Images/SkillsSection/Programming/C_Logo.svg.png'),
            title: 'C'
        },
        {
            img: require('../Images/SkillsSection/Programming/Javalogo.svg.png'),
            title: 'Java'
        },
        {
            img: require('../Images/SkillsSection/Programming/PythonLogo.svg.png'),
            title: 'Python'
        },
        {
            img: require('../Images/SkillsSection/Programming/VHDLLogo.png'),
            title: 'VHDL'
        }
    ]

    const proficientIn = [
        {
            img: require('../Images/SkillsSection/Proficiencies/React-icon.svg.png'),
            title: 'React'
        },
        {
            img: require('../Images/SkillsSection/Proficiencies/MOffice.png'),
            title: 'Office 365'
        },
        {
            img: require('../Images/SkillsSection/Proficiencies/Matlab_Logo.png'),
            title: 'Matlab'
        },
        {
            img: require('../Images/SkillsSection/Proficiencies/IntelliJ_Icon.svg.png'),
            title: 'IntelliJ Idea'
        },
        {
            img: require('../Images/SkillsSection/Proficiencies/VSCodeLogo.jpg'),
            title: 'VS code'
        }
    ]

    return (
        <div>
            <Typography variant="h5" sx={{ pt: 2 }} gutterBottom>
                {'Known Programming Languages:'}
            </Typography>
            <Divider />
            <Grid container
                spacing={0}
                alignItems="center"
                justifyContent="center">
                {programmingLanguages.map((item) => (
                    <Grid item
                        key={item.title}
                        display={'flex'}
                        xs={4}
                        sx={{
                            height: 'fit-content',
                            width: 'fit-content',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                        <img
                            style={{
                                maxHeight: "30%",
                                maxWidth: "30%",
                                // @ts-ignore
                                display: { xs: 'none', sm: 'block' },
                                padding: "1em 1em 0 1em", objectFit: "contain",
                                alignItems: 'center',
                                justifyContent: 'center'

                            }}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </Grid>
                ))}
            </Grid>
            <Typography variant="h5" sx={{ pt: 5 }} gutterBottom>
                {'Proficient in:'}
            </Typography>
            <Divider />
            <Grid container
                spacing={0}
                alignItems="center"
                justifyContent="center">
                {proficientIn.map((item) => (
                    <Grid item
                        key={item.title}
                        display={'flex'}
                        xs={4}
                        sx={{
                            height: 'fit-content',
                            width: 'fit-content',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                        <img
                            style={{
                                maxHeight: "30%",
                                maxWidth: "30%",
                                // @ts-ignore
                                display: { xs: 'none', sm: 'block' },
                                padding: "1em 1em 0 1em", objectFit: "contain",
                                alignItems: 'center',
                                justifyContent: 'center'

                            }}
                            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </Grid>
                ))}
            </Grid>
        </div >
    );
}

export default Skills;