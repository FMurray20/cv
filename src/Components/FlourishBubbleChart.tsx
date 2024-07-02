import { CircularProgress } from '@mui/material';
import React, { useState, useEffect } from 'react';

function LoadingSpinner() {
    return <CircularProgress />;
}

function FlourishBubbleChart(props) {
    const [isLoading, setIsLoading] = useState(true); // Start with loading true to show spinner initially

    useEffect(() => {
        setIsLoading(true); // Whenever the filter changes, set loading to true
        // Simulate a loading time (e.g., fetching data). This should be replaced with actual data fetching logic.
        const timer = setTimeout(() => {
            setIsLoading(false); // Set loading to false after data is fetched
        }, 1000); // Simulate a fetch time of 1 second

        return () => clearTimeout(timer); // Cleanup the timer
    }, [props.filter]); // This effect runs every time the filter prop changes

    return (
        <>
            {isLoading ? (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '400px' }}>
                    <LoadingSpinner />
                </div>
            ) : (
                <>
                    {props.filter === 'All' && (
                        <>
                            <iframe
                                src="https://flo.uri.sh/visualisation/18472638/embed"
                                title="Interactive or visual content"
                                className="flourish-embed-iframe"
                                frameBorder="0"
                                scrolling="no"
                                style={{ width: '100%', height: '400px', background: 'transparent' }}
                                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                            ></iframe>
                            <div style={{ width: '100%', marginTop: '4px', textAlign: 'right' }}>
                                <a
                                    className="flourish-credit"
                                    href="https://public.flourish.studio/visualisation/18472638/?utm_source=embed&utm_campaign=visualisation/18472638"
                                    target="_top"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img
                                        alt="Made with Flourish"
                                        src="https://public.flourish.studio/resources/made_with_flourish.svg"
                                        style={{ width: '105px', height: '16px', border: 'none', margin: '0' }}
                                    />
                                </a>
                            </div>
                        </>
                    )}
                    {props.filter === 'Programming Languages' && (
                        <>
                            <iframe
                                src="https://flo.uri.sh/visualisation/18510855/embed"
                                title="Interactive or visual content"
                                className="flourish-embed-iframe"
                                frameBorder="0"
                                scrolling="no"
                                style={{ width: '100%', height: '400px' }}
                                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                            ></iframe>
                            <div style={{ width: '100%', marginTop: '4px', textAlign: 'right' }}>
                                <a
                                    className="flourish-credit"
                                    href="https://public.flourish.studio/visualisation/18510855/?utm_source=embed&utm_campaign=visualisation/18510855"
                                    target="_top"
                                    style={{ textDecoration: 'none !important' }}
                                >
                                    <img
                                        alt="Made with Flourish"
                                        src="https://public.flourish.studio/resources/made_with_flourish.svg"
                                        style={{ width: '105px !important', height: '16px !important', border: 'none !important', margin: '0 !important' }}
                                    />
                                </a>
                            </div>
                        </>
                    )}
                    {props.filter === 'Platforms' && (
                        <>
                            <iframe
                                src="https://flo.uri.sh/visualisation/18511300/embed"
                                title="Interactive or visual content"
                                className="flourish-embed-iframe"
                                frameBorder="0"
                                scrolling="no"
                                style={{ width: '100%', height: '400px' }}
                                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                            ></iframe>
                            <div style={{ width: '100%', marginTop: '4px', textAlign: 'right' }}>
                                <a
                                    className="flourish-credit"
                                    href="https://public.flourish.studio/visualisation/18511300/?utm_source=embed&utm_campaign=visualisation/18511300"
                                    target="_top"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img
                                        alt="Made with Flourish"
                                        src="https://public.flourish.studio/resources/made_with_flourish.svg"
                                        style={{ width: '105px', height: '16px', border: 'none', margin: '0' }}
                                    />
                                </a>
                            </div>
                        </>
                    )}
                    {props.filter === 'Other Skills' && (
                        <>
                            <iframe
                                src="https://flo.uri.sh/visualisation/18511391/embed"
                                title="Interactive or visual content"
                                className="flourish-embed-iframe"
                                frameBorder="0"
                                scrolling="no"
                                style={{ width: '100%', height: '400px' }}
                                sandbox="allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation"
                            ></iframe>
                            <div style={{ width: '100%', marginTop: '4px', textAlign: 'right' }}>
                                <a
                                    className="flourish-credit"
                                    href="https://public.flourish.studio/visualisation/18511391/?utm_source=embed&utm_campaign=visualisation/18511391"
                                    target="_top"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <img
                                        alt="Made with Flourish"
                                        src="https://public.flourish.studio/resources/made_with_flourish.svg"
                                        style={{ width: '105px', height: '16px', border: 'none', margin: '0' }}
                                    />
                                </a>
                            </div>
                        </>
                    )}
                </>
            )}
        </>
    );
}

export default FlourishBubbleChart;