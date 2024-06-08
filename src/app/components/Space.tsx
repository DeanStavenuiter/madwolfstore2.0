'use client'; // This is an indicator for the bundler to compile the code for client-side usage

import React, { useEffect } from 'react'; // Importing necessary modules from React

interface Props { // Defining types for props
    speedFactor?: number; // Speed factor for stars movement
    backgroundColor?: string; // Background color of the canvas
    starColor?: [number, number, number]; // RGB color of the stars
    starCount?: number; // Number of stars to be generated
}

export default function Starfield(props: Props) { // Main component function
    const { speedFactor = 0.05, backgroundColor = 'black', starColor = [255, 255, 255], starCount = 5000 } = props; // Destructuring props with default values

    useEffect(() => { // useEffect hook to handle side effects
        const canvas = document.getElementById('starfield') as HTMLCanvasElement; // Getting canvas element

        if (canvas) { // If canvas element is found
            const c = canvas.getContext('2d'); // Getting 2D context of the canvas

            if (c) { // If 2D context is available
                let w = window.innerWidth; // Window width
                let h = window.innerHeight; // Window height

                const setCanvasExtents = () => { // Function to set canvas size
                    canvas.width = w;
                    canvas.height = h;
                };

                setCanvasExtents(); // Set initial canvas size

                window.onresize = () => { // Event listener for window resize
                    setCanvasExtents(); // Update canvas size on window resize
                };

                const makeStars = (count: number) => { // Function to generate stars
                    const out = [];
                    for (let i = 0; i < count; i++) {
                        const s = {
                            x: Math.random() * 1600 - 800, // Random x position
                            y: Math.random() * 900 - 450, // Random y position
                            z: Math.random() * 1000, // Random z position
                        };
                        out.push(s);
                    }
                    return out;
                };

                let stars = makeStars(starCount); // Generate stars

                const clear = () => { // Function to clear canvas
                    c.fillStyle = backgroundColor;
                    c.fillRect(0, 0, canvas.width, canvas.height);
                };

                const putPixel = (x: number, y: number, brightness: number) => { // Function to draw a star pixel
                    const radius = 0.8
                    const rgb =
                        'rgba(' + starColor[0] + ',' + starColor[1] + ',' + starColor[2] + ',' + brightness + ')';
                        c.fillStyle = rgb;
                        c.beginPath();
                        c.arc(x, y, radius, 0, Math.PI * 2);
                        c.fill();
                };

                const moveStars = (distance: number) => { // Function to move stars
                    const count = stars.length;
                    for (var i = 0; i < count; i++) {
                        const s = stars[i];
                        s.z -= distance;
                        while (s.z <= 1) {
                            s.z += 1000;
                        }
                    }
                };

                let prevTime: number;
                const init = (time: number) => { // Function to initialize animation
                    prevTime = time;
                    requestAnimationFrame(tick);
                };

                const tick = (time: number) => { // Function to update animation
                    let elapsed = time - prevTime;
                    prevTime = time;

                    moveStars(elapsed * speedFactor); // Move stars based on time elapsed

                    clear(); // Clear canvas

                    const cx = w / 2; // Center x coordinate
                    const cy = h / 2; // Center y coordinate

                    const count = stars.length;
                    for (var i = 0; i < count; i++) { // Loop through stars to draw them
                        const star = stars[i];

                        const x = cx + star.x / (star.z * 0.001); // Calculate x position considering perspective
                        const y = cy + star.y / (star.z * 0.001); // Calculate y position considering perspective

                        if (x < 0 || x >= w || y < 0 || y >= h) { // Check if the star is outside canvas bounds
                            continue;
                        }

                        const d = star.z / 1000.0; // Distance ratio
                        const b = 1 - d * d; // Brightness

                        putPixel(x, y, b); // Draw the star pixel
                    }

                    requestAnimationFrame(tick); // Request next frame
                };

                requestAnimationFrame(init); // Start animation loop

                // Add window resize listener:
                window.addEventListener('resize', function () { // Event listener for window resize
                    w = window.innerWidth;
                    h = window.innerHeight;
                    setCanvasExtents(); // Update canvas size on window resize
                });
            } else {
                console.error('Could not get 2d context from canvas element');
            }
        } else {
            console.error('Could not find canvas element with id "starfield"');
        }

        return () => { // Cleanup function
            window.onresize = null; // Remove window resize listener
        };
    }, [starColor, backgroundColor, speedFactor, starCount]); // Dependencies for useEffect hook

    return (
        <canvas // JSX for canvas element
            id="starfield"
            style={{
                padding: 0,
                margin: 0,
                position: 'fixed',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 10,
                opacity: 1,
                pointerEvents: 'none',
                mixBlendMode: 'screen',
            }}
        ></canvas>
    );
}
