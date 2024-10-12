"use client";

import './homepage.scss';
import Image from "next/image";
import {useEffect, useState} from "react";

const Homepage = () => {

    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        // Function to update the rotation based on scroll position
        const handleScroll = () => {
            setRotation(window.scrollY * 0.1); // Adjust scroll speed factor as needed
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className="homepage-content">
            <div>
                <div className={"img-container"}>
                    <Image
                        src="/assets//images/homepage.png"
                        alt="Profile picture"
                        width={300}
                        height={300}
                        unoptimized
                    />
                    <div
                        className="border-overlay"
                        style={{transform: `rotate(${rotation}deg)`}}
                    ></div>
                </div>
            </div>
            <div>
                <span className="name">Alexandre Journet</span>
                <span className="title">Software Engineer</span>
                <span className="work">Currently @AXOPEN</span>
            </div>
        </div>
    );
}

export default Homepage;
