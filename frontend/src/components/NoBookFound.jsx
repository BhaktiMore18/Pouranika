import React from 'react';
import { useLottie } from "lottie-react";
import noBookFound from "../assets/_animation/_notFound.json";

/**
 * @function NoBookFound
 * @returns {JSX.Element} 
 * @description This component displays an animation when no book is found.
 * It uses the Lottie library to render the animation.
 */
function NoBookFound() {
    const options = {
        animationData: noBookFound, // path to the Lottie animation JSON file
        loop: true, // whether the animation should loop
        autoplay: true, // whether the animation should start playing automatically
    };
    const { View } = useLottie(options);

    return (
        <React.Fragment>
            <div style={{ width: 300, height: 300 }}>
                {View}
            </div>
        </React.Fragment>
    )
}

export default NoBookFound;