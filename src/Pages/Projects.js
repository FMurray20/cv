import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Modal, Typography } from '@mui/material';
import * as React from 'react';

function Projects() {
    const [modalOpen, setModalOpen] = React.useState(false)
    const [modalKey, setModalKey] = React.useState(null)


    function openModalAndSetKey(key) {
        setModalKey(key);
        showModalHandler();
    }

    function showModalHandler() {
        setModalOpen(!modalOpen);
    }

    const style = {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>
            <Box sx={{ pt: 2 }}>
                <Typography variant="h5" gutterBottom>
                    {'Personal Projects:'}
                </Typography>
                <Divider />
                <Card >
                    <CardActionArea onClick={() =>
                        openModalAndSetKey('CV Website')
                    }>
                        <CardMedia
                            sx={{ objectPosition: '100% 20%', maxHeight: '200px' }}
                            component="img"
                            alt="CV Website"
                            // @ts-ignore
                            image={require("../Images/CV Home.png")}
                        />
                        {modalOpen && modalKey === 'CV Website' ?
                            <Modal open={modalOpen}>
                                <Box
                                    display='flex'
                                    justifyContent={'center'}
                                    sx={{ style }}>
                                    <img
                                        style={{
                                            maxHeight: '50%',
                                            maxWidth: '50%',
                                            // @ts-ignore
                                            display: { xs: 'none', sm: 'block' },
                                            padding: "1em 1em 0 1em", objectFit: "contain",
                                            alignItems: 'center',
                                            justifyContent: 'center'

                                        }}
                                        src={`${require("../Images/CV Home.png")}?w=164&h=164&fit=crop&auto=format`}
                                        alt="CV Website"
                                    />

                                </Box>
                            </Modal>
                            : null}
                    </ CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            CV Website
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>
                                My most recent project is the website you are currently viewing!
                                It has been on the "TO-DO" list for a very long time.
                            </p>
                            <p>
                                The website is a react based application primarily written in Javascript for speed sake.
                                It uses MUI for the main elements of its user interface. Hosting is provided by Firebase and all code
                                was written by me.
                            </p>
                            <p>
                                I am using a Scrum Approach to building this website and plan to have all major pages
                                implemented by the end of sprint one. For now the website you are currently seeing is its
                                initial version.
                            </p>
                            <p>
                                Later versions will include:
                                <ul>
                                    <li>A full functioning backend</li>
                                    <li>Interactive examples of projects</li>
                                    <li>Better navigation between pages</li>
                                    <li>Documentation on some projects</li>
                                    <li>Git access to my projects</li>
                                </ul>
                            </p>
                            Plus Many More! The website will be updated when the next sprint begins ASAP.
                        </Typography>
                    </CardContent>
                </Card>
                <Divider sx={{ pb: 2 }} />
                <Card >
                    <CardActionArea onClick={() =>
                        openModalAndSetKey('ClothesWebsite')
                    }>
                        <CardMedia
                            sx={{ objectPosition: '100% 20%', maxHeight: '300px' }}
                            component="img"
                            alt="Clothes Website Template"
                            // @ts-ignore
                            image={require("../Images/Clothing Website.png")}
                        />
                        {modalOpen && modalKey === 'ClothesWebsite' ?
                            <Modal open={modalOpen}>
                                <Box
                                    display='flex'
                                    justifyContent={'center'}
                                    sx={{ style }}>
                                    <img
                                        style={{
                                            maxHeight: '50%',
                                            maxWidth: '50%',
                                            // @ts-ignore
                                            display: { xs: 'none', sm: 'block' },
                                            padding: "1em 1em 0 1em", objectFit: "contain",
                                            alignItems: 'center',
                                            justifyContent: 'center'

                                        }}
                                        src={`${require("../Images/Clothing Website.png")}?w=164&h=164&fit=crop&auto=format`}
                                        alt="Clothes Website Template"

                                    />

                                </Box>
                            </Modal>
                            : null}
                    </ CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Clothing Website Home Page
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>
                                Before the academic year started for 2022/23, a friend mentioned to me
                                that he was looking to start making his own clothes. He wanted an idea of
                                how a clothing website using his branding would look.
                            </p>
                            <p>
                                Shown in the figure above is a website drafted to his needs.
                            </p>
                            This website design was just a prototype, and some elements were taken from other libraries
                            to aid in development. <b>This project has been put on hold for now.</b>
                        </Typography>
                    </CardContent>
                </Card>
                <Divider sx={{ pb: 2 }} />
                <Card >
                    <CardActionArea onClick={() =>
                        openModalAndSetKey('Twitch Code')
                    }>
                        <CardMedia
                            sx={{ maxHeight: '200px' }}
                            component="img"
                            alt="Python Code for Twitch Chat Interaction"
                            // @ts-ignore
                            image={require("../Images/TwitchCode.png")}
                        />
                        {modalOpen && modalKey === 'Twitch Code' ?
                            <Modal open={modalOpen}>
                                <Box
                                    display='flex'
                                    justifyContent={'center'}
                                    sx={{ style }}>
                                    <img
                                        style={{
                                            maxHeight: '50%',
                                            maxWidth: '50%',
                                            // @ts-ignore
                                            display: { xs: 'none', sm: 'block' },
                                            padding: "1em 1em 0 1em", objectFit: "contain",
                                            alignItems: 'center',
                                            justifyContent: 'center'

                                        }}
                                        src={`${require("../Images/TwitchCode.png")}?w=164&h=164&fit=crop&auto=format`}
                                        alt="Python Code for Twitch Chat Interaction"

                                    />

                                </Box>
                            </Modal>
                            : null}
                    </ CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Creating Python Code for Twitch Chat Interaction
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>
                                During the academic year of 2021/22, I was looking into learning python.
                                As a result, when looking into its capabilities I found a few libraries that piqued my interest.
                            </p>
                            <p>
                                After Looking at a few guides online,
                                I realised it would be possible to make a program that
                                would allow for video streamers on Twitch to interact with their
                                chatrooms. It would do this by converting chat messages like
                                "up", "down", "left", "right" into physical key presses on a keyboard.
                                This in turn allows for a large community of viewers to interact with
                                video game streamers.
                            </p>

                            The following libraries were used:
                            <ul>
                                <li>keyboard</li>
                                <li>pydirectinput</li>
                                <li>pyautogui</li>
                                <li>pynput</li>
                                <li>requests</li>
                            </ul>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
            <Box sx={{ pt: 5 }}>
                <Typography variant="h5" gutterBottom>
                    {'Academic Projects:'}
                </Typography>
                <Divider />
                <Card >
                    <CardActionArea onClick={() =>
                        openModalAndSetKey('Safety App')
                    }>
                        <CardMedia
                            sx={{ objectPosition: '100% 50%', maxHeight: '200px' }}
                            component="img"
                            alt="Safety App Wireframe"
                            // @ts-ignore
                            image={require("../Images/WSAWireframe.png")}
                        />
                        {modalOpen && modalKey === 'Safety App' ?
                            <Modal open={modalOpen}>
                                <Box
                                    display='flex'
                                    justifyContent={'center'}
                                    sx={{ style }}>
                                    <img
                                        style={{
                                            maxHeight: '50%',
                                            maxWidth: '50%',
                                            // @ts-ignore
                                            display: { xs: 'none', sm: 'block' },
                                            padding: "1em 1em 0 1em", objectFit: "contain",
                                            alignItems: 'center',
                                            justifyContent: 'center'

                                        }}
                                        src={`${require("../Images/WSAWireframe.png")}?w=164&h=164&fit=crop&auto=format`}
                                        alt="Safety App Wireframe"

                                    />

                                </Box>
                            </Modal>
                            : null}
                    </ CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            "Woman Safety App"
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>
                                I am currently in the process of developing an
                                application that focuses on Woman Safety
                                for my 4th year individual project.
                            </p>
                            <p>
                                It is going to be a full stack, react based
                                application with the front end being written in
                                typescript and the back end being written in C#.
                            </p>
                            <p>
                                Shown in the image above is a wireframe from the functional
                                specification.
                            </p>
                            <p>
                                <b>This project is still a work in progress.</b> When more progress is made
                                this section will be updated
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
                <Divider sx={{ pb: 2 }} />
                <Card >
                    <CardActionArea onClick={() =>
                        openModalAndSetKey('Tachometer Project')
                    }>
                        <CardMedia
                            sx={{ objectPosition: '100% 80%', maxHeight: '200px' }}
                            component="img"
                            alt="Tachometer Project"
                            // @ts-ignore
                            image={require("../Images/Tachometer.jpg")}
                        />
                        {modalOpen && modalKey === 'Tachometer Project' ?
                            <Modal open={modalOpen}>
                                <Box
                                    display='flex'
                                    justifyContent={'center'}
                                    sx={{ style }}>
                                    <img
                                        style={{
                                            maxHeight: '50%',
                                            maxWidth: '50%',
                                            // @ts-ignore
                                            display: { xs: 'none', sm: 'block' },
                                            padding: "1em 1em 0 1em", objectFit: "contain",
                                            alignItems: 'center',
                                            justifyContent: 'center'

                                        }}
                                        src={`${require("../Images/Tachometer.jpg")}?w=164&h=164&fit=crop&auto=format`}
                                        alt="Tachometer Project"

                                    />

                                </Box>
                            </Modal>
                            : null}
                    </ CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            Tachometer Project
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>
                                For my 3rd year group project, I participated in creating
                                a tachometer with a LCD display that connected to a mobile application
                                via bluetooth.
                            </p>
                            <p>
                                The Tachometer itself was a PCB designed by myself that detected how fast
                                a target was spinning via a IR receiver and a IR Photodiode.
                                It converted this signal to number RPM and sent this signal to our mobile app.
                            </p>
                            <p>
                                The mobile app had 3 main features:
                                <ul>
                                    <li>The RPM can be seen as a numerical
                                        value which matches the LCD display. </li>
                                    <li>A graph is created over a period of 60 seconds,
                                        that shows every value of RPM during that time.</li>
                                    <li>A game mode: With the 3D printed hand crank (shown
                                        in the above image) up to 4 players can compete for the highest
                                        rpm over a span of 10 seconds. Each players values are plotted on
                                        on a graph and a winner is decided when everyone has had their turn. </li>
                                </ul>
                            </p>
                            <p>
                                <b>Development for this project has been concluded.</b> Documentation for the project will
                                be updated to the website at a later date.
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
                <Divider sx={{ pb: 2 }} />
                <Card >
                    <CardActionArea onClick={() =>
                        openModalAndSetKey('ImageViewer')
                    }>
                        <CardMedia
                            sx={{ objectPosition: '100% 10%', maxHeight: '200px' }}
                            component="img"
                            alt="ImageViewer"
                            // @ts-ignore
                            image={require("../Images/ImageViewer.png")}
                        />
                        {modalOpen && modalKey === 'ImageViewer' ?
                            <Modal open={modalOpen}>
                                <Box
                                    display='flex'
                                    justifyContent={'center'}
                                    sx={{ style }}>
                                    <img
                                        style={{
                                            maxHeight: '50%',
                                            maxWidth: '50%',
                                            // @ts-ignore
                                            display: { xs: 'none', sm: 'block' },
                                            padding: "1em 1em 0 1em", objectFit: "contain",
                                            alignItems: 'center',
                                            justifyContent: 'center'

                                        }}
                                        src={`${require("../Images/ImageViewer.png")}?w=164&h=164&fit=crop&auto=format`}
                                        alt="ImageViewer"

                                    />

                                </Box>
                            </Modal>
                            : null}
                    </ CardActionArea>
                    <CardContent>

                        <Typography gutterBottom variant="h6" component="div">
                            Java Image Viewer
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>
                                For my final assignment for my 1st year "Programming Foundations" Module we were
                                tasked with expanding upon a template for a basic image viewer.
                            </p>
                            <p>
                                The provided functionality was the ability to view images. From there
                                we were tasked with adding various filters and 3 or more new features.
                            </p>
                            <p>
                                The features added were:
                                <ul>
                                    <li>The ability to rotate the image 90 degrees clockwise or counter clockwise </li>
                                    <li>The ability to crop images</li>
                                    <li>Decreasing and Magnifying the dimensions of the image</li>
                                    <li>Reverting to the original image that was stored</li>
                                </ul>
                            </p>

                            This project served as our first main look at a more complex system and
                            heavily contributed to my overall mark of 88% for that module.

                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}

export default Projects;