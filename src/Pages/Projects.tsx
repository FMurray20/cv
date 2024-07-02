import { Box, Card, CardActionArea, CardContent, CardMedia, Divider, Modal, Typography } from '@mui/material';
import * as React from 'react';
import ReactPlayer from 'react-player';

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
        width: 200,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <>

            <>
                <Box
                    sx={{
                        pt: 2
                    }}>
                    <Card sx={{
                        backgroundColor: '#5E6A87',
                        color: '#fff',
                        textAlign: 'center',
                        verticalAlign: 'middle',
                        padding: 1 // Apply the animation here as well if you want the Card to also fade in
                    }}>
                        <Typography variant="h5">
                            {'Personal Projects'}
                        </Typography>
                    </Card>

                    <Divider sx={{ pb: 2, animation: 'fadeIn 0.5s ease-in-out' }} />
                    <Card sx={{ animation: 'fadeIn 0.5s ease-in-out' }}>
                        <CardActionArea onClick={() =>
                            openModalAndSetKey('CV-V2.png')
                        }>
                            <CardMedia
                                sx={{ objectPosition: '100% 20%', maxHeight: '200px' }}
                                component="img"
                                alt="CV Website"
                                // @ts-ignore
                                image={require("../Images/CV-V2.png")}
                            />
                            {modalOpen && modalKey === 'CV-V2.png' ?
                                <Modal open={modalOpen}>
                                    <Box
                                        display='flex'
                                        justifyContent={'center'}
                                        sx={{ style }}>
                                        <img
                                            style={{
                                                maxHeight: '70%',
                                                maxWidth: '70%',
                                                // @ts-ignore
                                                display: { xs: 'none', sm: 'block' },
                                                padding: "1em 1em 0 1em", objectFit: "contain",
                                                alignItems: 'center',
                                                justifyContent: 'center'

                                            }}
                                            src={`${require("../Images/CV-V2.png")}?w=164&h=164&fit=crop&auto=format`}
                                            alt="CV Website"
                                        />

                                    </Box>
                                </Modal>
                                : null}
                        </ CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                CV Website: V2
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>
                                    Welcome to the latest version of my website! I'm excited to share the significant updates and improvements that have been made since then.
                                </p>
                                <p>
                                    This website is a React-based application primarily written in JavaScript and typescript. It utilizes MUI for the main elements of its user interface. Hosting is provided by Firebase, and all the code was written by me.
                                </p>
                                <p>
                                    I am employing a Scrum approach to building this website. What you're currently seeing is V2, which has now been significantly enhanced.
                                </p>
                                <p>
                                    The new features and improvements include:
                                    <ul>
                                        <li>Better navigation between pages</li>
                                        <li>An updated skill chart section with a fully interactive bubble chart</li>
                                        <li>An integrated linkedin feed</li>
                                        <li>Updated experience and education information</li>
                                        <li>A fully animated background</li>
                                        <li>Various style changes for consistent viewing on mobile devices</li>
                                    </ul>
                                </p>
                                <p>
                                    Future versions will include:
                                    <ul>
                                        <li>A fully functioning backend</li>
                                        <li>Interactive examples of projects</li>
                                        <li>Documentation on some projects</li>
                                        <li>Git access to my projects</li>
                                    </ul>
                                </p>
                                <p>
                                    Plus many more! The website will be updated continuously as new sprints are completed.
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>

                    <Divider sx={{ pb: 2, animation: 'fadeIn 0.5s ease-in-out' }} />
                    <Card sx={{ animation: 'fadeIn 0.5s ease-in-out' }}>
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
                                                maxHeight: '70%',
                                                maxWidth: '70%',
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
                                CV Website V1
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>
                                    The first version of the website you are currently viewing!
                                    Due to time constraints the first version was fairly limited in scope.
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
                    <Card sx={{ animation: 'fadeIn 0.5s ease-in-out' }} >
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
                    <Card sx={{ animation: 'fadeIn 0.5s ease-in-out' }} >
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
                    <Card sx={{
                        backgroundColor: '#5E6A87',
                        color: '#fff',
                        textAlign: 'center',
                        padding: 1
                    }}>
                        <Typography variant="h5">
                            {'Academic Projects:'}
                        </Typography>
                    </Card>
                    <Divider sx={{ pb: 2 }} />
                    <Card sx={{ animation: 'fadeIn 0.5s ease-in-out' }} >
                        <div style={{ position: 'relative', paddingTop: '37.5%' }}>
                            <ReactPlayer
                                url='https://www.youtube.com/watch?v=4KS7mAzUKKE'
                                width='100%'
                                height='100%'
                                style={{ position: 'absolute', top: 0, left: 0 }}
                            />
                        </div>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                The Make Scotland Tidy Project
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                The system saw integration of a custom mechanical rover, object detection model,
                                third-party autonomous navigation framework and control algorithms to achieve the task.
                                <p>
                                    The mechanical system provides a mobile base, robotic arm for litter collection, a collection bin and high-powered drivetrain.
                                    The vision system uses an object detection model trained on a large litter dataset to identify, track and localize litter.
                                </p>
                                To achieve autonomous navigation, the rover and control system have been designed to leverage the Ardupilot autopilot system.

                                <p>
                                    These test procedures aimed to evaluate the system performance in indoor and outdoor environments.
                                    Results demonstrate the system's capability to identify and collect diverse litter items, navigate varied terrain and maintain preplanned routes.
                                    The system has been shown to be robust and reliable in a range of environments and conditions.
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Divider sx={{ pb: 2 }} />
                    <Card sx={{ animation: 'fadeIn 0.5s ease-in-out' }} >
                        <Box display="flex" flexDirection="row">
                            <CardActionArea onClick={() =>
                                openModalAndSetKey('Safety App 1')
                            }>
                                <CardMedia
                                    sx={{ objectPosition: '100% 50%', maxHeight: '200px' }}
                                    component="img"
                                    alt="Safety App Wireframe"
                                    // @ts-ignore
                                    image={require("../Images/SafeJourneys1.jpg")}
                                />
                                {modalOpen && modalKey === 'Safety App 1' ?
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
                                                src={`${require("../Images/SafeJourneys1.jpg")}?w=164&h=164&fit=crop&auto=format`}
                                                alt="Safety App: Safety Areas and Scores"

                                            />

                                        </Box>
                                    </Modal>
                                    : null}
                            </ CardActionArea>
                            <CardActionArea onClick={() => openModalAndSetKey('Safety App 2')}>
                                <CardMedia
                                    sx={{ objectPosition: '100% 50%', maxHeight: '200px' }}
                                    component="img"
                                    alt="Safety App Wireframe"
                                    // @ts-ignore
                                    image={require("../Images/SafeJourneys2.jpg")}
                                />
                                {modalOpen && modalKey === 'Safety App 2' ?
                                    <Modal open={modalOpen}>
                                        <Box
                                            display='flex'
                                            justifyContent={'center'}
                                            sx={{ style }}>
                                            <img
                                                style={{
                                                    maxHeight: '100%',
                                                    maxWidth: '100%',
                                                    // @ts-ignore
                                                    display: { xs: 'none', sm: 'block' },
                                                    padding: "1em 1em 0 1em", objectFit: "contain",
                                                    alignItems: 'center',
                                                    justifyContent: 'center'
                                                }}
                                                src={`${require("../Images/SafeJourneys2.jpg")}?w=164&h=164&fit=crop&auto=format`}
                                                alt="Safety App: Crime markers on map"
                                            />
                                        </Box>
                                    </Modal>
                                    : null}
                            </CardActionArea>
                        </Box>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">
                                SafeJourneys
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <p>
                                    For my Bachelors Project at the University of Strathclyde, I developed SafeJourneys, a full-stack application designed to enhance personal safety by providing users with real-time crime data and safety scores.
                                </p><p>
                                    The full stack application was built using the react.js framework in combination with typescript for front-end development. Python was used for back-end development and was hosted on AWS with a NoSQL database.
                                </p><p>
                                    The app is equipped with a robust map feature that enables users to pinpoint the exact location of past crimes. Moreover, the map feature includes safety areas and scores, which provide users with real-time information on the safety level of their current location.
                                </p><p>
                                    The application is also equipped with a robust list feature, enabling users to organize and filter crime entries efficiently. Furthermore, it includes an authentication system to facilitate multiple user support.
                                </p><p>
                                    The app has undergone rigorous functional testing, performance evaluation, and a user study to ensure usability.
                                </p><p>
                                    The results of the study were positive,
                                    with 100% of participants having a positive experience, demonstrating the app's potential impact on larger society as a whole.
                                </p>
                            </Typography>
                        </CardContent>
                    </Card>
                    <Divider sx={{ pb: 2 }} />
                    <Card sx={{ animation: 'fadeIn 0.5s ease-in-out' }} >
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
                    <Card sx={{ animation: 'fadeIn 0.5s ease-in-out' }} >
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
        </>
    );

}

export default Projects;