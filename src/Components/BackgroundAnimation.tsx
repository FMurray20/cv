import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import React from "react";
import { ISourceOptions } from "tsparticles-engine";

const BackgroundAnimation = () => {
    const options = {
        background: {
            color: {
                value: "#D3D3D3",
            }
        },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 800
                }
            },
            color: {
                value: ["#2E3B55", "#5E6A87", "#E2F0FF", "#D8A31A"]
            },
            shape: {
                type: "circle"
            },
            opacity: {
                value: 1
            },
            size: {
                value: { min: 1, max: 8 }
            },
            links: {
                enable: true,
                distance: 150,
                color: "#808080",
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: false,
                straight: false,
                outModes: "out"
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                },
                onClick: {
                    enable: false,
                    mode: "push"
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 1
                    }
                },
                push: {
                    quantity: 4
                }
            }
        }
    } as ISourceOptions;

    const particlesInit = useCallback(async (engine) => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    return (

        <Particles options={options} init={particlesInit} />

    );
};

export default BackgroundAnimation;